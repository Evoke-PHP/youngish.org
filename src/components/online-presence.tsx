import React from "react"

import imgGithub from "../img/GitHub-Mark-64px.png"
import imgLinkedIn from "../img/LI-Logo.png"

import "./online-presence.scss"

export const OnlinePresence = () : JSX.Element => (
       <section className="online-presence">
           <h1>Online Presence</h1>
           <p>Please see my online presence:</p>
           <ul>
               <li>
                   <a href="https://stackexchange.com/users/275041/paul">
                       <img src="https://stackexchange.com/users/flair/275041.png"
                            alt="profile for Paul on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                            title="profile for Paul on Stack Exchange, a network of free, community-driven Q&amp;A sites"/>
                   </a>
               </li>
               <li>
                   <a href="https://github.com/Evoke-PHP">
                       <img alt="Github" className="github" src={imgGithub} title="Github"/>
                   </a>
               </li>
               <li>
                   <a href="https://www.linkedin.com/in/paul-young-012548206">
                       <img alt="LinkedIn" src={imgLinkedIn}/>
                   </a>
               </li>
           </ul>
       </section>
)