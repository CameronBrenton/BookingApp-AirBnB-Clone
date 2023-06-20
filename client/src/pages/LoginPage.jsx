/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(ev){
	ev.preventDefault();
	try {
		const {data} = await axios.post('/login', {email, password});
		setUser(data);
		alert('Login successful')
		setRedirect(true);
	} catch (error) {
		alert('Login failed')
	}
	
  }

if (redirect) {
	return <Navigate to={'/'} />
}

  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="youremail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don't have an account yet?{" "}
            <Link className="text-black underline" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
