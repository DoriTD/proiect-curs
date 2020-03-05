import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";
import Star from "../sharedComponents/icons/star.svg";
import FullStar from "../sharedComponents/icons/full-star.svg";
import LightStar from "../sharedComponents/icons/light-star.svg";
import LightFullStar from "../sharedComponents/icons/light-full-star.svg";

const StyledItem = styled.div``;

export default props => {
  
  const [userRating, setUserRating] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [hover, setHover] = useState(false);
  const stars = [];
  for (let i = 0; i < Math.round(props.rating); i++) stars.push(true);
  for (let i = Math.round(props.rating); i < 5; i++) stars.push(false);

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
      (props.rating * props.ratingUserCount + (count + 1)) /
      (props.ratingUserCount + 1);
    props.fire
      .firestore()
      .collection("products")
      .doc(props.productName)
      .update({
        ratingUserCount: props.ratingUserCount + 1,
        rating: newRating
      });
  };

  return (
    <StyledItem>
      <div className="rating" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {!hover && (
          <div className="globalRating">
            {stars.map((rat, i) =>
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
                <LightFullStar
                  onMouseEnter={userRatingEnter(i)}
                  onMouseLeave={userRatingLeave(i)}
                  onClick={onSetUserRating(i)}
                  key={i}
                  width="20"
                  height="20"
                />
              ) : (
                <LightStar
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
    </StyledItem>
  );
};
