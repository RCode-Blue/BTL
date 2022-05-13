import React from "react";

const Signup = () => {
  return (
    <section id="signup" className="welcome-form-wrapper">
      <header>Signup</header>
      <form className="welcome-form">
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <label>
          Repeat password
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Signup;
