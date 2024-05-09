import "./Gallery.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import im1x from "../images/gallery_img/galley@1x.jpg"
import im1x1 from "../images/gallery_img/galley@1x1.jpg"
import im1x2 from "../images/gallery_img/galley@1x2.jpg"
import im1x3 from "../images/gallery_img/galley@1x3.jpg"
import im1x4 from "../images/gallery_img/galley@1x4.jpg"
import im1x5 from "../images/gallery_img/galley@1x5.jpg"

const galleryArr = [im1x, im1x1, im1x2, im1x3, im1x4, im1x5]

export const Gallery = ({
    infinity = true}) => {

    const [currentImage, setCurrentImage] = useState(0)

    const clickLeftArrow = () => {
        if(infinity && currentImage === 0){
            setCurrentImage(galleryArr.length - 1)
        }
        else {
            setCurrentImage(currentImage - 1)
        }
        
    }

    const clickRightArrow = () => {
        if(infinity && currentImage === galleryArr.length - 1) {
            setCurrentImage(0)
        }
        else {
            setCurrentImage(currentImage + 1)
        }
    }

    return (
        <>
        <section className="gallery">
            <div className="gallery_container">
                <h3 className="gallery_title">Галерея</h3>
                <div className="icon-Line-3r"></div>
            </div>

            <div className="gallery_lib">

                {(infinity || currentImage > 0) && (
                        <div className="left_arrow" onClick={clickLeftArrow}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                )}

                <img className="gallery_img" src={galleryArr[currentImage]} alt="apartment plan"/>

                {(infinity || currentImage !== galleryArr.length - 1) && (
                         <div className="right_arrow" onClick={clickRightArrow}>
                         <FontAwesomeIcon icon={faChevronRight} />
                         </div>
         
                )}
               
            </div>
        </section>
        
        </>
    )
}