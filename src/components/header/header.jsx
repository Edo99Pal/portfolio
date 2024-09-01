import './header.scss';

function Header() {
    return(
        <header>
            <p id="logo">Edoardo Palamito</p>
            <p id="page-links">
                <a href="#cv">CV</a>
                <a href="#projects">Projects</a>
            </p>
        </header>
    )
}

export default Header;