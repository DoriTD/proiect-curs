import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  grid-area: header;
  background-color: #333;
  display: grid;
  grid-template: 50px / 40px auto 250px;
  grid-template-areas: "logo nav login";
  > i {
    grid-area: logo;
    color: #fbb710;
    font-size: 3em;
    margin-left: 10px;
  }
  > nav {
    grid-area: nav;
  }
  ul {
    margin: 14px 0;
  }
  li {
    display: inline-block;
    list-style-type: none;
    a {
      color: #fbb710;
      text-decoration: none;
      padding: 10px;
    }
  }
  .login {
    grid-area: login;
    a {
      color: #fbb710;
      padding-right: 10px;
      display: inline-block;
      margin: 14px 0;
      text-decoration: none;
    }
    div {
      color: #fbb710;
      padding-right: 10px;
      display: inline-block;
      text-decoration: underline;
    }
    span {
      color: #fbb710;
      padding-right: 10px;
      display: inline-block;
      margin: 14px 0;
      text-decoration: none;
    }
  }
`;
export default props => {
  return (
    <StyledHeader>
      <i className="fas fa-couch"></i>
      <nav>
        <ul>
          <li>
            <Link to={props.baseUrl}>Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="login">
        {props.currentUser && (
          <div>
            <span>Buna, {props.currentUser.displayName} !</span>
            <div
              onClick={() => {
                props.fire
                  .auth()
                  .signOut()
                  .then(() => {
                    window.location = "/";
                  });
              }}
            >
              Log Out
            </div>
          </div>
        )}
        {!props.currentUser && (
          <div>
            <a href="/sign-up">Sign Up</a>
            <a href="/sign-in">Sign In</a>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
