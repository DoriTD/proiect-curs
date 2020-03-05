import React, { Component } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";
import ShoppingBasket from "../sharedComponents/icons/shopping-basket.svg";
import { NavLink } from "react-router-dom";
import Rating from "../sharedComponents/rating.jsx";

class Item extends Component {
  render() {
    const StyledItem = styled.div`
      float: left;
      padding: 15px;
      img {
        width: 600px;
        height: 650px;
        object-fit: cover;
      }
      .itemDescription {
        float: left;
        position: relative;
        p {
          color: ${colors.mustard};
          font-size: 24px;
        }
        &:before {
          content: " ";
          height: 4px;
          background-color: #fbb710;
          width: 80px;
          position: absolute;
          top: 15px;
        }
      }
      .itemActions {
        float: right;
      }
      .rating {
        transform: scale(0.7);
        margin: 15px 0;
        margin-right: -20px;
      }
      .cart {
        width: 27px;
        display: inline-block;
        float: right;
      }
      .clearFix {
        clear: both;
      }
    `;
    const { imageUrl, price, name } = this.props.item;
    return (
      <StyledItem>
        <NavLink to={`/products/${this.props.item.id}`}>
          <img src={imageUrl} alt="" />
        </NavLink>
        <div>
          <div className="itemDescription">
            <p>{price}$</p>
            <h3>{name}</h3>
          </div>
          <div className="itemActions">
            <Rating
              fire={this.props.fire}
              rating={this.props.item.rating}
              ratingUserCount={this.props.item.ratingUserCount}
              productName={this.props.productName}
            />
            <div className="cart">
              <ShoppingBasket />
            </div>
          </div>
          <div className="clearFix"></div>
        </div>
      </StyledItem>
    );
  }
}
export default Item;
