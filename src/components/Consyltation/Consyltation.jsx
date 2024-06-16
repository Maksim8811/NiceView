import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from "react"
import "../../components/Consyltation/Consyltation.css"
import * as Yup from "yup"

export const Consyltation = () => {

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Мало символів!").max(50, "Багато символів!").required("Required"),
    phone: Yup.string().min(10, "Мало символів!").max(19, "Багато символів!").required("Required"),
    time: Yup.string().required("Required"),
  });

  const userNameFieldId = useId()
  const phoneFieldId = useId()
  const timeFieldId = useId()

  const handleSubmit = (values, actions) => {
    if(values.phone === "+38 (000) 000 00 00") {
      alert("Введіть правильний номер")
    } else {
      alert(`Вам ${values.username} на номер ${values.phone} зателефонують о ${values.time}`)
    }
		
		actions.resetForm()
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

<Formik initialValues={{
        username: "Сергій Анатолійович",
        phone: "+38 (000) 000 00 00",
        time: "00:00"
}}


 onSubmit={handleSubmit}
 
 validationSchema={FeedbackSchema}>
      <Form className="consyltation_form">
      <label className="form_label" htmlFor={userNameFieldId}>ПІБ*</label>
      <Field className="label_input" type="text" name="username" id={userNameFieldId}/>
      <ErrorMessage className="error_massage" name="username" component="span" />
      <label className="form_label" htmlFor={phoneFieldId}> Номер телефону*</label>
			<Field className="label_input" type="phone" name="phone" id={phoneFieldId}/>
      <ErrorMessage className="error_massage" name="phone" component="span" />
      <label className="form_label" htmlFor={timeFieldId}>Зручний час</label>
      <Field className="label_input" type="time" name="time" id={timeFieldId}/>
      <div className="consyltation_contbtn">
           <button className="consyltation_btn" type="submit">Дзвінок</button>
        </div>
			</Form>
    </Formik>

        </section>
        </>
    )
}