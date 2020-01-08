import React, { Component } from "react";
import styled from "styled-components";
import Header from "./sharedComponents/header.jsx";
import Aside from "./sharedComponents/aside.jsx";
import Section from "./hompageComponents/section.jsx";
import Products from "./productsComponents/products.jsx";
import Product from "./itemComponents/ItemDescription.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    const StyledApp = styled.div`
      display: grid;
      grid-template: 50px auto / 300px auto;
      grid-template-areas:
        "header header"
        "aside section";
    `;
    return (
      <Router>
        <StyledApp>
          <Header baseUrl={this.props.baseUrl}/>
          <Aside baseUrl={this.props.baseUrl} />
          <Switch>
            <Route exact path={this.props.baseUrl}>
              <Section products1={this.props.data.products} />
            </Route>
            <Route path={`${this.props.baseUrl}/products`}>
              <Products data={this.props.data} />
            </Route>
            <Route
              path={`${this.props.baseUrl}/:productName`}
              render={({ match }) => (
                <Product
                  data={this.props.data}
                  productName={match.params.productName}
                />
              )}
            />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;
