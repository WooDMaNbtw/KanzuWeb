import React, { useState } from "react";
import f from '../../../assets/project1.png'
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
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        { type: "Telegram chat-bot", title: 'Montenegro Buses Timetable', description: 'At Kanzu we develop job-perfect IT projects that meet both the needs and the eye. At Kanzu we develop job-perfect IT projects that meet both the needs and the eye', image: f, techno: ["JS", "CSS", "HTML", "REACT", "DJANGO"]},
        // { type: "Type1", title: 'Project 8', description: 'Description 7', image: f, techno: ["sss", "sss", "sss"] }
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
                    <div className="cards-container">
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
                                    <img src={project.image} alt={project.title}/>
                                </div>
                                <div className="text">
                                    <div>
                                        <h3>{project.type}</h3>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
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
