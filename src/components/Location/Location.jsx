import "../Location/Location.css"
import localmob1x from "../../components/images/local_img/location_img_mob@1x.jpg"
import localmob2x from "../../components/images/local_img/location_img_mob@2x.jpg"
import localtab1x from "../../components/images/local_img/location_img_tab@1x.jpg"
import localtab2x from "../../components/images/local_img/location_img_tab@2x.jpg"
import localdesk1x from "../../components/images/local_img/location_img_desk@1x.jpg"
import localdesk2x from "../../components/images/local_img/location_img_desk@2x.jpg"


export const Location = () => {
    return (
        <>
        <section className="location">
            <div className="location_container">
                <h3 className="location_title">Місце розположення</h3>
                <div className="icon-Line-5r"></div>
            </div>

            <div className="location_picture">
                <div className="location_picture_text">
                    <p className="location_picture_par">м.Київ, вул. Соборності 12</p>
                    <p className="location_picture_par"><b>Робочі дні:</b> пн-пт 09:00-18:00</p>
                    <p className="location_picture_par"><b>Вихідні:</b> сб-нд і святкові дні</p>
                    <p className="location_picture_par"><b>Телефон менеджера:</b> +380981194159</p>
                </div>
            <picture>
                    <source srcSet={`${localmob1x} 1x, ${localmob2x} 2x`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="390px"/>
                    <source srcSet={`${localtab1x} 1x, ${localtab2x} 2x`}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="768px"/>
                    <source srcSet={`${localdesk1x} 1x, ${localdesk2x} 2x`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="872px"/>
                    <img className="location_photo" src={localmob1x} alt="map"/>
                    </picture>
            </div>

            <div className="location_contbtn">
          <button className="location_btn" type="button">На карту</button>
          </div>

            
        </section>
        </>
    )
}