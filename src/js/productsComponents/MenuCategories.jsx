import React, { Component } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";

class MenuCategories extends Component {
  render() {
    const StyledMenu = styled.div`
      width: 140px;
      height: 100vh;
      background-color: #f5f7fa;
      color: #959595;
      padding: 0 40px;
      float: left;
      h3 {
        color: black;
        padding-top: 50px;
      }
      li {
        list-style-type: none;
        margin-top: 30px;
        cursor: pointer;
        &:hover {
          color: ${colors.mustard};
        }
        &.active {
          color: ${colors.mustard};
        }
      }
    `;
    return (
      <StyledMenu>
        <h3>Categories</h3>
        <ul>
          <li
            className={this.props.category == "All" ? "active" : ""}
            onClick={this.props.onClick}
          >
            All
          </li>
          {this.props.categories.map((item, index) => (
            <li
              key={index}
              onClick={this.props.onClick}
              className={this.props.category == item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
        <h3>Brands</h3>
        <ul>
          <li
            className={this.props.brand == "All" ? "active" : ""}
            onClick={this.props.onClickB}
          >
            All
          </li>
          {this.props.brands.map((item, index) => (
            <li
              key={index}
              onClick={this.props.onClickB}
              className={this.props.brand == item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </StyledMenu>
    );
  }
}
export default MenuCategories;
