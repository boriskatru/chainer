
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import offerImage1 from "../../assets/images/offers_1.jpeg";
import offerImage2 from "../../assets/images/offers_2.jpeg";
import offerImage3 from "../../assets/images/offers_3.jpeg";
import offerImage4 from "../../assets/images/offers_4.jpeg";
import { Scrollbar, Autoplay, Grid, Navigation,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "./Offers.scss";

const Offers = () => {
  const offerItems = [
    {
      id: 0,
      description: "Широкий выбор поставщиков и транспортных компаний",
      img: offerImage1,
    },
    {
      id: 1,
      description: "Возможность автоматизированного подбора цепей поставок",
      img: offerImage2,
    },
    {
      id: 2,
      description: "Автоматическое подтверждение возможности исполнения заказа",
      img: offerImage3,
    },
    {
      id: 3,
      description:
        "Различные варианты цепей с указанием поставщика, сроков исполнения и цены",
      img: offerImage4,
    },
  ];
  return (
    <div className="offers">
      <div className="offers__title">Нашим клиентам мы предалагаем</div>
      <div className="offers__content_mobile">
        <Swiper pagination={{
          dynamicBullets: true,
        }}  modules={[Scrollbar,Autoplay,Grid,Navigation,Pagination]} navigation={{prevEl:".offer_prev",nextEl:"offer_next"}}  slidesPerView={1} autoplay={{delay:2000}}>
          {offerItems.map((offer, idx) => (
            <SwiperSlide key={`${offer.id}:${idx}`}>
          <div  className="offers__item">
            <div className="offers__item_img">
              <img src={offer.img} alt="offer_image" />
            </div>
            <div className="offers__item_description">
              <span>{offer.description}</span>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <div className="offers__content offers__content_web">
        {offerItems.map((offer, idx) => (
          <div key={`${offer.id}:${idx}`} className="offers__item">
            <div className="offers__item_img">
              <img src={offer.img} alt="offer_image" />
            </div>
            <div className="offers__item_description">
              <span>{offer.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
