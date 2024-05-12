import { Routes, Route } from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout"
import {Main} from "../pages/Main/Main"
import {About} from "../pages/About/About"
import {Contacts} from "../pages/Contacts/Contacts"

export const App = () => {
  return (

  <>
  <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Route>
  </Routes>  
  </>
  )
};
