// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@awesome.me/4c46520b37/icons/classic/solid';

export default function Nav() {
    return (
        <nav className="navbar">
            <h1><a href="/">Takuya Miyamoto</a></h1>
            {/* <i className="fa-solid fa-bars"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <ul className="sidebar">
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><i className="fa-solid fa-bars"></i></li>
            </ul>
            
        </nav>
    )
}