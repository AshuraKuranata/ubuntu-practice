import '../../../dist/styles/style.css'
import "../../../dist/components/Navbar/Navbar.css"
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <header id="navigation" className="p-navigation is-dark">
            <div className="p-navigation__row--25-75">
                <div className="p-navigation__banner">
                <div className="p-navigation__tagged-logo">
                    <Link to ='/' className='p-navigation__link'>
                        <div className="p-navigation__logo-tag">
                            <img className="p-navigation__logo-icon" src="https://assets.ubuntu.com/v1/82818827-CoF_white.svg" alt="" />
                        </div>
                        <span className="p-navigation__logo-title">[TEST] Ubuntu</span>
                    </Link>
                </div>
                {/* <ul className="p-navigation__items">
                    <li className="p-navigation__item">
                    <button className="js-search-button p-navigation__link--search-toggle">
                        <span className="p-navigation__search-label">Search</span>
                    </button>
                    </li>
                    <li className="p-navigation__item">
                    <button className="js-menu-button p-navigation__link">Menu</button>
                    </li>
                </ul> */}
                </div>
                <nav className="p-navigation__nav" aria-label="Example main">
                <ul className="p-navigation__items">
                    <li className="p-navigation__item">
                        <Link to ='/products' className='p-navigation__link'>Products</Link>
                    {/* <a className="p-navigation__link" href="#">Products</a> */}
                    </li>
                    <li className="p-navigation__item">
                        <Link to ='/services' className='p-navigation__link'>Services</Link>
                    {/* <a className="p-navigation__link" href="#">Services</a> */}
                    </li>
                    <li className="p-navigation__item">
                        <Link to ='/partners' className='p-navigation__link'>Partners</Link>
                    {/* <a className="p-navigation__link" href="#">Partners</a> */}
                    </li>
                </ul>
                <ul className="p-navigation__items">
                    <li className="p-navigation__item">
                    <Link to ='/sign-in' className='p-navigation__link'>Sign in</Link>
                    </li>
                </ul>
                </nav>
            </div>
            </header>
        </nav>
    );
};

export default Navbar