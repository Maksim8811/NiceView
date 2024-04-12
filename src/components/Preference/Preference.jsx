import "./Preference.css"
import sprite from "../images/sprite.svg"
import {Preference_list} from "../Preference_list/PreferenceListed"

export const Preference = () => {
    return (
        <>
       <section className="preference">
        <div className="preference_container">
        <svg className="icon-Line-pref">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
            <h4 className="preference_title">Переваги комплексу</h4>
        </div>
        <Preference_list/>
       </section>
        </>
    )
}