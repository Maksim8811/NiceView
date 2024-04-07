import "./Specific.css"
import sprite from "../images/sprite.svg"
import otoniel_1x from "../images/specific_img/otoniel.jpg"
import otoniel_2x from "../images/specific_img/otoniel@2x.jpg"
import otonielTablet_1x from "../images/specific_img/otoniel_tablet@1x.jpg"
import otonielTablet_2x from "../images/specific_img/otoniel_tablet@2x.jpg"
import otonielDesktop_1x from "../images/specific_img/otoniel_desktop@1x.jpg"
import otonielDesktop_2x from "../images/specific_img/otoniel_desktop@2x.jpg"
import pexels_1x from "../images/specific_img/pexels.jpg"
import pexels_2x from "../images/specific_img/pexels@2x.jpg"
import pexels_tablet_1x from "../images/specific_img/pexels_tablet@1x.jpg"
import pexels_tablet_2x from "../images/specific_img/pexels_tablet@2x.jpg"
import pexels_desktop_1x from "../images/specific_img/pexels_desktop@2x.jpg"
import pexels_desktop_2x from "../images/specific_img/pexels_desktop@2x.jpg"


export const Specific = () => {
    return (
        <>
        <section className="specific">
            <div className="specific_container">
            <h3 className="specific_title">Особливості планування</h3>
            <div className="icon-Line-1r_desktop"></div>
            <svg className="icon-Line-1r icon-Line-desktop">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
       </div>

            <div className="specific_list">
            <ul>
                <li>
                    <div className="specific_list_first">
                    <picture className="specific_first_photo">
      <source srcSet={`${otoniel_1x} 1x, ${otoniel_2x} 2x`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="144px"/>
      <source srcSet={`${otonielTablet_1x} 1x, ${otonielTablet_2x} 2x`}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="240px"/>
      <source srcSet={`${otonielDesktop_1x} 1x, ${otonielDesktop_2x} 2x`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="450px"/>
      <img className="img_first" src={otoniel_1x} alt="Cute puppy"/>
      </picture>
                  
                        <div className="specific_list_first_container">
                        <h4 className="specific_list_first_title">88</h4>
                        <p className="specific_list_first_paragraph">сучасних квартир</p>
                        <h5 className="specific_list_second_title">40+</h5>
                        <p className="specific_list_second_paragraph">об’єктів інфраструктури</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="specific_list_second">
                        <div className="specific_list_second_container">
                        <h4 className="specific_list_third_title">300</h4>
                        <p className="specific_list_third_paragraph">задоволених власників</p>
                        <h5 className="specific_list_fourth_title">5</h5>
                        <p className="specific_list_fourth_paragraph">успішних проектів</p>
                        </div>
                        <picture>
      <source srcSet={`${pexels_1x} 1x, ${pexels_2x} 2x`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="144px"/>
      <source srcSet={`${pexels_tablet_1x} 1x, ${pexels_tablet_2x} 2x`}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="240px"/>
      <source srcSet={`${pexels_desktop_1x} 1x, ${pexels_desktop_2x} 2x`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="450px"/>
      <img src={pexels_1x} alt="Cute puppy"/>
      </picture>
                    </div>
                </li>
            </ul>
            </div>
        </section>
        </>
    )
}