import React from "react"

import "./skills.scss"

export const Skills = () : JSX.Element => (
    <section className="skills">
        <h1>Skills</h1>
        <div className="skills-grid">
            <section className="general">
                <h1>General</h1>
                <ul>
                    <li>Communication</li>
                    <li>Design</li>
                    <li>Estimation</li>
                    <li>Mentoring</li>
                    <li>Requirements Analysis</li>
                    <li>Teamwork</li>
                </ul>
            </section>

            <section className="code">
                <h1>Languages</h1>
                <ul>
                    <li>JavaScript</li>
                    <li>Typescript</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                </ul>
            </section>
            <section className="infrastructure">
                <h1>Infrastructure</h1>
                <ul>
                    <li>Apache</li>
                    <li>AWS</li>
                    <li>Email</li>
                    <li>Google Cloud</li>
                    <li>Nginx</li>
                    <li>SSL</li>
                </ul>
            </section>
            <section className="test">
                <h1>Testing</h1>
                <ul className="ib">
                    <li>Behat</li>
                    <li>BDD</li>
                    <li>Jest</li>
                </ul>
                <ul className="ib">
                    <li>PHPUnit</li>
                    <li>Puppeteer</li>
                    <li>TDD</li>
                </ul>
            </section>
            <section className="operating-system">
                <h1>Operating Systems</h1>
                <ul>
                    <li>Linux<br/>(CentOS, Fedora, Ubuntu, Raspbian)</li>
                    <li>Windows 7,10 (WSL)</li>
                </ul>
            </section>
            <section className="core">
                <h1>Core Strengths</h1>
                <ul>
                    <li>10 years industry experience</li>
                    <li>Bachelor of Engineering in Computer Systems (with honors)</li>
                    <li>Last 5 years of professional Web Development experience</li>
                    <li>Excellent written and verbal communication</li>
                    <li>Producer of robust software delivered on or ahead of schedule</li>
                    <li>Experienced planner</li>
                </ul>
            </section>
        </div>
    </section>
)