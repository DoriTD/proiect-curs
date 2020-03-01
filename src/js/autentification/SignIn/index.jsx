import React, { useState } from "react";
import styled from "styled-components";

const StyledSignIn = styled.section`
  .container {
    width: 270px;
    margin: 0 auto;
    .field {
      height: 20px;
      margin-bottom: 10px;
      label {
        margin-right: 4px;
        float: left;
      }
      input {
        float: right;
      }
    }
  }
`;

export default props => {
  const onSignIn = () => {
    //console.log("baslkncda");
    props.fire.auth().signInWithEmailAndPassword(email, password).then(()=>{
        window.location = "/"
    });
  };  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledSignIn>
      <form className="container">
        <h1>Sign-In</h1>
        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <input type="button" onClick={onSignIn} value="Sign In" />
      </form>
    </StyledSignIn>
  );
};
