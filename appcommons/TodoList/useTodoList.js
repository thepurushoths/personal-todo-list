import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTODO, removeTODO, clear } from "../globalStore/action";
import ValidUtils from "../utils/commonUtils";
import moment from "moment";

export default function useTodoList() {
  const todoState = useSelector((state) => state.todoList);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);
  const [isDueDateError, setIsDueDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);

  const [isEditTODO, setIsEditTODO] = useState(false);
  const [filterByType, setFilterByType] = useState("ALL");
  const [filterByStatus, setFilterByStatus] = useState("ALL");
  const [todoListItems, setTodoListItems] = useState([]);

  const dispatch = useDispatch();

  const [clockTime, setClockTime] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    setInterval(() => {
      setClockTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1 * 1000);
  }, []);

  useEffect(() => {
    let _todoList = todoState;
    if (filterByStatus === "ALL" && filterByType === "ALL") {
      setTodoListItems(_todoList);
    } else {
      if (filterByStatus !== "ALL") {
        _todoList = Object.keys(_todoList)
          .filter((todo) => _todoList[todo].status == filterByStatus)
          .reduce((res, todo) => ((res[todo] = _todoList[todo]), res), {});
      }

      if (filterByType !== "ALL") {
        _todoList = Object.keys(_todoList)
          .filter((todo) => _todoList[todo].type == filterByType)
          .reduce((res, todo) => ((res[todo] = _todoList[todo]), res), {});
      }
      setTodoListItems(_todoList);
    }
  }, [filterByStatus, filterByType, todoState]);

  function addTodoDetails() {
    //   Universally Unique IDentifier
    const _id = uuidv4();
    let request = {
      [`${_id}`]: { id: _id, title, description, dueDate, type, status },
    };
    dispatch(addTODO(request));
    setIsEditTODO(false);
    clearForm();
  }

  function editTodoDetails(todoId = "") {
    if (todoId && todoState && todoState.hasOwnProperty(todoId)) {
      const { id, title, description, dueDate, type, status } = todoState[
        todoId
      ];
      setId(id);
      setTitle(title);
      setDescription(description);
      setDueDate(dueDate);
      setType(type);
      setStatus(status);
      setIsEditTODO(true);
    }
  }

  function updateTodoDetails() {
    let request = { [id]: { id, title, description, dueDate, type } };
    dispatch(addTODO(request));
    clearForm();
  }

  function markAsCompleted(todoId) {
    if (todoId && todoState && todoState.hasOwnProperty(todoId)) {
      const { id, title, description, dueDate, type, status } = todoState[
        todoId
      ];
      let updatedType = status === "ACTIVE" ? "COMPLETED" : "ACTIVE";

      let request = {
        [id]: { id, title, description, dueDate, type, status: updatedType },
      };
      dispatch(addTODO(request));
    }
  }

  function removeTodoDetails(todoId = "") {
    todoId && dispatch(removeTODO(todoId));
  }

  function clearTodoDetails() {
    dispatch(clear());
  }

  function clearForm() {
    setId("");
    setTitle("");
    setDescription("");
    setDueDate("");
    setType("");
    setStatus("");
    setIsEditTODO(false);
  }

  function isValidForm() {
    title && ValidUtils.isValidText(title)
      ? setIsTitleError(false)
      : setIsTitleError(true);
    description && ValidUtils.isValidText(description)
      ? setIsDescriptionError(false)
      : setIsDescriptionError(true);
    dueDate && ValidUtils.isValidDate(dueDate)
      ? setIsDueDateError(false)
      : setIsDueDateError(true);

    type && ValidUtils.isValidDate(dueDate)
      ? setIsTypeError(false)
      : setIsTypeError(true);

    let result =
      !title ||
      !description ||
      !dueDate ||
      !type ||
      isDueDateError ||
      isDescriptionError ||
      isTitleError ||
      isTypeError
        ? false
        : true;

    return result;
  }

  return {
    id,
    setId,
    title,
    setTitle,
    description,
    setDescription,
    dueDate,
    setDueDate,
    type,
    setType,
    status,
    setStatus,
    isEditTODO,
    setIsEditTODO,
    filterByType,
    setFilterByType,
    filterByStatus,
    setFilterByStatus,
    todoListItems,
    setTodoListItems,
    isTitleError,
    setIsTitleError,
    isDescriptionError,
    setIsDescriptionError,
    isDueDateError,
    setIsDueDateError,
    isTypeError,
    setIsTypeError,
    isStatusError,
    isValidForm,
    setIsStatusError,
    addTodoDetails,
    editTodoDetails,
    updateTodoDetails,
    removeTodoDetails,
    markAsCompleted,
    clearTodoDetails,
    clearForm,
    clockTime,
    setClockTime,
  };
}
