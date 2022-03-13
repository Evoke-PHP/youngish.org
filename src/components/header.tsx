import React, {useEffect, useRef, useState} from "react"

import imgMonitor from '../img/monitor.png'
import imgNameplate from '../img/nameplate.png'
import imgPaulDesktop from '../img/paul_desktop.jpg'
import imgUnderlineArrowDown from '../img/underline_arrow_down.png'
import imgUnderlineArrowAcross from '../img/underline_arrow_across.png'

import './header.scss';

export const Header = (): JSX.Element => {
    const [scrollPercent, setScrollPercent] = useState(0),
        scrollContainer = useRef<HTMLDivElement>(null),
        paul = useRef<HTMLDivElement>(null)

    useEffect((): () => void => {
            const updateScroll = () => setScrollPercent(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight))
            window.addEventListener('scroll', updateScroll)
            updateScroll()
            return () => window.removeEventListener('scroll', updateScroll)
        },
        []
    );

    return (
        <header>
            <nav>
                <h1><a href="/">youngish.org</a></h1>
            </nav>
            <div className="hire">
                <div className="relative" ref={scrollContainer}>
                    <div className="paul" ref={paul} style={
                        (scrollContainer?.current && paul?.current) ? {
                                left: (
                                    scrollContainer.current.getBoundingClientRect().width -
                                    paul.current.getBoundingClientRect().width - 25
                                ) * scrollPercent
                            } :
                            {}
                    }>
                        <img alt="Paul Young" width="130" src={imgPaulDesktop}/>
                        <span style={
                            {
                                opacity: scrollPercent < 0.8 ?
                                    1 :
                                    ((1 - scrollPercent) * 5)
                            }
                        }>I am Paul Young.</span>
                    </div>
                    <img alt="monitor" id="monitor" src={imgMonitor} width="180"/>
                    <img id="nameplate" className="nameplate" alt="nameplate" width="100" src={imgNameplate}/>
                </div>
                <div className="find-out">
                    <div className="container">
                        <div className="text">Find out why you should hire me!</div>
                        <img alt="Find out why" className="left" src={imgUnderlineArrowDown}/>
                        <img alt="you should hire me" className="right" src={imgUnderlineArrowAcross}/>
                        <div className="clear"/>
                    </div>
                </div>
                <div id="fadebar"/>
            </div>
            <div className="offset"/>
        </header>
    )
}

