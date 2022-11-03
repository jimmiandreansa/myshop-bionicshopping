import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="navbar__logo">
                <Link to="/" className="logo__link">
                    <h2>Bionix Shopping</h2>
                </Link>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo_badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            {/* Hamburger Menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar