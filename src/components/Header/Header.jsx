import "./Header.css"
import sprite from "../images/symboldefs.svg"

export const Header = () => {
console.log(sprite)
    return(
        
        <header className="header">
     
        {/* <nav>
            <Link className="link" to="/">Головна</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contacts">Контакти</Link>
        </nav> */}
        <button>
        <svg>
        <use href={sprite + "#icon-home"}></use>
       </svg>
        </button>
          
        <h1>Nice View</h1>
        <button type="button">UA</button>
        
        </header>
        
    )
}