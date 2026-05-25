import React from "react";

function FormHandlingUn() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior -- page auto reload

    console.log(e.target.elements);
    console.log(e.target.elements.name.value);
  };

  return (
    <>
      <h3>Uncontrolled Form handling</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormHandlingUn;
