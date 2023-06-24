import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
};

function CreateMember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  if (!localStorage.getItem("jwt")) {
    navigate("/login");
  }

  function handleCreateMember(e) {
    e.preventDefault();
    const member = {
      name: name,
      email: email,
    };
    axios
      .post("http://127.0.0.1:3000/api/v1/members", member, config)
      .then(function (response) {
        console.log(response);
        setName("");
        setEmail("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={handleCreateMember}
      className="m-4 flex h-fit flex-col rounded-md bg-slate-200 p-10"
    >
      <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
        Cadastro de Membro
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-item sm:w-[30rem]"
      />
      <input
        type="submit"
        value="Cadastrar"
        className="w-40 rounded-lg bg-sky-500 p-2 text-2xl"
      />
    </form>
  );
}

export default CreateMember;
