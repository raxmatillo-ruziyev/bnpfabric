import React from 'react';
import './Slideer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card/Card';
import card1 from '../../assets/11.jpg';
import card2 from '../../assets/12.jpg';
import card3 from '../../assets/13.jpg';
import card4 from '../../assets/14.jpg';
import card5 from '../../assets/15.jpg';
import card6 from '../../assets/16.jpg';
import card7 from '../../assets/17.jpg';
import card8 from '../../assets/18.jpg';
import card9 from '../../assets/19.jpg';
import card10 from '../../assets/20.jpg';
import card11 from '../../assets/21.jpg';
import card12 from '../../assets/22.jpg';
import card13 from '../../assets/23.jpg';
import card14 from '../../assets/24.jpg';
import card15 from '../../assets/25.jpg';
import card16 from '../../assets/26.jpg';
import card17 from '../../assets/27.jpg';
import card18 from '../../assets/28.jpg';
import card19 from '../../assets/29.jpg';
import card20 from '../../assets/30.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 1, img: card1, titleKey: "title1" },
  { id: 2, img: card2, titleKey: "title2" },
  { id: 3, img: card3, titleKey: "title3" },
  { id: 4, img: card4, titleKey: "title4" },
  { id: 5, img: card5, titleKey: "title5" },
  { id: 6, img: card6, titleKey: "title6" },
  { id: 7, img: card7, titleKey: "title7" },
  { id: 8, img: card8, titleKey: "title8" },
  { id: 9, img: card9, titleKey: "title9" },
  { id: 10, img: card10, titleKey: "title10" },
  { id: 11, img: card11, titleKey: "title11" },
  { id: 12, img: card12, titleKey: "title12" },
  { id: 13, img: card13, titleKey: "title13" },
  { id: 14, img: card14, titleKey: "title14" },
  { id: 15, img: card15, titleKey: "title15" },
  { id: 16, img: card16, titleKey: "title16" },
  { id: 17, img: card17, titleKey: "title17" },
  { id: 18, img: card18, titleKey: "title18" },
  { id: 19, img: card19, titleKey: "title19" },
  { id: 20, img: card20, titleKey: "title20" }
];

const Slideer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1220, // For screens smaller than 1200px
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1120, // For screens smaller than 1200px
        settings: {
          slidesToShow: 3
        }
      },
      
      {
        breakpoint: 1020, // For screens smaller than 992px
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 820, // For screens smaller than 768px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520, // For screens smaller than 576px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="slideer">
      <div className="container">
        <div className="slider-container">
          <h1 className='slideer-title'>{t("slideerTitle")}</h1>
          <Slider style={{ marginTop: "30px" }} {...settings}>
            {data.map(item => (
              <div key={item.id} onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
                <Card cardTitle={t(item.titleKey)} cardImg={item.img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slideer;
