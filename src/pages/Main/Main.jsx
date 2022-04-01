/** @format */

import React from "react";
import {
  Header,
  About,
  Information,
  Schema,
  Extra,
  Offers,
  Benefits,
  Footer,
} from "../../components";

import "./Main.scss";

const Main = () => {
  const aboutRef = React.createRef();
  const partnersRef = React.createRef();
  const termsRef = React.createRef();
  const contactRef = React.createRef();

  const smoothTo = (id) => {
    switch (id) {
      case 0:
        partnersRef.current.scrollIntoView();
       
        break;
      case 1:
         aboutRef.current.scrollIntoView();
        break;
      case 2:
        termsRef.current.scrollIntoView();
        break;
      case 3:
        contactRef.current.scrollIntoView();
        break;
      default:
        aboutRef.current.scrollIntoView();
    }
  };
  return (
    <div className="main">
      <div ref={aboutRef} className="main__about_shadower">
        <section className="main__about">
          <div className="container__wrapper">
            <Header handleSmoothTo={smoothTo} />
            <div className="container__content">
              <About />
            </div>
          </div>
        </section>
      </div>
      <div  className="container__content">
        <Information />
      </div>
      <section ref={partnersRef} className="main__schema">
        <div className="container__content">
          <Schema />
        </div>
      </section>
      <div className="container__content">
        <Extra />
      </div>
      <section className="main__offers">
        <div className="main__offers_parts">
          <div className="offers__part offers__part_first"></div>
          <div className="offers__part offers__part_second"></div>
          <div className="offers__part offers__part_third"></div>
        </div>
        <div className="container__content">
          <Offers />
        </div>
      </section>
      <section ref={termsRef} className="main__benefits">
        <div className="container__content">
          <Benefits />
        </div>
      </section>

      <div ref={contactRef} className="main__footer_shadow">
        <section className="main__footer">
          <div className="container__wrapper">
            <Footer  handleSmoothTo={smoothTo} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
