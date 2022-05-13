import React from "react";

const Login = () => {
  return (
    <section id="login" className="welcome-form-wrapper">
      <header>Login</header>
      <form className="welcome-form">
        <label>
          User id
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;
