import srcMob_1 from "../images/preference_img/preference_mobile_1@1x.jpg"

const preferenceListInfo = [
    {id: "id-1",
     srcMob1: srcMob_1,
     srcMob2: "",
     srcTab1: "",
     srcTab2: "",
     srcDesk: "",
     srcMob2: "",
     shadow: "",
     title: "",
     text: ""
    },

    {id: "id-2",
     srcMob1: "",
     srcMob2: "",
     srcTab1: "",
     srcTab2: "",
     srcDesk: "",
     srcMob2: "",
     shadow: "",
     title: "",
     text: ""
    },

    {id: "id-3",
     srcMob1: "",
     srcMob2: "",
     srcTab1: "",
     srcTab2: "",
     srcDesk: "",
     srcMob2: "",
     shadow: "",
     title: "",
     text: ""
    },

    {id: "id-4",
     srcMob1: "",
     srcMob2: "",
     srcTab1: "",
     srcTab2: "",
     srcDesk: "",
     srcMob2: "",
     shadow: "",
     title: "",
     text: ""
    },

    {id: "id-5",
     srcMob1: "",
     srcMob2: "",
     srcTab1: "",
     srcTab2: "",
     srcDesk: "",
     srcMob2: "",
     shadow: "",
     title: "",
     text: ""
    }
]

// console.log('preferenceListInfo', preferenceListInfo[0].srcMob1)

export const Preference_list = () => {
    console.log(3)
    return (
        <>
        <ul>
            {preferenceListInfo.map(item => (
                <li key={preferenceListInfo.id}>{item.srcMob1}</li>
            ))}
        </ul>
        </>
    )
}