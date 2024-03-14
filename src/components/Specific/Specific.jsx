import "./Specific.css"
import sprite from "../images/sprite.svg"
import pexels from "../images/specific_img/pexels87.jpg"
import otoniel from "../images/specific_img/otoniel11.jpg"

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
                        <img className="specific_img" src={otoniel} alt="city"/>
                        <div className="">
                        <h4 className="specific_list_first_title">88</h4>
                        <p className="specific_list_first_paragraph">сучасних квартир</p>
                        <h5 className="specific_list_second_title">40+</h5>
                        <p className="specific_list_second_paragraph">об’єктів інфраструктури</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="specific_list_first">
                        <div className="">
                        <h4 className="specific_list_third_title">300</h4>
                        <p className="specific_list_third_paragraph">задоволених власників</p>
                        <h5 className="specific_list_fourth_title">5</h5>
                        <p className="specific_list_fourth_paragraph">успішних проектів</p>
                        </div>
                        <img className="specific_img" src={pexels} alt="city"/>
                        <picture></picture>
                    </div>
                </li>
            </ul>
            </div>
        </section>
        </>
    )
}