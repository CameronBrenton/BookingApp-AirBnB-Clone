/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
	ev.preventDefault()
	axios.get('http://localhost:4000/test')
  }

  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input type="email" placeholder="youremail.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            Don't have an account yet?
            <Link className="text-black underline" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
