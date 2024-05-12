import "./Gallery.css"
import { register } from "swiper/element/bundle"
import { useEffect, useRef } from "react"


// import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import im1x1 from "../images/gallery_img/galley@1x.jpg"
import im1x2 from "../images/gallery_img/galley@1x1.jpg"
import im1x3 from "../images/gallery_img/galley@1x2.jpg"
import im1x4 from "../images/gallery_img/galley@1x3.jpg"
import im1x5 from "../images/gallery_img/galley@1x4.jpg"
import im1x6 from "../images/gallery_img/galley@1x5.jpg"

import imTab1 from "../images/gallery_img/galleryTablet@1x.jpg"
import imTab2 from "../images/gallery_img/galleryTablet@1x1.jpg"
import imTab3 from "../images/gallery_img/galleryTablet@1x2.jpg"
import imTab4 from "../images/gallery_img/galleryTablet@1x3.jpg"
import imTab5 from "../images/gallery_img/galleryTablet@1x4.jpg"
import imTab6 from "../images/gallery_img/galleryTablet@1x5.jpg"

import imDesktop1 from "../images/gallery_img/galleryDesktop@1x1.jpg"
import imDesktop2 from "../images/gallery_img/galleryDesktop@1x2.jpg"
import imDesktop3 from "../images/gallery_img/galleryDesktop@1x3.jpg"
import imDesktop4 from "../images/gallery_img/galleryDesktop@1x4.jpg"
import imDesktop5 from "../images/gallery_img/galleryDesktop@1x5.jpg"
import imDesktop6 from "../images/gallery_img/galleryDesktop@1x6.jpg"

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
            top: 100px;
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            color: rgba(141, 101, 21, 1);
          }

          .swiper-button-next > svg {
            width: 75%;
            height: 75%;
          }

          .swiper-button-prev {
            padding: 0px;
            margin-left: 0px;
            top: 100px;
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            color: rgba(141, 101, 21, 1);
          }

          .swiper-button-prev > svg {
            
            width: 75%;
            height: 75%;
          }

          .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            background-color: rgba(141, 101, 21, 1);
          }

          @media screen and (min-width: 768px) {
            .swiper-button-next {
              top: 200px;
            }

            .swiper-button-next > svg {
              width: 100%;
              height: 100%;
            }

            .swiper-button-prev {
              top: 200px;
            }
  
            .swiper-button-prev > svg {
              width: 100%;
              height: 100%;
            }

            .swiper-pagination-bullet{
              width: 24px;
              height: 24px;
            } 
          }

          @media screen and (min-width: 1440px) {
            .swiper-button-next {
              top: 220px;
              color: rgba(251, 252, 252, 1);
              background-color: rgba(206, 177, 129, 1);
              border-radius: 50%;
              padding: 20px 20px;
              width: 48px;
              height: 48px;
            }

            .swiper-button-next > svg {
              width: 100%;
              height: 100%;
            }

            .swiper-button-prev {
              top: 220px;
              color: rgba(251, 252, 252, 1);
              background-color: rgba(206, 177, 129, 1);
              border-radius: 50%;
              padding: 20px 20px;
              width: 48px;
              height: 48px;
            }
  
            .swiper-button-prev > svg {
              width: 100%;
              height: 100%;
            }

            .swiper-pagination-bullet{
              display: none;
            } 
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
          <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x1}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab1}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop1}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x1} alt="apartment plan"/>
      </picture>
            </swiper-slide>
            <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x2}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab2}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop2}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x2} alt="apartment plan"/>
      </picture>
            </swiper-slide>
            <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x3}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab3}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop3}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x3} alt="apartment plan"/>
      </picture>
            </swiper-slide>
            <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x4}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab4}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop4}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x4} alt="apartment plan"/>
      </picture>
            </swiper-slide>
            <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x5}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab5}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop5}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x5} alt="apartment plan"/>
      </picture>
            </swiper-slide>
            <swiper-slide class="blue-slide">
          <picture>
      <source srcSet={`${im1x6}`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="200px"/>
      <source srcSet={imTab6}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="400px"/>
      <source srcSet={`${imDesktop6}`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="500px"/>
      <img className="gallery_img" src={im1x6} alt="apartment plan"/>
      </picture>
            </swiper-slide>
        </swiper-container>
          <div className="container_btn">
          <button className="gallery_btn" type="button">Запис на перегляд</button>
          </div>

        </section>
        </>
      );

}