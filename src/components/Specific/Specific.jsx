import "./Specific.css"
import sprite from "../images/sprite.svg"

export const Specific = () => {
    return (
        <>
        <section className="specific">
            <h3>Особливості планування</h3>
            <svg className="icon-Line-1r">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
            <ul>
                <li>
                    <div>
                        <picture></picture>
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