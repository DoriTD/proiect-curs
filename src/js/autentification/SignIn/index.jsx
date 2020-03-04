import React, { useState } from "react";
import styled from "styled-components";

const StyledSignIn = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(58, 63, 68, 0.1);

  .container {
    width: 450px;
    display: flex;
    flex-direction: column;
    background: rgba(58, 63, 68, 0.5);
    box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    h1 {
      padding: 20px 20px 0;
      margin: 0;
      text-align: center;
      color: #fbb710;
      font-weight: lighter;
    }

    .field {
      display: flex;
      padding: 25px 25px 0;
      border-radius: 3px;

      input {
        width: 100%;
        padding: 1rem;
        border: 0;
        border-radius: 0.25rem;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin: 0;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        :hover,
        focus {
          background-color: #eeeeee;
        }
      }
      label {
        padding: 1rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        border-radius: 0.25rem;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        color: #3a3f44;
        background-color: #222222;
      }
      .email::before {
        content: "\f0e0";
        font: 12.25px fontawesome;
        color: #5b5b5b;
      }
      .lock::before {
        content: "\f023";
        font: 14px fontawesome;
        color: #5b5b5b;
      }
    }
    .button {
      padding: 1rem;
      border: 0;
      border-radius: 0.25rem;
      margin: 25px;
      color: white;
      background-color: #fbb710;
      transition: all 1s;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
      :hover {
        background-color: #222222;
        color: #fbb710;
      }
      :focus {
        outline: 0;
      }
    }
  }
`;

export default props => {
  const onSignIn = () => {
    console.log("baslkncda");
    props.fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = "/";
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledSignIn>
      <form className="container">
        <h1>Sign In</h1>
        <div className="field">
          <label htmlFor="email" className="email"></label>
          <input
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password" className="lock"></label>
          <input
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <input type="button"  className="button" onClick={onSignIn} value="Sign In" />
      </form>
    </StyledSignIn>
  );
};
