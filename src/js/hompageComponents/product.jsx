import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class Product extends Component {
  render() {
    const { imageUrl, name, price, id } = this.props.product;
    const StyledProduct = styled.article`
      width: 100%;
      position: relative;
      background-image: url(${imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;

      p {
        position: absolute;
        top: 20px;
        left: 30px;
        color: #555555;

        &:before {
          content: " ";
          width: 80px;
          height: 4px;
          position: absolute;
          top: -7px;
          background-color: #fbb710;
        }
      }
      a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: black;
      }
      h3 {
        position: absolute;
        top: 40px;
        left: 30px;
      }
      &:before {
        content: " ";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(60, 60, 60, 0.6);
        transition-duration: 250ms;
        opacity: 0;
      }
      &:hover {
        p,
        h3 {
          color: white;
        }
        &:before {
          opacity: 1;
        }
      }
    `;

    return (
      <StyledProduct className={this.props.class}>
        <NavLink to={`/products/${id}`} activeClassName={"active"}>
          <p>From {price}$</p>
          <h3>{name}</h3>
        </NavLink>
      </StyledProduct>
    );
  }
}
export default Product;
