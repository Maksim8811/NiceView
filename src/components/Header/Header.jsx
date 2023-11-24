import "./Header.css"
import sprite from "../images/sprite.svg"

export const Header = () => {
console.log(sprite)
    return(
        
        <header className="header">
     
        {/* <nav>
            <Link className="link" to="/">Головна</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contacts">Контакти</Link>
        </nav> */}
        
        <ul className="header_list">
            <li className="header_list_li">
            <svg className="icon-iconheader">
        <use href={sprite + "#icon-iconheader"}></use>
       </svg>
            </li>
            <li className="header_list_li">
                <h1 className="header_list_title">Nice View</h1></li>
            <li className="header_list_li">
                <button className="header_list_leng" type="button">UA</button></li>
            <li className="header_list_li">
                <button button type="button">
                <svg>
                <use href={sprite + "#icon-burger"}></use>
                </svg>
                    </button></li>
        </ul>
       
        
        
        </header>
        
    )
}