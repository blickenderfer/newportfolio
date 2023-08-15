import logo from '../assets/images/logo.png'
import './hamburger'

export default function Header({ handlePageChange }) {
    return (
        <header>
            {/* <nav>
                <a href='#about' onClick={() => handlePageChange('About')}>About</a>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                <a href='#contact' onClick={() => handlePageChange('Contact')}>Contact</a>
            </nav> */}
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={logo} className="logo" />
                    </a>

                    <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                    <div class="navbar-menu" id="navMenu">
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href='#about' onClick={() => handlePageChange('About')}>
                            About
                        </a>

                        <a className="navbar-item" href='#portfolio' onClick={() => handlePageChange('Portfolio')}>
                            Portfolio
                        </a>
                        <a className="navbar-item" href='#contact' onClick={() => handlePageChange('Contact')}>
                            Contact
                        </a>
                    </div>

                </div>
            </nav>
        </header>
    )
}