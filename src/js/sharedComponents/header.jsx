import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const StyledHeader = styled.header`
      grid-area: header;
      background-color: #333;
      display: grid;
      grid-template: 50px/ 40px auto 150px;
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
      }
      .login a {
        color: #fbb710;
        padding-right: 10px;
        display: inline-block;
        margin: 14px 0;
        text-decoration: none;
      }
    `;
    return (
      <StyledHeader>
        <i className="fas fa-couch"></i>
        <nav>
          <ul>
            <li>
              <Link to={this.props.baseUrl}>Home</Link>
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
          <a href="#">Sign Up</a>
          <a href="#">Sign In</a>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
