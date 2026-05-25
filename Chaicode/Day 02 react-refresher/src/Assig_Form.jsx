import { useState, react } from "react";

function AssigForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log([formData]);
  }

  return (
    <>
      <h2>Assig Form</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit" formAction={HandleSubmit} >Submit</button>
    <H5>Form Data</H5>
    <p>{formData[0]}</p>
    <p>{formData[1]}</p>
    <p>{formData[2]}</p>
    </>
  );
}

export default AssigForm;
