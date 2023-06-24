import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const member = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:3000/api/v1/login", member)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("member_id", response.data.member.id);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-item sm:w-[30rem]"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
