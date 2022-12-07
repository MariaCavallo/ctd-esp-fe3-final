import React, { useState, useContext } from "react";
import { Button, Input, Typography } from "@mui/material";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const { state } = useContext(ContextGlobal)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameValidation = (value) => {
    return value ? value.length > 4 : false;
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
        <form onSubmit={onSubmitForm} style={{ bgColor: state.bgColor, color: state.ftColor }}>
          <Typography color='primary' variant='h3' align='center'>Contact Form</Typography>
          <Input 
          id="nameInput" 
          placeholder="Insert your name" 
          value={name} 
          onChange={onChangeName}
          />
          <Input 
          id="emailInput" 
          placeholder="Insert your email" 
          value={email} 
          onChange={onChangeEmail}/>
          <Button type="submit" variant="contained">Send</Button>
        </form>
        <br />
        <br />
        <p id="error_message"></p>
        <h3 id="message"> </h3>
      </>
    )
  }

export default Form;
