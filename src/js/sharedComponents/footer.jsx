import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-rows: 200px 100px;
  grid-template-areas:
    "firstSection"
    "secondSection";

  background-color: #333;

  .firstSection {
    grid-area: firstSection;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .subscribe-text {
      text-align: center;
      p {
        margin: 0;
        margin-bottom: 10px;
        font-size: 35px;
        color: white;
        span {
          color: #fbb710;
        }
      }
      > span {
        color: #b3b1b1;
      }
    }
    .subscribe-input {
      input {
        padding: 1rem;
        border: 0;
        margin: 25px;
        margin-right: 0;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        :hover,
        :focus {
          background-color: #d6d6d6;
        }
      }
      button {
        padding: 1rem;
        border: 0;
        margin: 25px;
        margin-left: 0;
        color: white;
        background-color: #fbb710;
        transition: all 1s;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.85rem;
        :hover {
          background-color: #222222;
          color: #fbb710;
        }
        :focus {
          outline: 0;
        }
      }
    }
  }
  .secondSection {
    grid-area: secondSection;
    background-color: black;

    nav {
      display: flex;
      justify-content: space-between;
      padding-right: 350px;
      > div {
        padding-left: 350px;
        margin-top: 22px;
      }
      .menu li {
        display: inline-block;
        line-height: 400%;
        font-weight: 600;
        a {
          text-decoration: none;
          color: white;
          padding: 15px;
          &:hover {
            color: #fbb710;
          }
          &.active {
            color: #fbb710;
          }
        }
      }
    }
  }
`;
export default props => {
  return (
    <StyledFooter>
      <section className="firstSection">
        <div className="subscribe-text">
          <p>
            Subscribe for a <span> 25% Discount </span>
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
            sapiente rem architecto assumenda, soluta voluptas nemo deleniti
            nihil. Nobis, commodi tenetur!
          </span>
        </div>
        <form className="subscribe-input">
          <input type="email" name="email" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </form>
      </section>
      <section className="secondSection">
        <nav>
          <div>
            <a href="#">
              <img
                src="https://colorlib.com/preview/theme/amado/img/core-img/logo2.png"
                alt="Amado Logo"
              />
            </a>
          </div>
          <ul className="menu">
            <li>
              <NavLink exact to="/" activeClassName={"active"}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={`/products`} activeClassName={"active"}>
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <a href="#">CART</a>
            </li>
            <li>
              <a href="#">FAVOURITES</a>
            </li>
            <li>
              <a href="#">CHECKOUT</a>
            </li>
          </ul>
        </nav>
      </section>
    </StyledFooter>
  );
};
