import "./Header.css"
import sprite from "../images/sprite.svg"
import { Routes, Route, Link} from "react-router-dom"
import {Main} from "../Main/Main"
export const Header = () => {

    return(
        
        <header className="header">
        <div className="header_nav">
        {/* <nav>
        <Link to="/">Головна</Link>
      </nav>
      
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes> */}

        </div>
        <div className="header_list">
        <svg className="icon-iconheader">
        <use href={sprite + "#icon-iconheader"}></use>
       </svg>
       <h1 className="header_list_title">Nice View</h1>
       <h2 className="header_list_adress">м.Київ, просп. Вознесенський 148</h2>
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