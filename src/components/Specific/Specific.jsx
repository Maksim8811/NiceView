import "./Specific.css"
import sprite from "../images/sprite.svg"
import pexels from "../images/specific_img/pexels_144.jpg"
import pexels_240 from "../images/specific_img/pexels_240.jpg"
import pexels_480 from "../images/specific_img/pexels_480@2x.jpg"
import otoniel from "../images/specific_img/otoniel_144.jpg"
import otoniel_240 from "../images/specific_img/otoniel_240.jpg"
import otoniel_480 from "../images/specific_img/otoniel_480@2x.jpg"


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
                        <img className="specific_img_one" 
                           srcSet={`${otoniel} 144w, ${otoniel_240} 240w, ${otoniel_480} 480w`}
                           sizes="240px"
                            src={otoniel} alt="city"/>
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
                        <img className="specific_img_two" 
                           srcSet={`${pexels} 144w, ${pexels_240} 240w, ${pexels_480} 480w`}
                           sizes="144px"
                            src={pexels} alt="city"/>
                        <picture></picture>
                    </div>
                </li>
            </ul>
            </div>
        </section>
        </>
    )
}