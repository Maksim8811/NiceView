import "../../components/Consyltation/Consyltation.css"

export const Consyltation = () => {
    return (
        <>
        <section className="consyltation">
        <div className="consyltation_container">
            <div className="icon_Line-6r"></div>
            <h4 className="consyltation_title">Отримати консультацію</h4>
            <div class="icon-Line-infrastructure_desktop"></div> 
        </div>
        <p className="consyltation_text">Поля відмічені  *  є обов’язковими для заповнення</p> 

        <form>
        <label>
        ПІБ*
          <input
            type="text"
            placeholder="Сергій Анатолійович"
            
          />
        </label>

        <label>
        Номер телефону*
          <input
            type="text"
            placeholder="+38 (000) 000 00 00"
            
          />
        </label>

        <label>
        Зручний час
          <input
            type="text"
            placeholder="00:00"
            
          />
        </label>

        <button type="submit">Дзвінок</button>
      </form>
        </section>
        </>
    )
}