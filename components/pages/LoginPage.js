import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../../src/App.css";
import HomePage from "./HomePage";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = database.filter((user) => user.username === userName);
    if (userData.length > 0) {
      if (userData[0].password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} action="/home">
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
