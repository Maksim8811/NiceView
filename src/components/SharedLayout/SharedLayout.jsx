import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import sprite from "../images/sprite.svg"
import "./SharedLayout.css"

export const SharedLayout = () => {
    return (
        <>
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
        <NavLink className="header_link" to="/">Головна</NavLink>
        <NavLink className="header_link" to="/about">Про нас</NavLink>
        <NavLink className="header_link" to="/contacts">Контакти</NavLink>
      </nav>

      

        
       <button className="header_list_leng" type="button">UA</button>
       <button className="header_list_burger" button type="button">
                <svg className="icon-burger">
                <use href={sprite + "#icon-burger"}></use>
                </svg>
                    </button> 
                     
        </div>
         
       </header>
       <Outlet /> 
       </>
    )
}