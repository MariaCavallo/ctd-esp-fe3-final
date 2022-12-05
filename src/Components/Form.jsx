import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameValidation = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (nameValidation(name) && /\S+@\S+\.\S+/.test(email)) {
      document.querySelector("#message").innerHTML = "Thank you " + name + ", we will contact you as soon as possible, by email"
    } else {
      document.querySelector("#error_message").innerHTML = "Please verify your information again"
    }
  };

    return (
      <>
        <form onSubmit={onSubmitForm}>
          <input 
          id="nameInput" 
          placeholder="Insert your name" 
          value={name} 
          onChange={onChangeName}
          />
          <input 
          id="emailInput" 
          placeholder="Insert your email" 
          value={email} 
          onChange={onChangeEmail}/>
          <button type="submit">Send</button>
        </form>
        <p id="error_message"></p>
        <h3 id="message"> </h3>
      </>
    )
  }

export default Form;
