export default function Project() {
    return (
        <div className="projects-section section" id="project">
            <h1 className="section-title">Project</h1>
            <div className="projects">
                <div className="container">
                    <img src="planespotter_logo.svg"></img>
                    {/* <div className="card">
                    </div> */}
                    <div className="description">
                        <h3>Plane Spotter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> 
                        <div className="tech_stack">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 35.199219 2.101563 C 33.699219 2.101563 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601563 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101563 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601563 40.5 22.300781 C 40.601563 23.601563 40.601563 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601563 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101563 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101563 Z M 13.535156 2.542969 C 12.382813 2.519531 10.976563 2.648438 9.398438 3.398438 C 8.898438 3.601563 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601563 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601563 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101563 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101563 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101563 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101563 16.300781 2.699219 14.597656 2.601563 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601563 25.097656 16.300781 C 26.597656 20.5 25.101563 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601563 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101563 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101563 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601563 26.5 45.199219 27.5 46 C 28.199219 46.601563 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601563 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101563 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601563 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101563 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601563 C 33.5 6.101563 32 4.898438 29.800781 4.101563 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101563 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101563 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601563 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601563 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445313 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101563 17.902344 16.800781 17.402344 17.199219 C 17.101563 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601563 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601563 25.300781 22.699219 25.101563 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101563 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101563 36.300781 17.300781 36 17.402344 C 35.601563 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101563 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101563 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101563 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101563 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601563 38.199219 32.800781 C 38.199219 33 38.199219 33.101563 38.097656 33.300781 C 38.898438 33.5 39.601563 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101563 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601563 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601563 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601563 32.5 21.402344 32.699219 C 20.601563 33.199219 19.597656 33.601563 18.597656 33.800781 C 17.699219 34.101563 17.199219 34.101563 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101563 22.097656 32 Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M180.4 203c-.7 22.7 10.6 32.7 10.9 39.1a8.2 8.2 0 0 1 -4.1 6.3l-12.8 9a10.7 10.7 0 0 1 -5.6 1.9c-.4 0-8.2 1.8-20.5-25.6a78.6 78.6 0 0 1 -62.6 29.5c-16.3 .9-60.4-9.2-58.1-56.2-1.6-38.3 34.1-62.1 70.9-60.1 7.1 0 21.6 .4 47 6.3v-15.6c2.7-26.5-14.7-47-44.8-43.9-2.4 0-19.4-.5-45.8 10.1-7.4 3.4-8.3 2.8-10.8 2.8-7.4 0-4.4-21.5-2.9-24.2 5.2-6.4 35.9-18.4 65.9-18.2a76.9 76.9 0 0 1 55.7 17.3 70.3 70.3 0 0 1 17.7 52.4l0 69.3zM94 235.4c32.4-.5 46.2-20 49.3-30.5 2.5-10.1 2.1-16.4 2.1-27.4-9.7-2.3-23.6-4.9-39.6-4.9-15.2-1.1-42.8 5.6-41.7 32.3-1.2 16.8 11.1 31.4 30 30.5zm170.9 23.1c-7.9 .7-11.5-4.9-12.7-10.4l-49.8-164.7c-1-2.8-1.6-5.7-1.9-8.6a4.6 4.6 0 0 1 3.9-5.3c.2 0-2.1 0 22.3 0 8.8-.9 11.6 6 12.6 10.4l35.7 140.8 33.2-140.8c.5-3.2 2.9-11.1 12.8-10.2h17.2c2.2-.2 11.1-.5 12.7 10.4l33.4 142.6L421 80.1c.5-2.2 2.7-11.4 12.7-10.4h19.7c.9-.1 6.2-.8 5.3 8.6-.4 1.9 3.4-10.7-52.8 169.9-1.2 5.5-4.8 11.1-12.7 10.4h-18.7c-10.9 1.2-12.5-9.7-12.7-10.8L328.7 110.7l-32.8 137c-.2 1.1-1.7 11.9-12.7 10.8h-18.3zm273.5 5.6c-5.9 0-33.9-.3-57.4-12.3a12.8 12.8 0 0 1 -7.8-11.9v-10.8c0-8.5 6.2-6.9 8.8-5.9 10 4.1 16.5 7.1 28.8 9.6 36.7 7.5 52.8-2.3 56.7-4.5 13.2-7.8 14.2-25.7 5.3-35-10.5-8.8-15.5-9.1-53.1-21-4.6-1.3-43.7-13.6-43.8-52.4-.6-28.2 25.1-56.2 69.5-56 12.7 0 46.4 4.1 55.6 15.6 1.4 2.1 2 4.6 1.9 7v10.1c0 4.4-1.6 6.7-4.9 6.7-7.7-.9-21.4-11.2-49.2-10.8-6.9-.4-39.9 .9-38.4 25-.4 19 26.6 26.1 29.7 26.9 36.5 11 48.7 12.8 63.1 29.6 17.1 22.3 7.9 48.3 4.4 55.4-19.1 37.5-68.4 34.4-69.3 34.4zm40.2 104.9c-70 51.7-171.7 79.3-258.5 79.3A469.1 469.1 0 0 1 2.8 327.5c-6.5-5.9-.8-14 7.2-9.5a637.4 637.4 0 0 0 316.9 84.1 630.2 630.2 0 0 0 241.6-49.6c11.8-5 21.8 7.8 10.1 16.4zm29.2-33.3c-9-11.5-59.3-5.4-81.8-2.7-6.8 .8-7.9-5.1-1.8-9.5 40.1-28.2 105.9-20.1 113.4-10.6 7.6 9.5-2.1 75.4-39.6 106.9-5.8 4.9-11.3 2.3-8.7-4.1 8.4-21.3 27.4-68.5 18.4-80z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/*<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/></svg>
                        </div>
                        <div className="buttons">
                            <a href="https://plane-spotter.takuyamiyamoto.com" target="_blank" className="card__button">Live Demo</a>
                            <a href="https://github.com/tm0605/planespotter" target="_blank" className="card__button secondary">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}