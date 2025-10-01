import '../../../dist/style.css'

const Navbar = () => {
    return (
        <>
            <header id="navigation" className="p-navigation is-dark">
            <div className="p-navigation__row--25-75">
                <div className="p-navigation__banner">
                <div className="p-navigation__tagged-logo">
                    <a className="p-navigation__link" href="#">
                    <div className="p-navigation__logo-tag">
                        <img className="p-navigation__logo-icon" src="https://assets.ubuntu.com/v1/82818827-CoF_white.svg" alt="" />
                    </div>
                    <span className="p-navigation__logo-title">Test Company</span>
                    </a>
                </div>
                <ul className="p-navigation__items">
                    <li className="p-navigation__item">
                    <button className="js-search-button p-navigation__link--search-toggle">
                        <span className="p-navigation__search-label">Search</span>
                    </button>
                    </li>
                    <li className="p-navigation__item">
                    <button className="js-menu-button p-navigation__link">Menu</button>
                    </li>
                </ul>
                </div>
                <nav className="p-navigation__nav" aria-label="Example main">
                <ul className="p-navigation__items">
                    <li className="p-navigation__item is-selected">
                    <a className="p-navigation__link" href="#">Products</a>
                    </li>
                    <li className="p-navigation__item">
                    <a className="p-navigation__link" href="#">Services</a>
                    </li>
                    <li className="p-navigation__item">
                    <a className="p-navigation__link" href="#">Partners</a>
                    </li>
                </ul>
                <ul className="p-navigation__items">
                    <li className="p-navigation__item">
                    </li>
                    <li className="p-navigation__item">
                    <a className="p-navigation__link" href="#">Sign in</a>
                    </li>

                </ul>
                </nav>
            </div>
            </header>

            <div className="row--25-75">
            <div className="col">
                <h1>Page content in the grid</h1>
            </div>
            </div>
        </>
    );
};

export default Navbar