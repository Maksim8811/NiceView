import { Routes, Route} from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout"
import {Main} from "./Main/Main"
import {About} from "./About/About"
import {Contacts} from "./Contacts/Contacts"


export const App = () => {
  return (
      
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />}/>
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Main/>} />
    </Routes>
  )
};
