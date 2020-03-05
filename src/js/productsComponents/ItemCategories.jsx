import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../sharedComponents/colors";
import GridView from "../sharedComponents/icons/grid-view.svg";
import ListView from "../sharedComponents/icons/list-view.svg";
import Item from "./Item.jsx";

const StyledItems = styled.div`
  float: left;
  width: calc(100% - 260px);
  background-color: #f3f2f2;

  padding: 0 20px;
  input {
    width: 500px;
    height: 50px;
    float: right;
    border-radius: 7px;
    margin: 20px;
    box-shadow: 10px -6px 14px 0px rgba(251, 183, 16, 1);
    border: 1px solid ${colors.mustard};
    padding-left: 10px;
  }
  .clearFix {
    clear: both;
  }
  .colorText {
    color: black;
  }
  .icons {
    margin-top: 20px;
    float: left;

    div {
      display: inline-block;
      padding: 10px;
      &.icons1 {
        background-color: ${colors.mustard};
      }
      &.icons2 {
        background-color: black;
      }
    }
  }
  .filters {
    float: right;
    margin-top: 30px;
    div,
    select {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

export default props => {
  const [products, setProducts] = useState([]);
  useEffect(
    () =>
      props.fire
        .firestore()
        .collection("products")
        //.where("featured", "==", true)
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
    <StyledItems>
      <div>
        <input
          type="text"
          onKeyPress={props.onKeyPress}
          className="input"
          placeholder="Search..."
        />
      </div>
      <div className="clearFix"></div>
      <div>
        <div className="colorText">SHOWING ... FROM ...</div>
        <div className="icons">
          <div className="icons1">
            <ListView />
          </div>
          <div className="icons2">
            <GridView />
          </div>
        </div>
        <div className="filters">
          <div>Sort by</div>
          <select value={props.sort} onChange={props.handleSort}>
            <option value="new">Newest</option>
            <option value="asc">Price ascending</option>
            <option value="dsc">Price descending</option>
          </select>
          <div>View</div>
          <select name="" id="">
            <option value="">8</option>
            <option value="">12</option>
          </select>
        </div>
        <div className="clearFix"></div>
      </div>

      {products
        .filter(it => {
          let name = it.name.toLowerCase(); //woodden chair
          let search = props.search.toLowerCase(); //chair
          if (name.indexOf(search) >= 0) {
            return true;
          } else {
            return false;
          }
        })
        .filter(i => {
          //console.log(props.category);
          //console.log(i.category);
          if (
            props.category == i.category ||
            props.category == "All"
          ) {
            return true;
          } else {
            return false;
          }
        })
        .filter(i => {
          //console.log(props.brand);
          //console.log(i.brand);
          if (props.brand == i.brand || props.brand == "All") {
            return true;
          } else {
            return false;
          }
        })
        .sort((a, b) => {
          if (props.sort == "asc") {
            return a.price - b.price;
          } else if (props.sort == "dsc") {
            return b.price - a.price;
          } else {
            return 0;
          }
        })
        .map((item, index) => (
          <Item key={index} item={item} fire={props.fire}  productName={item.id}  />
        ))}
    </StyledItems>
  );
};
