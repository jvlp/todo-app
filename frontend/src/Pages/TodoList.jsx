import React, { useEffect, useState } from "react";
import TodoItem from "../Components/TodoItem";
import { AiOutlineArrowUp } from "react-icons/ai";
import axios from "axios";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/tasks")
      .then(function (response) {
        setTasks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleDeleteTask(id) {
    console.log(`http://127.0.0.1:3000/api/v1/tasks/${id}`);
    axios
      .delete(`http://127.0.0.1:3000/api/v1/tasks/${id}`)
      .then(function (response) {
        setTasks((current) => current.filter((t) => t.id !== id));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleFinishTask(id) {
    // update target task to finished === true
    const task = { ...tasks.filter((t) => t.id === id), finished: true };
    console.log(task);
    axios
      .put(`http://127.0.0.1:3000/api/v1/tasks/${id}`, task)
      .then(function (response) {
        console.log(response);
        // update tasks
        setTasks((current) =>
          current.map((t) => (t.id === id ? response.data : t))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const shouldShowArrowUp = () => {
    return document.documentElement.scrollTop > window.innerHeight;
  };

  return (
    <>
      <div className="flex h-fit w-[80%] flex-col rounded-md bg-slate-200 p-10">
        <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
          Lista de Tarefas
        </h1>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleFinishTask={handleFinishTask}
          />
        ))}
      </div>
      {shouldShowArrowUp() && (
        <button
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          className="fixed bottom-10 right-10 flex  h-10 w-10 items-center justify-center rounded-lg bg-sky-700"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
}

export default TodoList;
