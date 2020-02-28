import React, { Component } from "react";
import styled from "styled-components";

export default () => {
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
  return (
    <StyledSignUp>
      <div className="container">
        <h1>Sign-up</h1>
        <div className="field">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="button" value="Sign Up" />
      </div>
    </StyledSignUp>
  );
};
