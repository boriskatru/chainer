
import React from "react";
import vkSvg from "../../assets/svg_icons/vk.svg";
import waSvg from "../../assets/svg_icons/wa.svg";
import tgSvg from "../../assets/svg_icons/tg.svg";

import "./Footer.scss";
const Footer = ({handleSmoothTo}) => {
  const navItems = [
    { id: 0, title: "О нас", },
    { id: 1, title: "Наши партнеры",  },
    { id: 2, title: "Условия", },
    { id: 3, title: "Контакты",  },
  ];
  const mediaItems = [
    { id: 0, name: "vk", path: "https://vk.com/", img: vkSvg },
    { id: 1, name: "wa", path: "https://www.telegram.com/", img: waSvg },
    { id: 2, name: "tg", path: "https://www.whatsapp.com/", img: tgSvg },
  ];
  return (
    <div className="footer">
      <div className="footer__content">
        <ul className="footer__navigation">
          {navItems.map((nav, idx) => (
            <li onClick={()=>handleSmoothTo(nav.id)} key={`${nav.id}:${idx}`} className="footer__navigation_item">
              <a  className="footer__navigation_link">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__media">
          {mediaItems.map((media, idx) => (
            <a
              target="_blank"
              href={media.path}
              key={`${media}:${idx}`}
              className="footer__media_item"
            >
              <img src={media.img} alt="media_icon" />
            </a>
          ))}
        </div>
        <div className="footer__terms">
          <a target="_blank" href="#">
            политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
