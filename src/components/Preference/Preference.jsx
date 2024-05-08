import "./Preference.css"
import {PreferenceList} from "../Preference_list/PreferenceListed"

export const Preference = () => {
    return (
        <>
       <section className="preference">
        <div className="preference_container">
            <div className="icon-Line-2r"></div>
            <h4 className="preference_title">Переваги комплексу</h4>
            <div className="icon-Line-preference_desktop"></div>
        </div>
        <PreferenceList/>
       </section>
        </>
    )
}