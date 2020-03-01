import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";
import Star from "../sharedComponents/icons/star.svg";
import FullStar from "../sharedComponents/icons/full-star.svg";
import LightStar from "../sharedComponents/icons/light-star.svg";
import LightFullStar from "../sharedComponents/icons/light-full-star.svg";
import ShoppingBasket from "../sharedComponents/icons/shopping-basket.svg";

const StyledItem = styled.div`
  padding: 15px;
  > div {
    width: 100%;
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
      .rating {
        cursor: pointer;
        width: 100px;
        height: 20px;
      }
    }
    article {
      padding: 0 30px;
    }
  }
`;

export default props => {
  const [product, setProduct] = useState(null);
  const [userRating, setUserRating] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    return props.fire
      .firestore()
      .collection("products")
      .doc(props.productName)
      .onSnapshot(doc => {
        const prod = doc.data();
        const rating = [];
        for (let i = 0; i < Math.round(prod.rating); i++) rating.push(true);
        for (let i = Math.round(prod.rating); i < 5; i++) rating.push(false);
        setProduct({ ...prod, stars: rating });
      });
  }, []);
  const onEnter = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  const userRatingEnter = count => () => {
    const localRating = [];
    for (let i = 0; i < 5; i++) localRating.push(i <= count);
    setUserRating(localRating);
  };
  const userRatingLeave = count => () => {
    setUserRating([false, false, false, false, false]);
  };
  const onSetUserRating = count => () => {
    const newRating =
      (product.rating * product.ratingUserCount + (count + 1)) /
      (product.ratingUserCount + 1);
    props.fire
      .firestore()
      .collection("products")
      .doc(props.productName)
      .update({
        ratingUserCount: product.ratingUserCount + 1,
        rating: newRating
      });
  };

  return (
    <StyledItem>
      {product && (
        <div>
          <img src={product.imageUrl} alt="" />
          <div>
            <div className="itemDescription">
              <p>{product.price}$</p>
              <h3>{product.name}</h3>
            </div>
            <div className="itemActions">
              <div
                className="rating"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                {!hover && (
                  <div className="globalRating">
                    {product.stars.map((rat, i) =>
                      rat ? (
                        <FullStar key={i} width="20" height="20" />
                      ) : (
                        <Star key={i} width="20" height="20" />
                      )
                    )}
                  </div>
                )}
                {hover && (
                  <div className="userRating">
                    {userRating.map((rat, i) =>
                      rat ? (
                        <FullStar
                          onMouseEnter={userRatingEnter(i)}
                          onMouseLeave={userRatingLeave(i)}
                          onClick={onSetUserRating(i)}
                          key={i}
                          width="20"
                          height="20"
                        />
                      ) : (
                        <Star
                          onMouseEnter={userRatingEnter(i)}
                          onMouseLeave={userRatingLeave(i)}
                          onClick={onSetUserRating(i)}
                          key={i}
                          width="20"
                          height="20"
                        />
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="cart">
                <ShoppingBasket />
              </div>
            </div>
            <div className="clearFix"></div>
            <article>{product.description}</article>
          </div>
        </div>
      )}
    </StyledItem>
  );
};
