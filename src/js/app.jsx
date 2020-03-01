import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./sharedComponents/header.jsx";
import Aside from "./sharedComponents/aside.jsx";
import Section from "./hompageComponents/section.jsx";
import Products from "./productsComponents/products.jsx";
import Product from "./itemComponents/ItemDescription.jsx";
import SignUp from "./autentification/signUp/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./autentification/SignIn/index.jsx";

const StyledApp = styled.div`
  display: grid;
  grid-template: 50px auto / 300px auto;
  grid-template-areas:
    "header header"
    "aside section";
`;

export default props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState(
    props.fire.auth().currentUser
      ? props.fire.auth().currentUser.disPlayName
      : ""
  );
  const callback = () => {
    setName(props.fire.auth().currentUser.disPlayName);
    window.location = "/";
  };
  useEffect(() =>
    props.fire.auth().onAuthStateChanged(user => setCurrentUser(user))
  );

  return (
    <Router>
      <StyledApp>
        <Header
          fire={props.fire}
          currentUser={currentUser}
          baseUrl={props.baseUrl}
        />
        <Aside baseUrl={props.baseUrl} />
        <Switch>
          <Route exact path={props.baseUrl}>
            <Section db={props.db} fire={props.fire} baseUrl={props.baseUrl} products1={props.data.products} />
          </Route>
          <Route path={`${props.baseUrl}products`}>
            <Products baseUrl={props.baseUrl} data={props.data} />
          </Route>
          <Route path={`${props.baseUrl}sign-up`}>
            <SignUp
              name={name}
              callback={callback}
              baseUrl={props.baseUrl}
              fire={props.fire}
            />
          </Route>
          <Route path={`${props.baseUrl}sign-in`}>
            <SignIn
              baseUrl={props.baseUrl}
              fire={props.fire}
            />
          </Route>
          <Route
            path={`${props.baseUrl}:productName`}
            render={({ match }) => (
              <Product
                data={props.data}
                productName={match.params.productName}
              />
            )}
          />
        </Switch>
      </StyledApp>
    </Router>
  );
};
