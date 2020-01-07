import React, { Component } from "react";
import styled from "styled-components";
import Product from "./product.jsx";

class Section extends Component {
  render() {
    const StyledSection = styled.section`
      grid-area: section;
      height: 1500px;

      .container {
        width: 33.3333%;
        float: left;
      }
    `;
    return (
      <StyledSection>
        <div className="container">
          <Product product={this.props.products1[0]} class={"col1"} />
          <Product product={this.props.products1[3]} class={"col2"} />
          <Product product={this.props.products1[2]} class={"col3"} />
        </div>
        <div className="container">
          <Product product={this.props.products1[4]} class={"col3"} />
          <Product product={this.props.products1[9]} class={"col2"} />
          <Product product={this.props.products1[7]} class={"col1"} />
        </div>
        <div className="container">
          <Product product={this.props.products1[8]} class={"col1"} />
          <Product product={this.props.products1[10]} class={"col3"} />
          <Product product={this.props.products1[11]} class={"col2"} />
        </div>
      </StyledSection>
    );
  }
}
export default Section;
