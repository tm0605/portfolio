export default function About() {
    return (
        <div className="about">
            <h2 className="section-title">About Me</h2>
            <p>Recently graduated Masters of Information Technology majoring in Computer Science from Queensland University of Technology</p>
            <p>Specialised in Full Stack Applicaiton Development</p>
            <h2 className="section-title">Skills</h2>
            <div className="skills">
                <div className="frontend">
                    <h4>Frontend</h4>
                    <i className="fa-brands fa-react fa-5x"></i>
                    <p>React</p>
                    <i className="fa-brands fa-html5 fa-5x"></i>
                    <p>HTML</p>
                    <i className="fa-brands fa-css3-alt fa-5x"></i>
                    <p>CSS</p>
                </div>
                <div className="backend">
                    <h4>Backend</h4>
                    <i className="fa-brands fa-js fa-5x"></i>
                    <p>JavaScript</p>
                    <i className="fa-brands fa-node fa-5x"></i>
                    <p>Node.js</p>
                    <i className="fa-regular fa-image fa-5x"></i>
                    <p>ExpressJS</p>
                    <i className="fa-solid fa-database fa-5x"></i>
                    <p>PostgreSQL</p>
                    <i className="fa-regular fa-image fa-5x"></i>
                    <p>TypeScript</p>
                    <p>REST API</p>
                </div>
                <div>
                    <h4>Other</h4>
                    <i className="fa-brands fa-aws fa-5x"></i>
                    <p>AWS Services</p>
                    <i className="fa-brands fa-docker fa-5x"></i>
                    <p>Docker</p>
                </div>
            </div>
        </div>
    )
}