
import React from "react";
import infoSvg1 from "../../assets/svg_icons/info_1.svg";
import infoSvg2 from "../../assets/svg_icons/info_2.svg";
import infoSvg3 from "../../assets/svg_icons/info_3.svg";
import infoSvg4 from "../../assets/svg_icons/info_4.svg";

import "./Information.scss";
const Information = () => {
  const infoItems = [
    {
      id: 0,
      title: "заводов в РФ",
      img: <img src={infoSvg1} alt="info_logo" />,
      count: 1500,
    },
    {
      id: 1,
      title: "крупных предприятий",
      img: <img src={infoSvg2} alt="info_logo" />,
      count: 900,
    },
    {
      id: 2,
      title: "поставщиков зарегестрированно на сайте",
      img: <img src={infoSvg3} alt="info_logo" />,
      count: 3000,
    },
    {
      id: 3,
      title: "созданно успешных связей",
      img: <img src={infoSvg4} alt="info_logo" />,
      count: 1000,
    },
  ];
  return (
    <div className="information">
      {infoItems.map((item, idx) => (
        <div key={`${item.id}:${idx}`} className="information__item">
          <div className="information__item_logo">{item.img}</div>
          <div className="information__item_count">
            {">"}
            {item.count}
          </div>
          <div className="information__item_title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Information;
