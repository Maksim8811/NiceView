import { Link, Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div>
        <header>
        <nav>
            <Link to="/">Головна</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contacts">Контакти</Link>
        </nav>
        
        </header>

        <Outlet/>

    </div>
    )
}