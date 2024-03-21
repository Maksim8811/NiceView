import "./Specific.css"
import sprite from "../images/sprite.svg"
import pexelsH144 from "../images/specific_img/pexels87_144.jpg"
import otonielH144 from "../images/specific_img/otoniel11_144.jpg"
import pexelsH480 from "../images/specific_img/pexels87_480.jpg"
import otonielH480 from "../images/specific_img/otoniel11_480.jpg"

export const Specific = () => {
    return (
        <>
        <section className="specific">
            <div className="specific_container">
            <h3 className="specific_title">Особливості планування</h3>
            <svg className="icon-Line-1r">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
       </div>

            <div className="specific_list">
            <ul>
                <li>
                    <div className="specific_list_first">
                        <img className="specific_img_one" 
                        //    srcSet={`${otonielH144} 390w, ${otonielH480} 768w`}
                            src={otonielH144} alt="city"/>
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
                        <img className="specific_img_two" src={pexelsH144} alt="city"/>
                        <picture></picture>
                    </div>
                </li>
            </ul>
            </div>
        </section>
        </>
    )
}