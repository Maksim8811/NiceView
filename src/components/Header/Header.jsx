import "./Header.css"
import sprite from "../images/sprite.svg"
import { Routes, Route, Link} from "react-router-dom"
import {Main} from "../../pages/Main/Main"
import {About} from "../../pages/About/About"
import {Contacts} from "../../pages/Contacts/Contacts"
export const Header = () => {

    return(
        
        <header className="header">
        
        <div className="header_list">
        <svg className="icon-iconheader">
        <use href={sprite + "#icon-iconheader"}></use>
       </svg>
       <h1 className="header_list_title">Nice View</h1>
       <div>
       <h2 className="header_list_adress">м.Київ, просп. Вознесенський 148</h2>
       </div>
        <nav className="header_nav">
        <Link className="header_link" to="/">Головна</Link>
        <Link className="header_link" to="/about">Про нас</Link>
        <Link className="header_link" to="/contacts">Контакти</Link>
      </nav>
      
      
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>

        
       <button className="header_list_leng" type="button">UA</button>
       <button className="header_list_burger" button type="button">
                <svg className="icon-burger">
                <use href={sprite + "#icon-burger"}></use>
                </svg>
                    </button>    
        </div>
       
       
        
        
        </header>
        
    )
}