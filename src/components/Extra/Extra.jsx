
import React from "react";
import { Button } from "../";
import "./Extra.scss";
const Extra = () => {
  return (
    <div className="extra">
      <div className="extra__title">
        Поиск оборудования осуществляется при помощи комплексной оценки
        экспертной системы
      </div>
      <div className="extra__btn">
        <Button
          label="оставить заявку"
          callback={() => console.log("оставить заявку")}
        />
      </div>
    </div>
  );
};

export default Extra;
