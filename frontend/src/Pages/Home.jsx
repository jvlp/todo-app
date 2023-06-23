import React from "react";
import { VscTasklist } from "react-icons/vsc";
import { MdPostAdd, MdEdit, MdPersonAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="m-4 flex flex-col rounded-md bg-slate-200 p-10 ">
      <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
        Home
      </h1>
      <button
        onClick={() => navigate("/register")}
        className="btn-primary mb-2 flex w-full items-center"
      >
        <MdPersonAdd className="mr-3" /> Cadastrar Membro
      </button>
      <button
        onClick={() => navigate("/task")}
        className="btn-primary mb-2 flex w-full items-center"
      >
        <MdPostAdd className="mr-3" /> Cadastrar Tarefa
      </button>
      <button
        onClick={() => navigate("/list")}
        className="btn-primary mb-2 flex w-full items-center"
      >
        <VscTasklist className="mr-3" /> Lista de Tarefas
      </button>
    </div>
  );
}

export default Home;
