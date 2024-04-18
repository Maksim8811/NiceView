import srcMob_1_1x from "../images/preference_img/preference_mobile_1@1x.jpg"
import srcMob_1_2x from "../images/preference_img/preference_mobile_1@2x.jpg"
import srcMob_2_1x from "../images/preference_img/preference_mobile_2@1x.jpg"
import srcMob_2_2x from "../images/preference_img/preference_mobile_2@2x.jpg"
import srcMob_3_1x from "../images/preference_img/preference_mobile_3@1x.jpg"
import scrMob_3_2x from "../images/preference_img/preference_mobile_3@2x.jpg"
import scrMob_4_1x from "../images/preference_img/preference_mobile_4@1x.jpg"
import scrMob_4_2x from "../images/preference_img/preference_mobile_4@2x.jpg"
import scrMob_5_1x from "../images/preference_img/preference_mobile_5@1x.jpg"
import scrMob_5_2x from "../images/preference_img/preference_mobile_5@2x.jpg"

import scrTab_1_1x from "../images/preference_img/preference_tablet_1@1x.jpg"
import scrTab_1_2x from "../images/preference_img/preference_tablet_1@2x.jpg"
import scrTab_2_1x from "../images/preference_img/preference_tablet_2@1x.jpg"
import scrTab_2_2x from "../images/preference_img/preference_tablet_2@2x.jpg"
import scrTab_3_1x from "../images/preference_img/preference_tablet_3@1x.jpg"
import scrTab_3_2x from "../images/preference_img/preference_tablet_3@2x.jpg"
import scrTab_4_1x from "../images/preference_img/preference_tablet_4@1x.jpg"
import scrTab_4_2x from "../images/preference_img/preference_tablet_4@2x.jpg"
import scrTab_5_1x from "../images/preference_img/preference_tablet_5@1x.jpg"
import scrTab_5_2x from "../images/preference_img/preference_tablet_5@2x.jpg"

import scrDesk_1_1x from "../images/preference_img/preference_desktop_1@1x.jpg"
import scrDesk_1_2x from "../images/preference_img/preference_desktop_1@2x.jpg"
import scrDesk_2_1x from "../images/preference_img/preference_desktop_2@1x.jpg"
import scrDesk_2_2x from "../images/preference_img/preference_desktop_2@2x.jpg"
import scrDesk_3_1x from "../images/preference_img/preference_desktop_3@1x.jpg"
import scrDesk_3_2x from "../images/preference_img/preference_desktop_3@2x.jpg"
import scrDesk_4_1x from "../images/preference_img/preference_desktop_4@1x.jpg"
import scrDesk_4_2x from "../images/preference_img/preference_desktop_4@2x.jpg"
import scrDesk_5_1x from "../images/preference_img/preference_desktop_5@1x.jpg"
import scrDesk_5_2x from "../images/preference_img/preference_desktop_5@2x.jpg"

import "../Preference_list/Preference_list.css"

const preferenceListInfo = [
    {id: "id-1",
     srcMob1: srcMob_1_1x,
     srcMob2: srcMob_1_2x,
     srcTab1: scrTab_1_1x,
     srcTab2: scrTab_1_2x,
     srcDesk1: scrDesk_1_1x,
     srcDesk2: scrDesk_1_2x,
     shadow: "",
     title: "10 га парку",
     text: "Жити в центрі міста, але не на виду.",
     alt: "park"
    },

    {id: "id-2",
     srcMob1: srcMob_2_1x,
     srcMob2: srcMob_2_2x,
     srcTab1: scrTab_2_1x,
     srcTab2: scrTab_2_2x,
     srcDesk1: scrDesk_2_1x,
     srcDesk2: scrDesk_2_2x,
     shadow: "",
     title: "2 школи та 2 дитсадки",
     text: "Відстань до 750 м від ЖК.",
     alt: "shool"
    },

    {id: "id-3",
     srcMob1: srcMob_3_1x,
     srcMob2: scrMob_3_2x,
     srcTab1: scrTab_3_1x,
     srcTab2: scrTab_3_2x,
     srcDesk1: scrDesk_3_1x,
     srcDesk2: scrDesk_3_2x,
     shadow: "",
     title: "Безпека 24/7",
     text: "Закрита територія та відеоспостереження.",
     alt: "security"
    },

    {id: "id-4",
     srcMob1: scrMob_4_1x,
     srcMob2: scrMob_4_2x,
     srcTab1: scrTab_4_1x,
     srcTab2: scrTab_4_2x,
     srcDesk1: scrDesk_4_1x,
     srcDesk2: scrDesk_4_2x,
     shadow: "",
     title: "Розумний будинок",
     text: "Індивідуальна система опалення та регулювання житла за допомогою додатку.",
     alt: "smart home"
    },

    {id: "id-5",
     srcMob1: scrMob_5_1x,
     srcMob2: scrMob_5_2x,
     srcTab1: scrTab_5_1x,
     srcTab2: scrTab_5_2x,
     srcDesk1: scrDesk_5_1x,
     srcDesk2: scrDesk_5_2x,
     shadow: "",
     title: "Інфраструктура.",
     text: "Власні керуючі компанії.",
     alt: "managing company"
    }
]

export const PreferenceList = () => {
    return (
        <>
        <ul className="preference_list">
            {preferenceListInfo.map(item => {
                return(
                    
                <li className="preferense_list_li">
                    <div className="preference_list_item">
                    <picture>
                    <source srcSet={`${item.srcMob1} 1x, ${item.srcMob2} 2x`}
              media="(max-width: 767px)"
              type="image/jpeg"
              sizes="126px"/>
                    <source srcSet={`${item.srcTab1} 1x, ${item.srcTab2} 2x`}
              media="(max-width: 1439px)"
              type="image/jpeg"
              sizes="248px"/>
                    <source srcSet={`${item.srcDesk1} 1x, ${item.srcDesk2} 2x`}
              media="(min-width: 1440px)"
              type="image/jpeg"
              sizes="642px"/>
                    <img className="preference_photo" src={item.srcMob1} alt={item.alt}/>
                    </picture>

                    <div className="preference_gradient"></div>
                    <div className="preference_content">
                    <h5 className="preference_content_title">{item.title}</h5>
                    <p className="preference_text">{item.text}</p>
                    </div>
                    
                    </div>
                </li>
                
            )})}
        </ul>
        </>
        
    )
}