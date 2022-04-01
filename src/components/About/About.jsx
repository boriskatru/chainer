
import React from "react";
import { Button } from "../";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__main">
          <div className="about__title">
            поможем восстановить нарушенные цепи поставок компаний
          </div>
          <div className="about__description">Первые 3 запроса БЕСПЛАТНО</div>
          <div className="about__features">
            <Button
              label="оставить заявку"
              callback={() => console.log("Оставить заявку")}
            />
            <Button
              label="регистрация"
              outline
              callback={() => console.log("Регистрация")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
