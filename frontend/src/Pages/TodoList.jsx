import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoItem from "../Components/TodoItem";
import { AiOutlineArrowUp } from "react-icons/ai";
import axios from "axios";

function TodoList() {
  const pageSize = 10;

  const [tasks, setTasks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  // fetch tasks
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:3000/api/v1/tasks?pageSize=${pageSize}&pageNumber=${pageNumber}`
      )
      .then((response) => {
        setTasks((current) => [...current, ...response.data]);
        setHasMore(response.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNumber]);

  // observe last task and add 1 to pageNumber when it is visible
  const observer = useRef();
  const lastTaskRef = useCallback(
    (task) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((current) => current + 1);
        }
      });
      if (task) observer.current.observe(task);
    },
    [loading, hasMore]
  );

  function handleDeleteTask(id) {
    console.log(`http://127.0.0.1:3000/api/v1/tasks/${id}`);
    axios
      .delete(`http://127.0.0.1:3000/api/v1/tasks/${id}`)
      .then(() => {
        setTasks((current) => current.filter((t) => t.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleFinishTask(id) {
    // update target task to finished === true
    const task = { ...tasks.filter((t) => t.id === id), finished: true };
    console.log(task);
    axios
      .put(`http://127.0.0.1:3000/api/v1/tasks/${id}`, task)
      .then((response) => {
        // update tasks
        setTasks((current) =>
          current.map((t) => (t.id === id ? response.data : t))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex h-fit w-[80%] flex-col rounded-md bg-slate-200 p-6">
        <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
          Lista de Tarefas
        </h1>
        {tasks.map((task, index) => {
          // add reference to last task
          if (index + 1 === tasks.length) {
            return (
              <div ref={lastTaskRef} key={task.id}>
                <TodoItem
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                  handleFinishTask={handleFinishTask}
                />
              </div>
            );
          } else {
            return (
              <TodoItem
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleFinishTask={handleFinishTask}
              />
            );
          }
        })}
        <div className="mb-8 self-center text-xl font-extrabold text-sky-800">
          {loading && "Loading..."}
        </div>
      </div>
      {pageNumber > 1 && (
        <button
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          className="fixed bottom-10 right-10 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
}

export default TodoList;
