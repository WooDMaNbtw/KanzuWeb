import React, {useCallback, useEffect, useState} from "react";
import "./landingFeedback.css";
import Timeline from "./Feedback";


const LandingFeedback = () => {
    const feedbacks = [
        {
            tags: ['creative', 'design', 'website'],
            description: "— The work was done very quickly and we liked the result. Feedback was given promptly. All our wishes and comments, even those that arose during the work, were immediately taken into account by you.",
            author: "Timmo, CEO at Kalewalakalastaja",
            date: ['23/06/2024', '5.1%']
        },
        {
            tags: ['software', 'optimization', 'frontend'],
            description: "— Kanzu's team made everything on time according to the technical docs. Helped with software installation. Sincerely recommend the company!",
            author: "Sam, Product Manager",
            date: ['06/06/2024', '12.8%']
        },
        {
            tags: ['app', 'development', 'mobile'],
            description: "— Very precise work usability testing our product. Guys expert opinions brought valuable insights to our project. Thanks for everything!",
            author: "Irma, freelancer",
            date: ['18/05/2024', '28.2%']
        },
        {
            tags: ['website', 'design', 'convenience'],
            description: "— The team overseed our expectations by providing several options from which we've chosen what fitted us best. All the comments and suggestions were introduced to the interface in no time.",
            author: "Tarja, PR manager",
            date: ['28/04/2023', '43.5%']
        },
    ];

    const [isHovered, setIsHovered] = useState(false);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const showNextEvent = useCallback(() => {
        setCurrentEventIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, [feedbacks.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
            setCurrentEventIndex(
                (prevIndex) => (prevIndex + 1) % feedbacks.length
            );}
        }, 5000);

    return () => clearInterval(interval);

    }, [isHovered]);


    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section id="feedback" className="section section--feedback">
            <h1 className="naming">feedback</h1>
            <Timeline
                feedbacks={feedbacks}
                currentEventIndex={currentEventIndex}
                showNextEvent={showNextEvent}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="time-line">
                {feedbacks.map((feedback, index) => (
                    <div
                        className="circle-container"
                        key={index}
                        style={{ left: feedback.date[1] }}
                    >
                        <div className={ index === currentEventIndex ? 'circle circle-active' : 'circle' }></div>
                        <span className={ index === currentEventIndex ? 'date date-active' : 'date' }>{feedback.date[0]}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LandingFeedback;