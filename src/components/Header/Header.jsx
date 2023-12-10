import "./Header.css"
import sprite from "../images/sprite.svg"

export const Header = () => {
console.log(sprite)
    return(
        
        <header className="header">
     
        <div className="header_list">
        <svg className="icon-iconheader">
        <use href={sprite + "#icon-iconheader"}></use>
       </svg>
       <h1 className="header_list_title">Nice View</h1>
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