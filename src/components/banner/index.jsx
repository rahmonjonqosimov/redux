import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/banner-image-1.webp";
import img2 from "../../assets/images/banner-image-2.webp";
import img3 from "../../assets/images/banner-image-3.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500);
  const data = [
    {
      id: 1,
      url: img1,
      title: "Скидки до 90%",
    },
    {
      id: 2,
      url: img2,
      title: "Горящие товары",
    },
    {
      id: 3,
      url: img3,
      title: "Горящие товары",
    },
  ];
  return (
    <div className="container">
      <div className="swiper">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="banner_image">
              <img
                className={`${loader ? "img_loading" : "img_loading_disabled"}`}
                src={img1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_image">
              <img
                className={`${loader ? "img_loading" : "img_loading_disabled"}`}
                src={img2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_image">
              <img
                className={`${loader ? "img_loading" : "img_loading_disabled"}`}
                src={img3}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
