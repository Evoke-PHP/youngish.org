import React from 'react'
import {ContactForm} from "./contact-form"
import {Header} from "./header"
import {OnlinePresence} from "./online-presence"
import {Portfolio} from "./portfolio"
import {Skills} from "./skills"
import {Status} from "./status"

import "./home.scss"

export const Home = (): JSX.Element => {
    return (
        <main className="page">
            <Header/>

            <section className="about-me">
                <h1>Who am I?</h1>
                <p className="intro">I am a full stack web developer who enjoys all aspects of software engineering.</p>
                <p className="intro">I love designing systems that integrate RESTful HTTP API.</p>
            </section>

            <Skills/>
            <Portfolio/>
            <OnlinePresence/>
            <Status/>
            <ContactForm/>
        </main>
    )
}
