import React, { useState } from "react";
import styles from "../../styles/todolist.module.css";
import ListContainer from "../TodoList/ListContainer";

export default function TodoList({ biz = {} }) {
  const STATUS = { ALL: "All", ACTIVE: "Active", COMPLETED: "Completed" };
  const TYPE = {
    ALL: "All",
    SUCCESS: "Success",
    ERROR: "Error",
    WARNING: "Warning",
    CRITICAL: "Critical",
  };

  return (
    <div className={styles.styledcontainer}>
      <div
        key={"time-container"}
        className={styles.row}
        style={{
          justifyContent: "flex-end",
          fontSize: "1rem",
          fontWeight: 700,
          padding: "0rem 1rem 0.5rem 0.5rem",
        }}
      >
        {biz.clockTime}
      </div>
      <div className={styles.row} style={{ justifyContent: "flex-end" }}>
        <div key={"status-container"} style={{ margin: "0.5rem" }}>
          <label
            key="status-label"
            htmlFor="status"
            style={{ margin: "0.2rem" }}
          >
            Status
          </label>
          <select
            key="status-select"
            name="status"
            className={styles.styledselect}
            onChange={(event) => biz.setFilterByStatus(event.target.value)}
            value={biz.filterByStatus}
          >
            {Object.keys(STATUS).map((status) => {
              return (
                <option key={status} value={status}>
                  {STATUS[status]}
                </option>
              );
            })}
          </select>
        </div>
        <div key="type-container" style={{ margin: "0.5rem" }}>
          <label key="type-name" htmlFor="type" style={{ margin: "0.2rem" }}>
            Type
          </label>
          <select
            key="type-select"
            name="type"
            className={styles.styledselect}
            onChange={(event) => biz.setFilterByType(event.target.value)}
            value={biz.filterByType}
          >
            {Object.keys(TYPE).map((typ) => {
              return (
                <option key={typ} value={typ}>
                  {TYPE[typ]}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div
        className={styles.todo_list_container}
        style={{ display: "block", overflow: "auto", marginTop: "0.25rem" }}
      >
        {biz.todoListItems &&
          Object.keys(biz.todoListItems).map((todoId) => {
            return (
              <ListContainer
                key={todoId}
                edit={() => biz.editTodoDetails(todoId)}
                completed={() => biz.markAsCompleted(todoId)}
                todoItem={biz.todoListItems[todoId]}
                currentTime={biz.clockTime}
                isActiveContainer={true}
              />
            );
          })}
      </div>
    </div>
  );
}
