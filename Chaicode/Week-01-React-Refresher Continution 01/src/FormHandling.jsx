// Controlled form handling

import React from "react";
import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>Form Handling</h2>
      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your Name"
      />
      <p>Hello {name}</p>
    </>
  );
}

export default FormHandling;
