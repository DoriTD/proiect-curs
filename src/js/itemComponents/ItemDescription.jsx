import React, { Component } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";
import Star from "../sharedComponents/icons/star.svg";
import ShoppingBasket from "../sharedComponents/icons/shopping-basket.svg";

class ItemDescription extends Component {
  render() {
    const StyledItem = styled.div`
      padding: 15px;
      img {
        width: 50%;
        height: 650px;
        object-fit: cover;
      }
      > div {
        float: right;
        width: 50%;
      }
      .itemDescription {
        padding: 0 30px;
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
          top: 70px;
        }
      }
      .itemActions {
        padding: 0 30px;
      }
      article {
        padding: 0 30px;
      }
    `;
    const {
      imageUrl,
      price,
      name,
      description
    } = this.props.data.products.filter(i => {
      if (i.name.toLowerCase().replace(" ", "-") == this.props.productName) {
        return true;
      } else {
        return false;
      }
    })[0];
    return (
      <StyledItem>
        <img src={imageUrl} alt="" />
        <div>
          <div className="itemDescription">
            <p>{price}$</p>
            <h3>{name}</h3>
          </div>
          <div className="itemActions">
            <div className="rating">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="cart">
              <ShoppingBasket />
            </div>
          </div>
          <div className="clearFix"></div>
          <article>{description}</article>
        </div>
      </StyledItem>
    );
  }
}
export default ItemDescription;
