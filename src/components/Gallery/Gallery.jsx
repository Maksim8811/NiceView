import "./Gallery.css"
import { register } from "swiper/element/bundle"
import { useEffect, useRef } from "react"


// import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import im1x from "../images/gallery_img/galley@1x.jpg"
import im1x1 from "../images/gallery_img/galley@1x1.jpg"
import im1x2 from "../images/gallery_img/galley@1x2.jpg"
import im1x3 from "../images/gallery_img/galley@1x3.jpg"
import im1x4 from "../images/gallery_img/galley@1x4.jpg"
import im1x5 from "../images/gallery_img/galley@1x5.jpg"

register();

export const Gallery = () => {

    const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,

      injectStyles: [
        `
          .swiper-button-next {
            padding: 0px;
            margin-right: 0px;
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            color: rgba(141, 101, 21, 1);
          }
          .swiper-button-prev {
            padding: 0px;
            margin-left: 0px;
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            color: rgba(141, 101, 21, 1);
          }
          .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            background-color: rgba(141, 101, 21, 1);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

    return (
        <>

<section className="gallery">
            <div className="gallery_container">
                <h3 className="gallery_title">Галерея</h3>
                <div className="icon-Line-3r"></div>
            </div>
    
        <swiper-container class="swiper-container" ref={swiperRef} init="false">
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x} alt="apartment plan"/></swiper-slide>
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x1} alt="apartment plan"/></swiper-slide>
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x2} alt="apartment plan"/></swiper-slide>
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x3} alt="apartment plan"/></swiper-slide>
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x4} alt="apartment plan"/></swiper-slide>
          <swiper-slide class="blue-slide"><img className="gallery_img" src={im1x5} alt="apartment plan"/></swiper-slide>
        </swiper-container>
        </section>
        </>
      );

}