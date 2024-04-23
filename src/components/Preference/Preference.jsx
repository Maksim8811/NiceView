import "./Preference.css"
import sprite from "../images/sprite.svg"
import {PreferenceList} from "../Preference_list/PreferenceListed"

export const Preference = () => {
    return (
        <>
       <section className="preference">
        <div className="preference_container">
            {/* <div className="preference_line"></div> */}
        <svg className="icon-Line-pref">
        <use href={sprite + "#icon-Line-1"}></use>
       </svg>
            <h4 className="preference_title">Переваги комплексу</h4>
        </div>
        <PreferenceList/>
       </section>
        </>
    )
}