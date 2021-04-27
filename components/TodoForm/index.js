import React from "react";
import styles from "../../styles/todoform.module.css";
import { useSelector } from "react-redux";
import ValidUtils from "../../appcommons/utils/commonUtils";

function TodoForm({ biz }) {
  const TYPE = {
    SUCCESS: "Success",
    ERROR: "Error",
    WARNING: "Warning",
    CRITICAL: "Critical",
  };
  return (
    <div className={styles.styledcontainer}>
      <label key="title-label" htmlFor="title" style={{ display: "block" }}>
        Title
      </label>
      <input
        className={styles.styledinput}
        type={"text"}
        key="title-input"
        name="title"
        placeholder="Title"
        value={biz.title}
        style={{ border: `${biz.isTitleError ? "2px solid #FF0000" : ""}` }}
        onBlur={(event) => {
          event.target.value && ValidUtils.isValidText(event.target.value)
            ? biz.setIsTitleError(false)
            : biz.setIsTitleError(true);
        }}
        onChange={(event) => {
          if (
            event.target.value.length < 10 &&
            ValidUtils.isValidText(event.target.value)
          ) {
            biz.setTitle(event.target.value);
          }
        }}
      />
      <label
        key="description-label"
        htmlFor="description"
        style={{ display: "block", marginBottom: "5px" }}
      >
        Description
      </label>
      <textarea
        type={"text"}
        key="description-text"
        name="description"
        placeholder="Description about title"
        className={styles.styledtestarea}
        style={{
          border: `${biz.isDescriptionError ? "2px solid #FF0000" : ""}`,
        }}
        value={biz.description}
        onBlur={(event) => {
          event.target.value && ValidUtils.isValidText(event.target.value)
            ? biz.setIsDescriptionError(false)
            : biz.setIsDescriptionError(true);
        }}
        onChange={(event) => {
          if (
            event.target.value.length < 30 &&
            ValidUtils.isValidText(event.target.value)
          ) {
            biz.setDescription(event.target.value);
          }
        }}
      />

      <label key="type-label" htmlFor="type" style={{ display: "block" }}>
        Type
      </label>
      <select
        key="type-select"
        name="type"
        className={styles.styledselect}
        style={{ border: `${biz.isTypeError ? "2px solid #FF0000" : ""}` }}
        onChange={(event) => {
          biz.setType(event.target.value);
          ValidUtils.isValidText(event.target.value)
            ? biz.setIsTypeError(false)
            : biz.setIsTypeError(true);
        }}
        value={biz.type}
      >
        {Object.keys(TYPE).map((status) => {
          return (
            <option key={status} value={status}>
              {TYPE[status]}
            </option>
          );
        })}
      </select>
      <label htmlFor="due-at">Due At</label>
      <input
        className={styles.styledinput}
        type={"text"}
        key="due-at"
        name="due-at"
        placeholder="DD/MM/YYYY HH:mm:ss"
        style={{ border: `${biz.isDueDateError ? "2px solid #FF0000" : ""}` }}
        value={biz.dueDate}
        onBlur={(event) => {
          ValidUtils.isValidDate(event.target.value)
            ? biz.setIsDueDateError(false)
            : biz.setIsDueDateError(true);
        }}
        onChange={(event) => {
          if (event.target.value.length < 25) {
            biz.setDueDate(event.target.value);
          }
        }}
      />
      <small htmlFor="due-at" style={{ fontSize: "0.75rem", color: "#686868" }}>
        Format: 27/04/2021 12:19:00
      </small>
      <div className={styles.row} style={{ justifyContent: "center" }}>
        <button
          className={styles.styledclearbutton}
          onClick={() => biz.clearForm()}
        >
          CLEAR
        </button>
        <button
          className={styles.styledbutton}
          onClick={() => {
            if (biz.isValidForm()) {
              biz.isEditTODO ? biz.updateTodoDetails() : biz.addTodoDetails();
            }
          }}
        >
          {biz.isEditTODO ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
}

export default React.memo(TodoForm);
