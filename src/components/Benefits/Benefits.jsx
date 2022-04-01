
import React from "react";
import benefitSvg1 from "../../assets/svg_icons/benefit_1.svg";
import benefitSvg2 from "../../assets/svg_icons/benefit_2.svg";
import benefitSvg3 from "../../assets/svg_icons/benefit_3.svg";

import togglerSvg from "../../assets/svg_icons/benefit_toggler.svg";
import "./Benefits.scss";

const Benefits = () => {
  const [benefitItems, setBenefitItems] = React.useState([
    {
      id: 0,
      icon: benefitSvg1,
      title: "Для производителя",
      content: ["поиск новых клиетов", "testsetstset", "testeststestset"],
      circleColor: "orange",
      isOpen: false,
    },
    {
      id: 1,
      icon: benefitSvg2,
      title: "Для транспортной компании",
      content: ["поиск новых клиетов"],
      circleColor: "red",
      isOpen: false,
    },
    {
      id: 2,
      icon: benefitSvg3,
      title: "Для заказчиков",
      content: ["поиск новых клиетов"],
      circleColor: "blue",
      isOpen: false,
    },
  ]);

  const handleClickOpen = (id) => {
    let prev = [...benefitItems];
    prev[id].isOpen = !benefitItems[id].isOpen;
    setBenefitItems(prev);
  };

  return (
    <div className="benefits">
      <div className="benefits__title">
        преимущества сотрудничества <br />с нами
      </div>
      <div className="benefits__content">
        {benefitItems.map((benefit, idx) => (
          <div key={`${benefit.id}:${idx}`} className="benefit__item">
            <div className="benefit__item_main">
              <div className="benefit__item_title">
                <span
                  className={`benefit__item_icon benefit__item_icon--${benefit.circleColor}`}
                >
                  <img src={benefit.icon} alt="benefit_icon" />
                </span>
                <span>{benefit.title}</span>
              </div>

              <div
                onClick={() => handleClickOpen(benefit.id)}
                className="benefit__item_toggler"
              >
                <img
                  className={`${benefit.isOpen && "toggler_rotated"}`}
                  src={togglerSvg}
                  alt="toggle_icon"
                />
              </div>
            </div>
            {benefit.isOpen && (
              <ul className="benefit__item_content">
                {benefit.content.map((title, idx) => (
                  <li
                    key={`${title}:${idx}`}
                    className="benefit__item_content--item"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
