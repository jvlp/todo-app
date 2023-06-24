import axios from "axios";
import { useEffect, useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    name: "",
    description: "",
    finished: false,
    priority: 0,
    member_id: 0,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/v1/tasks/${id}`)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditTask(e) {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:3000/api/v1/tasks/${id}`, task)
      .then(function (response) {
        console.log(response);
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleDeleteTask() {
    axios
      .delete(`http://127.0.0.1:3000/api/v1/tasks/${task.id}`)
      .then(function (response) {
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleFinishTask() {
    // update target task to finished === true
    setTask((current) => ({ ...current, finished: true }));
    axios
      .put(`http://127.0.0.1:3000/api/v1/tasks/${task.id}`, task)
      .then(function (response) {
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={handleEditTask}
      className="m-4 flex h-fit flex-col rounded-md bg-slate-200 p-10"
    >
      <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
        Edição de Tarefa
      </h1>
      <input
        type="text"
        placeholder="Nome"
        value={task.name}
        minLength={5}
        maxLength={50}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        className="form-item sm:w-[30rem]"
      />
      <textarea
        rows={4}
        maxLength={140}
        placeholder="Descrição"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="form-item resize-none sm:w-[30rem]"
      ></textarea>
      <div className="flex justify-between">
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="form-item w-full text-slate-800 focus:bg-slate-300"
        >
          <option value="0">Prioridade</option>
          <option value="0">Baixa</option>
          <option value="1">Média</option>
          <option value="2">Alta</option>
        </select>
        <div className="relative top-[-35px] mx-4 text-slate-700">
          {task.description.length}/140
        </div>
      </div>
      <div className="flex">
        <input
          type="submit"
          value="Salvar"
          className="w-40 rounded-lg bg-sky-500 p-2 text-xl font-bold text-slate-200"
        />
        <button
          onClick={handleFinishTask}
          className="mx-4 rounded-lg bg-teal-500 p-4 text-xl font-bold text-slate-200"
        >
          <MdCheck />
        </button>
        <button
          onClick={handleDeleteTask}
          className="rounded-lg bg-red-600 px-5 text-xl font-bold text-slate-200"
        >
          <MdDelete />
        </button>
      </div>
    </form>
  );
}

export default EditTask;
