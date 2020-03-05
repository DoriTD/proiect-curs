import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./sharedComponents/header.jsx";
import Footer from "./sharedComponents/footer.jsx";
import Aside from "./sharedComponents/aside.jsx";
import Section from "./hompageComponents/section.jsx";
import Products from "./productsComponents/products.jsx";
import Product from "./itemComponents/ItemDescription.jsx";
import SignUp from "./autentification/signUp/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./autentification/SignIn/index.jsx";

const StyledApp = styled.div`
  display: grid;
  grid-template: 50px auto 300px/ 300px auto;
  grid-template-areas:
    "header header"
    "aside section"
    "footer footer";
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
        <Header fire={props.fire} currentUser={currentUser} />
        <Aside />
        <Switch>
          <Route exact path="/">
            <Section
              db={props.db}
              fire={props.fire}
              products1={props.data.products}
            />
          </Route>
          <Route exact path={`/products`}>
            <Products data={props.data} fire={props.fire} />
          </Route>
          <Route path={`/sign-up`}>
            <SignUp name={name} callback={callback} fire={props.fire} />
          </Route>
          <Route path={`/sign-in`}>
            <SignIn fire={props.fire} />
          </Route>
          <Route
            path={`/products/:productName`}
            render={({ match }) => (
              <Product
                fire={props.fire}
                productName={match.params.productName}
              />
            )}
          />
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
};
