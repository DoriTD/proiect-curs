import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./product.jsx";

const StyledSection = styled.section`
  display: grid;
  grid-area: section;
  grid-template: 470px 40px 200px 200px 80px 120px 460px / auto;
  grid-template-areas:
    "prod1 prod2 prod3"
    "prod1 prod2 prod6"
    "prod4 prod2 prod6"
    "prod4 prod5 prod6"
    "prod4 prod5 prod9"
    "prod7 prod5 prod9"
    "prod7 prod8 prod9";
  .prod1 {
    grid-area: prod1;
  }
  .prod2 {
    grid-area: prod2;
  }
  .prod3 {
    grid-area: prod3;
  }
  .prod4 {
    grid-area: prod4;
  }
  .prod5 {
    grid-area: prod5;
  }
  .prod6 {
    grid-area: prod6;
  }
  .prod7 {
    grid-area: prod7;
  }
  .prod8 {
    grid-area: prod8;
  }
  .prod9 {
    grid-area: prod9;
  }
`;
export default props => {
  const [products, setProducts] = useState([]);
  useEffect(
    () =>
      props.fire
        .firestore()
        .collection("products")
        .where("featured", "==", true)
        .onSnapshot(function(querySnapshot) {
          const prods = [];
          querySnapshot.forEach(doc => {
            const data = doc.data();
            prods.push({ ...data, id: doc.id });
          });
          setProducts(prods);
        }),
    []
  );
  return (
    <StyledSection>
      {products.length > 1 &&
        products.map((product, i) => (
          <Product           
            product={product}
            class={`product prod${i + 1}`}
          />
        ))
      }
    </StyledSection>
  );
};
