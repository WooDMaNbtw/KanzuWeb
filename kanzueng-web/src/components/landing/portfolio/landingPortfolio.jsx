import React, { useState } from "react";
import PaymentBot from '../../../assets/PaymenBot.png'
import SteamApp from '../../../assets/SteamApp.jpg'
import MontBot from '../../../assets/montenegro.jpeg'
import ConsoleApp from '../../../assets/ConsoleMail.png'
import OrderApp from '../../../assets/OrderApp.jpeg'
import JobTrackBot from '../../../assets/JobFiBot.png'
import "./landingPortfolio.css"
import NavigationButton from "./navigationButton";

const LandingPortfolio = () => {
    const [activeCard, setActiveCard] = useState(0); // Изначально первая карточка открыта
    const [halfActiveCard, setHalfActiveCard] = useState(1) //Изначально вторая карточка полу открыта
    const [temp, setTemp] = useState(0)
    const handleCardClick = (index) => {
        setActiveCard(index);
        setTemp(index)
        index >= temp ? setHalfActiveCard(index + 1) : setHalfActiveCard(index - 1)

        if (index === 0) {
            setHalfActiveCard(index + 1)
        }
        else if (index === projects.length - 1){
            setHalfActiveCard(projects.length - 2)
        }

    };

    const projects = [
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'Our team developed a chat-bot in Telegram that helps to locate the user themselves on the map as well as to see upcoming busses. We\'ve experienced the lack of such service ourselves and came up with comfortable, simple yet elegant solution', image: MontBot, techno: ["telegram", "bot", "aiogram"]},
        { type: "Automation", title: 'Steam accounts management automatization', description: 'We\'ve came up with account management automation for Steam. This allows to register, manage accounts and create maFile.', image: SteamApp, techno: ["opencv", "selenium", "asf"]},
        { type: "Telegram chat-bot", title: 'Payment method selector bot', description: 'Our developers made a bot that allows to choose payment method: credit card, crypto currency, umoney.', image: PaymentBot, techno: ["telegram", "bot", "aiogram"]},
        { type: "Console app", title: 'Email management console app', description: 'This app helps to add notes about emails, search emails by sender\'s name and price info. The program can load and store data as a text file, which grants the user a way to interact with the emails database.', image: ConsoleApp, techno: ["C#", "cmd", ".net"]},
        { type: "Web application", title: 'Hotel management app ', description: 'Allows to book a hotel number. Easy and simple to use.', image: OrderApp, techno: ["Django", "ajax", "JQuery", "drf"]},
        { type: "Telegram chat-bot", title: 'Finnish job search bot', description: 'It is an automated tool designed to comprehensively assist users in finding suitable vacancies and managing the entire job search process in Finland', image: JobTrackBot, techno: ["telegram", "aiogram", "SQL"]},
    ];

    const goToPreviousCard = () => {
        setActiveCard(activeCard === 0 ? projects.length : activeCard - 1);
        setHalfActiveCard(activeCard === 1 ? 1 : activeCard - 2)
    };

    const goToNextCard = () => {
        setActiveCard(activeCard === projects.length - 1 ? 0 : activeCard + 1);
        setHalfActiveCard(activeCard === projects.length - 2 ? projects.length - 2 : activeCard + 2)
    };

    return (
        <>
            <section id="portfolio" className="section portfolio">
                <h1 className="naming">Portfolio</h1>
                <div className="content">
                    <div className="nav-button">
                        <NavigationButton
                            direction="prev"
                            disabled={activeCard === 0}
                            onClick={goToPreviousCard}
                        />
                    </div>
                    <div className="cards-container" style={{width: "80%"}}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`card ${index === activeCard ? 'active' : index === halfActiveCard ? 'half-active' : 'inactive'} `}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="img-block">
                                    <div className="overlay-text">
                                        {project.techno.map((tech, index) => (
                                            <h3>
                                                {tech}
                                            </h3>
                                        ))}
                                    </div>
                                    <div className="img-proj">
                                        <img src={project.image} alt={project.title}/>
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h3>{project.title}</h3>
                                            <h4>{project.type}</h4>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="nav-button">
                        <NavigationButton
                            direction="next"
                            disabled={activeCard === projects.length - 1}
                            onClick={goToNextCard}
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default LandingPortfolio;
