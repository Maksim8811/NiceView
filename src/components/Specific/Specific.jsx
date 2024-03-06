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
                        <h4>88</h4>
                        <p>сучасних квартир</p>
                        <h5>40+</h5>
                        <p>об’єктів інфраструктури</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>300</h4>
                        <p>задоволених власників</p>
                        <h5>5</h5>
                        <p>успішних проектів</p>
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