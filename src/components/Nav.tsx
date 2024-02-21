import { useState } from 'react';

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    const toggleHamburger = () => {
        setIsActive(!isActive);
    }

    const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Get the href attribute of the clicked anchor
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Use scrollIntoView to scroll to the element smoothly
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Optionally, toggle hamburger menu after scrolling
        toggleHamburger();
    };

    return (
        <header className={isActive ? 'active' : ''}>
            <nav className="navbar">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.7 365.62"><polygon points="132.97 142.47 178.85 225.54 222.86 145.87 222.86 69.6 342.86 69.6 342.86 .03 13.86 .03 13.86 69.6 132.97 69.6 132.97 142.47"/><polygon points="273.19 84.75 178.85 255.54 84.52 84.75 14 84.75 14 351.17 80.78 351.17 80.78 237.66 140.51 351.65 214.86 351.65 273.65 237.66 273.65 351.17 343.7 351.17 343.7 84.75 273.19 84.75"/></svg>
                    <h1><a href="#home" onClick={smoothScroll}>Takuya Miyamoto</a></h1>
                </div>
                <div className="hamburger" onClick={toggleHamburger}>
                    {isActive ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48s-32.19-12.28-44.48 0L198.23 211.52 98.16 111.45c-12.28-12.28-32.19-12.28-44.48 0s-12.28 32.19 0 44.48L153.75 256 53.68 356.07c-12.28 12.28-12.28 32.19 0 44.48s32.19 12.28 44.48 0L198.23 300.48l100.07 100.07c12.28 12.28 32.19 12.28 44.48 0s12.28-32.19 0-44.48L242.72 256z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    )}
                </div>
                <ul className={isActive ? 'active' : ''}>
                    <li><a href="#about" onClick={smoothScroll}>About</a></li>
                    <li><a href="#project" onClick={smoothScroll}>Project</a></li>
                    <li><a href="#education" onClick={smoothScroll}>Education</a></li>
                </ul>
            </nav>
        </header>
    )
}