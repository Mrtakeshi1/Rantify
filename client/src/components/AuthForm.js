import React from 'react';

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { username, password },
  } = props;

  return (
    <form className='auth-form-container' onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        type="password" // Changed from "text" to "password"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button>{btnText}</button>

      <p style={{ color: "red" }}>{errMsg}</p>
    </form>
  );
}
