import React, { useState } from "react";
import styled from "styled-components";

const StyledSignUp = styled.section`
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
  const onSignUp = () => {
    props.fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(rsp => {
        rsp.user
          .updateProfile({
            displayName: `${firstName} ${lastName}`
          })
          .then(props.callback);
      });
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledSignUp>
      <form className="container">
        <h1>Sign-up</h1>
        <div className="field">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            onChange={e => {
              e.preventDefault();
              setFirstName(e.target.value);
            }}
            value={firstName}
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name:</label>
          <input
            onChange={e => {
              e.preventDefault();
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
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
        <input type="button" onClick={onSignUp} value="Sign Up" />
      </form>
    </StyledSignUp>
  );
};
