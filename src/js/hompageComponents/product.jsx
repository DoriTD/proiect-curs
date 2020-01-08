import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class Product extends Component {
  render() {
    const { imageUrl, name, price } = this.props.product;
    const StyledProduct = styled.article`
      width: 100%;
      background-image: url(${imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      cursor: pointer;
      p {
        position: absolute;
        top: 20px;
        left: 30px;
        color: #555555;
        &:before {
          content: " ";
          height: 4px;
          background-color: #fbb710;
          width: 80px;
          position: absolute;
          top: -7px;
        }
      }
      a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color:black;
      }
      h3 {
        position: absolute;
        top: 40px;
        left: 30px;
      }
      &:before {
        content: " ";
        background-color: rgba(60, 60, 60, 0.6);
        transition-duration: 250ms;
        opacity: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
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
      &.col1 {
        height: 600px;
      }
      &.col2 {
        height: 400px;
      }
      &.col3 {
        height: 500px;
      }
    `;

    return (
      <StyledProduct className={this.props.class}>
        <NavLink
          to={`${this.props.baseUrl}${name.toLowerCase().replace(" ", "-")}`}
          activeClassName={"active"}
        >
          <p>From {price}$</p>
          <h3>{name}</h3>
        </NavLink>
      </StyledProduct>
    );
  }
}
export default Product;
