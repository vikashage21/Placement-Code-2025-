
import { Link } from "react-router-dom";
import { userContext } from "../utils/userContext";
import {useContext} from  'react'
import { useSelector } from "react-redux";
const Header = ({carts}) => {
    const cart = useSelector((store) => store.app.items)
    console.log(cart)
    const {username}= useContext(userContext)
    return (
        <div className="nav-container">
            <nav className="navbar">
                <img className="logo" src="https://tse1.mm.bing.net/th/id/OIP.GogUJU5rT6B6zeLH5P_vRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <h1 className="brand-name">Yummy - food </h1>
                <ul className="list">
                    <Link to='/' > Home</Link>
                    <Link to='/about' > About</Link>

                    <Link to='/contact' > Contact</Link>
                    <Link to='/post' > Post</Link>
                    <Link to='/cart' > cart({cart.length})</Link>


                    <p>{username}</p>

                </ul>
            </nav>
        </div>
    )
}

export default Header;