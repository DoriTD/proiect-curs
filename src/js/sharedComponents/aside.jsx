import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class Aside extends Component {
  render() {
    const StyledAside = styled.aside`
      grid-area: aside;
      padding: 60px;
      .menu {
        padding: 0;
        a {
          margin-right: 10px;
        }
      }
      li {
        list-style-type: none;
        line-height: 400%;
        font-weight: 600;
        a {
          position: relative;
          &::before {
            content: "";
            width: 0px;
            height: 4px;
            position: absolute;
            top: 45%;
            left: -80px;
            background-color: #fbb710;
            transition-duration: 500ms;
          }
          &:hover {
            &::before {
              width: 60px;
            }
          }
          &.active {
            &::before {
              width: 60px;
            }
          }
        }
      }
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #fbb710;
        }
        &.active {
          color: #fbb710;
        }
      }
      .discount {
        width: 140px;
        height: 20px;
        padding: 20px;
        color: white;
        background-color: #fbb710;
        display: inline-block;
        text-align: center;
        margin: 0 auto;
        &:hover {
          background-color: black;
          transition-duration: 250ms;
        }
      }
      .newProducts {
        width: 140px;
        height: 20px;
        padding: 20px;
        color: white;
        text-align: center;
        background-color: black;
        margin-top: 20px;
        display: block;
      }
    `;
    return (
      <StyledAside>
        <nav>
          <div>
            <a href="#">
              <img
                src="https://colorlib.com/preview/theme/amado/img/core-img/logo.png"
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
              <a href="">CART</a>
              <i className="fas fa-shopping-basket"></i>
            </li>
            <li>
              <a href="">FAVOURITES</a>
              <i className="far fa-heart"></i>
            </li>
            <li>
              <a href="">CHECKOUT</a>
            </li>
          </ul>
          <div>
            <a className="discount">Discount</a>
            <a className="newProducts">New products</a>
          </div>
        </nav>
      </StyledAside>
    );
  }
}
export default Aside;
