import "./Main.css"

export const Main = () => {

    return (
      <>
 
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
  
     </>
     
    )
}