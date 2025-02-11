import { useState, FormEvent, ChangeEvent } from "react";
import { registerUser } from "../api/authAPI"; // Import the registation API call
import Auth from "../utils/auth";
import type { UserLogin } from "../interfaces/UserLogin";

const Register = () => {
  const [registerData, setRegisterData] = useState<UserLogin>({
    userName: "",
    password: "",
  });

  // Handle input changes for username and password fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  //Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevents default form submission
    try {
      // Call the API to register the user
      const data = await registerUser(registerData);

      // Automatically log in the user after successful registration
      Auth.login(data.token);
    } catch (err) {
      console.error("failed to register", err);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="username-form">
          <label>Username</label>
          <input
            className="form-input"
            type="text"
            name="userName"
            value={registerData.userName || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="password-form">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={registerData.password || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="submit-form">
          <button className="btn submit-button" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
