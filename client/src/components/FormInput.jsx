import React, { useState } from "react";

const FormInput = () => {
  const [value, setValue] = useState({
    title:"",
    address:"",
  });


  const hdlOnChange = (e) => {

    setValue({
        ...value,
        [e.target.name]:e.target.value,
    });
  };

  const hdlSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    console.log("Hello submit")
  }

  return (
    <div>
      <h2>{value.title}</h2>
      <form onSubmit={hdlSubmit}>
        <label> Title: </label>
        <input 
            name="title" 
            onChange={(e) => hdlOnChange(e)} />

        <label> Address: </label>
        <input 
            name="address" 
            onChange={(e) => hdlOnChange(e)} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
