
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import burger from "../../assets/svg_icons/burger.svg";
import logo from "../../assets/svg_icons/logo.svg";
import profileLogo from "../../assets/svg_icons/header_profile.svg";

import vkSvg from "../../assets/svg_icons/vk.svg";
import waSvg from "../../assets/svg_icons/wa.svg";
import tgSvg from "../../assets/svg_icons/tg.svg";
import closeIcon from "../../assets/svg_icons/close.svg";
import "./Header.scss";
const Header = ({handleSmoothTo}) => {
  const [showMenu,setShowMenu]=React.useState(false);
  const navigate = useNavigate();
  const navItems = [
    { id: 0, title: "О нас",},
    { id: 1, title: "Наши партнеры", },
    { id: 2, title: "Условия",  },
    { id: 3, title: "Контакты",  },
  ];
  const mediaItems = [
    { id: 0, name: "vk", path: "https://vk.com/", img: vkSvg },
    { id: 1, name: "wa", path: "https://www.telegram.com/", img: waSvg },
    { id: 2, name: "tg", path: "https://www.whatsapp.com/", img: tgSvg },
  ];
  const handleClickBurger =()=>{
    setShowMenu(!showMenu);
  }
  const handleClickBurgerNav =(id)=>{
    setShowMenu(false);
    handleSmoothTo(id);
  }
  return (
    <div className="header">
      <div className="header__web">
      <div onClick={() => navigate("/")} className="header__logo">
        <Link to={"/chainer"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="header__navigation">
        {navItems.map((nav, idx) => (
          <li onClick={()=>handleSmoothTo(nav.id)} key={`${nav.id}:${idx}`} className="header__navigation_item">
            <a  className="header__navigation_link">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="header__features">
        <Link to={"/profile"}>
          <img src={profileLogo} alt="profile" />
        </Link>
        <a className="header__phone" href="tel:+79991234343">+7 999 123 43 43</a>
      </div>
      <div onClick={handleClickBurger} className="header__burger">
        <img src={burger} alt="burger" />
      </div>
      </div>
      <div className="header__mob">
      <a className="header__phone" href="tel:+79991234343">+7 999 123 43 43</a>
      </div>
      <div className={`burger__menu ${showMenu && "burger__menu--opened"}`}>
        <div className="burger__navigation">
          <div onClick={()=>setShowMenu(false)} className="burger__close">
            <img src={closeIcon} alt="close" />
          </div>
          {navItems.map((nav,idx)=>
          <div onClick={()=>handleClickBurgerNav(nav.id)} key={`${nav.id}:${idx}`} className="burger__menu_item">
              {nav.title}
          </div>
          )}
        </div>
        <div className="burger__btn">
          <a href="tel:+79991234343">+7 999 123 43 43</a>
        </div>
        <div className="burger__media">
            {mediaItems.map((media,idx)=>
            <a target="_blank" href={media.path} key={`${media.id}:${idx}`} className="burger__media_item">
              <img src={media.img} alt="media_icon" />
            </a>
            )}
        </div>

      </div>
    </div>
  );
};

export default Header;
