/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="youremail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don't have an account yet? <Link className="text-black underline" to={"/register"}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
