import React from "react"

import imgOurFleet from "../img/ourfleet.png"
import imgNPSantos from "../img/npsantos.png"
import imgPayntt from "../img/payntt.png"
import imgYoungish from "../img/youngish.png"

import "./portfolio.scss"

export const Portfolio = () : JSX.Element => (
    <section className="portfolio">
        <h1>Portfolio</h1>
        <ul>
            <li>
                <a href="http://ourfleet.northpointfleetmanagement.com.au"><img alt="ourFleet"
                                                                                src={imgOurFleet}/></a>
                <h2>ourFleet</h2>
                <p>ourFleet provides a fleet and vehicle level dashboard for Northpoint's fleet customers.</p>
                <p>Graphs display decades of fleet data for over 3 thousand vehicles.</p>
                <p>I was responsible for the entire development of this site to replace an older dashboard that
                    was in use.</p>
                <div className="clear"/>
            </li>
            <li>
                <img alt="Northpoint Snatos" src={imgNPSantos}/>
                <h2>Northpoint Santos Online Booking System</h2>
                <p>The Northpoint Santos online booking system provides an interface to book in vehicles for
                    service and repair.</p>
                <p>It provides management of the booking requests that have been made and automatically updates
                    the status of bookings based on data from our Tune database.</p>
                <div className="clear"/>
            </li>
            <li>
                <a href="http://payntt.com.au"><img alt="Payneham Table Tennis" src={imgPayntt}/></a>
                <div className="details">
                    <h2>Payneham Table Tennis Academy</h2>
                    <p>Full development and maintenance of a static website.</p>
                    <p>Newsleters produced regularly using Mailchimp.</p>
                    <p>Hosting on Google Cloud with Cloudflare.</p>
                </div>
                <div className="clear"/>
            </li>
            <li>
                <img alt="youngish.org" src={imgYoungish}/>
                <h2>youngish.org</h2>
                <p>This website (the website you are on right now) was developed with Typescript and React.</p>
                <div className="clear"/>
            </li>
        </ul>
    </section>
)