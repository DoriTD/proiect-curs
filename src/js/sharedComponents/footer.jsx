import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: #333;
  

  .secondSection {
    grid-area: secondSection;
    background-color: black;
    color: white;
    height: 100%;
    li {
      display: inline-block;
      list-style-type: none;
      a {
        color: #fbb710;
        text-decoration: none;
        padding: 10px;
      }
    }
  }
`;
export default props => {
  return (
    <StyledFooter>
      <section className="firstSection">
        <div className="subscribe-text">
          <h2>
            Subscribe for a <span>25% Discount</span>
          </h2>
          <p>
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
            amet mi vulputate consectetur. Donec auctor interdum purus, ac
            finibus massa bibendum nec.
          </p>
        </div>
        <form className="subscribe-input">
          <input type="email" name="email" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </form>
      </section>
      <section className="secondSection">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </StyledFooter>
  );
};
