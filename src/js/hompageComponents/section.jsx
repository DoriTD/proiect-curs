import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./product.jsx";

const StyledSection = styled.section`
  grid-area: section;
  height: 1500px;
  .container {
    width: 33.3333%;
    float: left;
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
      {products.length > 1 && (
        <div>
          <div className="container">
            <Product
              baseUrl={props.baseUrl}
              product={products[0]}
              class={"col1"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[1]}
              class={"col2"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[2]}
              class={"col3"}
            />
          </div>
          <div className="container">
            <Product
              baseUrl={props.baseUrl}
              product={products[3]}
              class={"col3"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[4]}
              class={"col2"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[5]}
              class={"col1"}
            />
          </div>
          <div className="container">
            <Product
              baseUrl={props.baseUrl}
              product={products[6]}
              class={"col1"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[7]}
              class={"col3"}
            />
            <Product
              baseUrl={props.baseUrl}
              product={products[8]}
              class={"col2"}
            />
          </div>
        </div>
      )}
    </StyledSection>
  );
};
