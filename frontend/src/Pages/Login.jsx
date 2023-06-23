import axios from "axios";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const member = {
      name: name,
      email: email,
    };
    console.log(member);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="m-4 flex h-fit flex-col rounded-md bg-slate-200 p-10"
    >
      <h1 className="mb-8 self-center text-4xl font-extrabold text-sky-800">
        Login
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
        value="Login"
        className="w-40 rounded-lg bg-sky-500 p-2 text-2xl"
      />
    </form>
  );
}

export default Login;
