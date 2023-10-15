import { Routes, Route, Link} from "react-router-dom"
// import { SharedLayout } from "./SharedLayout/SharedLayout"
import {Main} from "./Main/Main"
import {About} from "./About/About"
import {Contacts} from "./Contacts/Contacts"
import "../components/App.css"


export const App = () => {
  return (

    <div>
        <header>
          
          
        
        {/* <button class="burger-btm" type="button">
                <svg class="burger-icon">
                    {/* <use xlink:href="./images/symbol-defs.svg#icon-logo_smile"></use> */}
                    {/* <svg class="icon icon-logo_smile"><use xlink:href="#icon-logo_smile"></use></svg> */}
                    {/* <use href="./images/symbol-defs.svg#icon-logo_smile"></use>
                </svg>
            </button> */} 


<svg class="icon icon-logo_smile"><use href="./images/symbol-defs.svg#icon-logo_smile"></use></svg>
        

        
        
        
        <nav>
            <Link className="link" to="/">Головна</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contacts">Контакти</Link>
        </nav>
        
        </header>
      
      <Routes>
      <Route path="/" element={<Main />}/>
        
        <Route path="about" element={<About />}/>
        <Route path="contacts" element={<Contacts />} />
      
      <Route path="*" element={<Main/>} />
    </Routes>
    </div>
  )
};
