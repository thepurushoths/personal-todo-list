import Head from "next/head";
import styles from "../styles/Home.module.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodoList from "../appcommons/TodoList/useTodoList";
import { useSelector } from "react-redux";

export default function Home() {
  const biz = useTodoList();
  const todoState = useSelector((state) => state.todoList);
  const totalTodoCount = Object.keys(todoState).length;
  const totalActiveList = Object.keys(todoState).filter(
    (todo) => todoState[todo].status === "ACTIVE"
  ).length;
  const totalCompletedList = Object.keys(todoState).filter(
    (todo) => todoState[todo].status === "COMPLETED"
  ).length;

  return (
    <div className={styles.container}>
      <Head>
        <title>Personal TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>PERSONAL TODO APP</h1>
        <div className={styles.grid}>
          <TodoForm biz={biz} />
          <TodoList biz={biz} />
        </div>
        <div className={styles.row} style={{ justifyContent: "center" }}>
          <label key="total-todo" className={styles.todolist}>
            Total TODO List:
            <span className={styles.todospan}>{totalTodoCount}</span>
          </label>
          <label key="completed-todo" className={styles.todolist}>
            Completed:
            <span className={styles.todospan}>{totalCompletedList}</span>
          </label>

          <label key="active-todo" className={styles.todolist}>
            Active: <span className={styles.todospan}>{totalActiveList}</span>
          </label>
        </div>
      </main>
    </div>
  );
}
