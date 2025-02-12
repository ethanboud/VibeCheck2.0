// TODO CSS NEEDS WORK ON THIS PAGE

import { useState, type FormEvent, type ChangeEvent } from "react";

import Auth from "../utils/auth";
import { login } from "../api/authAPI";
import type { UserLogin } from "../interfaces/UserLogin";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    userName: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        {/* Username input field */}
        <div className="username-input">
          <label htmlFor="userName">Username</label>
          <input
            className="form-input"
            type="text"
            name="userName"
            value={loginData.userName || ""}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={loginData.password || ""}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div className="button-div">
          <button className="btn btn-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
