import { Formik, Form, Field } from 'formik'
import { useId } from "react"
import "../../components/Consyltation/Consyltation.css"

export const Consyltation = () => {

  const userNameFieldId = useId()
  const phoneFieldId = useId()
  const timeFieldId = useId()

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

    return (
        <>
        <section className="consyltation">
        <div className="consyltation_container">
            <div className="icon_Line-6r"></div>
            <h4 className="consyltation_title">Отримати консультацію</h4>
            <div class="icon-Line-infrastructure_desktop"></div> 
        </div>
        <p className="consyltation_text">Поля відмічені  *  є обов’язковими для заповнення</p> 

        {/* <form className="consyltation_form" onSubmit={handleSubmit}>
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
        
        <div className="consyltation_contbtn">
           <button className="consyltation_btn" type="submit">Дзвінок</button>
        </div>
        
      </form> */}

<Formik initialValues={{
        username: "Сергій Анатолійович",
        phone: "+38 (000) 000 00 00",
        time: "00:00"

}} 
 onSubmit={handleSubmit}>
      <Form className="consyltation_form">
      <label className="form_label" htmlFor={userNameFieldId}>ПІБ*</label>
      <Field className="label_input" type="text" name="username" id={userNameFieldId}/>
      <label className="form_label" htmlFor={phoneFieldId}> Номер телефону*</label>
			<Field className="label_input" type="phone" name="phone" id={phoneFieldId}/>
      <label className="form_label" htmlFor={timeFieldId}>Зручний час</label>
      <Field className="label_input" type="time" name="time" id={timeFieldId}/>
      {/* <button className="consyltation_btn" type="submit">Дзвінок</button> */}
			</Form>
    </Formik>

        </section>
        </>
    )
}