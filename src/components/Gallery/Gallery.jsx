import "./Gallery.css"
import sprite from "../images/sprite.svg"

export const Gallery = () => {

    return (
        <>
        <section className="gallery">
            <div className="gallery_container">
                <h3 className="gallery_title">Галерея</h3>
                <div className="icon-Line-1r_desktop"></div>
            <svg className="icon-Line-3r icon-Line-desktop">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
            </div>
        </section>
        
        </>
    )
}