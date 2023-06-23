import axios from "axios";
import { useState } from "react";

function CreateTask() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function createTaskRequest(e) {
    e.preventDefault();
    const task = {
      name: name,
      description: desc,
      finished: false,
      priority: 0,
      member_id: 2,
    };
    axios
      .post("http://127.0.0.1:3000/api/v1/tasks", task)
      .then(function (response) {
        console.log(response);
        setName("");
        setDesc("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={createTaskRequest}
      className="m-4 flex h-fit flex-col rounded-md bg-slate-200 p-10"
    >
      <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
        Cadastro de Tarefa
      </h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        minLength={5}
        maxLength={50}
        onChange={(e) => setName(e.target.value)}
        className="form-item sm:w-[30rem]"
      />
      <textarea
        rows={4}
        maxLength={140}
        placeholder="Descrição"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="form-item resize-none sm:w-[30rem]"
      ></textarea>
      <div className="flex justify-between">
        <select className="form-item w-full text-slate-800 focus:bg-slate-300">
          <option value="0">Prioridade</option>
          <option value="0">Baixa</option>
          <option value="1">Média</option>
          <option value="2">Alta</option>
        </select>
        <div className="relative top-[-35px] mx-4 text-slate-700">
          {desc.length}/140
        </div>
      </div>
      <input
        type="submit"
        value="Cadastrar"
        className="w-40 rounded-lg bg-sky-500 p-2 text-2xl"
      />
    </form>
  );
}

export default CreateTask;
