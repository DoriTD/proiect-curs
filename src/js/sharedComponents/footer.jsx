import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-rows: 200px 100px; 
  grid-template-areas:
    "firstSection"
    "secondSection";
    

  background-color: #333;

  .firstSection{
    grid-area: firstSection;
    background-color: blue;
  }
  .secondSection{
    grid-area: secondSection;
    background-color: red;
  }

  
`;
export default props => {
  return (
    <StyledFooter>
      <section className="firstSection">
        {/* <div className="subscribe-text">
          <h2>
            Subscribe for a <span>25% Discount</span>
          </h2>
          <p>
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
            amet mi vulputate consectetur. Donec auctor interdum purus, ac
            finibus massa bibendum nec.
          </p>
        </div>
        <form className="subscribe-input">
          <input type="email" name="email" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </form> */}
      </section>
      <section className="secondSection">
        {/* <div className="subscribe-text">
          <h2>
            Subscribe for a <span>25% Discount</span>
          </h2>
          <p>
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
            amet mi vulputate consectetur. Donec auctor interdum purus, ac
            finibus massa bibendum nec.
          </p>
        </div>
        <form className="subscribe-input">
          <input type="email" name="email" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </form> */}
      </section>
   
    </StyledFooter>
  );
};
