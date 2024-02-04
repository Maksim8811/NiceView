import "./Main.css"
import {Specific} from "../../components/Specific/Specific"


export const Main = () => {

  // Налаштування
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ""
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
   if (records[id][prop] === value) {
    
   }
  

}

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2548, "tracks", "")

    return (
      <>
      <main>
      <section  className="main">
        <div className="main_container">
        <div className="main_modal">
          <h2 className="main_modal_tittle">ЖК “Nice view”</h2>
          <p className="main_modal_text">При 100% оплаті  знижка 5% від банку.<br/>
          Пропозиція дійсна до 31.12.22 р.</p>
          <button className="main_modal_btn" type="button">Дзвінок</button>
        </div>
        </div>
       
        <div className="main_gradient">
          <p className="main_gradient_text">м.Київ, просп. Вознесенський 148</p>
        </div>
        <div className="main_img"></div>
      </section>

      <Specific/>

      </main>
     </>
     
    )
}