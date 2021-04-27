import React from "react";
import styles from "../../styles/todolist.module.css";
import { useDispatch } from "react-redux";
import { removeTODO } from "../../appcommons/globalStore/action";
import moment from "moment";
const DUE_TIME = {
  exceeded: "#ff8c8c",
  lessThanOneHour: "#feff9c",
  default: "#ffffff",
};
const TYPE = {
  ALL: "All",
  SUCCESS: "Success",
  ERROR: "Error",
  WARNING: "Warning",
  CRITICAL: "Critical",
};

export default function ListContainer(props) {
  const { todoItem } = props;
  const dispatch = useDispatch();

  const now = moment(props.currentTime, "MMMM Do YYYY, h:mm:ss a");
  const expiration = moment(
    props.todoItem.dueDate.toString(),
    "DD/MM/YYYY HH:mm:ss"
  );
  const diff = expiration.diff(now);

  const diffDuration = moment.duration(diff);

  let dateDifference = diffDuration.days();
  let hourDiff = diffDuration.hours();
  let minutesDiff = diffDuration.minutes();
  let secondsdiff = diffDuration.seconds();

  let status = "";
  let bgColor = "";
  if (todoItem.status === "COMPLETED") {
    status = "(Task Completed)";
    bgColor = DUE_TIME.default;
  } else if (dateDifference <= 0 && hourDiff <= 0 && minutesDiff <= 0) {
    status = "(Due time exceeded)";
    bgColor = DUE_TIME.exceeded;
  } else if (hourDiff === 0 && minutesDiff >= 0) {
    bgColor = DUE_TIME.lessThanOneHour;
    status = `(Due in ${Math.abs(minutesDiff)}m ${Math.abs(secondsdiff)}s)`;
  } else {
    bgColor = DUE_TIME.default;
    status = `(Due in ${
      Math.abs(dateDifference) !== 0 ? `${Math.abs(dateDifference)}d` : ""
    } ${Math.abs(hourDiff)}h ${Math.abs(minutesDiff)}m ${Math.abs(
      secondsdiff
    )}s)`;
  }

  return (
    <div
      className={`${styles.todo_list} ${
        props.isActiveContainer ? styles.todo_list : ""
      }`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <a
        // className={styles.titleconatiner}
        onClick={() => props.edit()}
        style={{ width: "75%" }}
      >
        <div style={{ width: "100%" }}>
          <label className={styles.list_title}>
            {todoItem.title}
            <span
              style={{
                fontSize: "0.65rem",
                alignSelf: "center",
                marginLeft: "3px",
              }}
            >
              {`${status}`}
            </span>
          </label>
          <label className={styles.list_description}>
            {`Type ${TYPE[todoItem.type]} - ${todoItem.description}`}
          </label>
        </div>
      </a>
      <div style={{ width: "25%", position: "relative" }}>
        <div style={{ display: "flex", padding: "2px", float: "right" }}>
          <input
            type="checkbox"
            key="status"
            name="status"
            defaultChecked={todoItem.status === "COMPLETED" ? true : false}
            checked={todoItem.status === "COMPLETED" ? true : false}
            onClick={(event) => {
              props.completed();
            }}
          />
          <label htmlFor="status" className={styles.status_checkbox}>
            <a onClick={() => props.completed()} style={{ cursor: "pointer" }}>
              Completed
            </a>
          </label>
        </div>
        <div style={{ display: "flex", padding: "2px" }}>
          <a
            onClick={() => dispatch(removeTODO(todoItem.id))}
            style={{ cursor: "pointer" }}
          >
            <img
              className={styles.trash}
              src={"/trash.svg"}
              alt="Remove"
              style={{ height: "18px", width: "18px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
