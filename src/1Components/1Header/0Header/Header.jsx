import NavBar from "../1NavBar/NavBar";
import Brand from "../3Brand/Brand";
import CartWidget from "../4Cart/1CartWidget/1CartWidget/CartWidget";
import ButtonDark from "../ButtonDarkModeContext/ButtonDark";
import "./Header.css"


export default function Header(){
    return(
        <header className="Header">
            <Brand/>
            <NavBar/>
            <ButtonDark/>
            <CartWidget/>
        </header>
    )
}












