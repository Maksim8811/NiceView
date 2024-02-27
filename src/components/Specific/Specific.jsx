import "./Specific.css"
import sprite from "../images/sprite.svg"

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

            <ul>
                <li>
                    <div>
                        <img src="./images/specific_img/pexels87.jpg" alt="PID"/>
                        <h4>88</h4>
                        <p>сучасних квартир</p>
                        <h5>40+</h5>
                        <p>об’єктів інфраструктури</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>300</h4>
                        <p>задоволених власників</p>
                        <h5>5</h5>
                        <p>успішних проектів</p>
                        <picture></picture>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}