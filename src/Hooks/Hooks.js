import React, { useState } from "react";
import useInputState from "./useFormState";

const Hooks = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  return (
    <div>
      <h1>
        You Enter: {email} & Password is: {password}
      </h1>
      <input type="text" value={email} onChange={setEmail} />
      <input type="password" value={password} onChange={setPassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default Hooks;
