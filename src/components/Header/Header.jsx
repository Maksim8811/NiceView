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
        
        <ul>
            <li>
            <svg>
        <use href={sprite + "#icon-iconheader"}></use>
       </svg>
            </li>
            <li><h1>Nice View</h1></li>
            <li> <button type="button">UA</button></li>
            <li>
                <button>
                {/* <svg>
                <use href={sprite + "#icon-burger"}></use>
                </svg> */}
                    </button></li>
        </ul>
       
        
        
        </header>
        
    )
}