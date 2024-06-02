import { useId } from "react"
import "../../components/Consyltation/Consyltation.css"

export const Consyltation = () => {

  const nameId = useId()
  const numberId = useId()
  const timeId = useId()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target
    const {name, number, time} = form.elements
    console.log(name.value, number.value, time.value)
    form.reset()
  }

    return (
        <>
        <section className="consyltation">
        <div className="consyltation_container">
            <div className="icon_Line-6r"></div>
            <h4 className="consyltation_title">Отримати консультацію</h4>
            <div class="icon-Line-infrastructure_desktop"></div> 
        </div>
        <p className="consyltation_text">Поля відмічені  *  є обов’язковими для заповнення</p> 

        <form className="consyltation_form" onSubmit={handleSubmit}>
        <label className="form_label" htmlFor={nameId}>
        ПІБ*
          <input className="label_input"
            type="text"
            name="name"
            placeholder="Сергій Анатолійович"
            id={nameId}
            
          />
        </label>

        <label className="form_label" htmlFor={numberId}>
        Номер телефону*
          <input className="label_input"
            type="number"
            name="number"
            placeholder="+38 (000) 000 00 00"
            id={numberId}
            
          />
        </label>

        <label className="form_label" htmlFor={timeId}>
        Зручний час
          <input className="label_input"
            type="time"
            name="time"
            placeholder="00:00"
            id={timeId}
            
          />
        </label>

        <button type="submit">Дзвінок</button>
      </form>
        </section>
        </>
    )
}