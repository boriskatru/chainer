
import React from "react";
import "./Schema.scss";
const Schema = () => {
  return (
    <div className="schema">
      <div className="schema__title">
        максимально простой <br />
        поиск поставщиков
      </div>
      <ul className="schema__line schema__line_web">
        <li>
          <div className="schema__part">
            <span>1</span>
            <span>запрос на поиск продукции</span>
          </div>
        </li>
        <li>
          <div className="schema__part schema__second">
            <span>2</span>
            <span>
              автоматический выбор поставщика и отправка запроса на возможность
              изготовления
            </span>
          </div>
        </li>
        <li>
          <div className="schema__part">
            <span>3</span>
            <span>Согласование сотрудничества одним звонком</span>
          </div>
        </li>
      </ul>

      <ul className="schema__line_mobile">
      <li>
          <div className="schema__part">
            <span>1</span>
            <span>запрос на поиск продукции</span>
          </div>
        </li>
        <li>
          <div className="schema__part schema__second">
            <span>2</span>
            <span>
              автоматический выбор поставщика и отправка запроса на возможность
              изготовления
            </span>
          </div>
        </li>
        <li>
          <div className="schema__part">
            <span>3</span>
            <span>Согласование сотрудничества одним звонком</span>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default Schema;
