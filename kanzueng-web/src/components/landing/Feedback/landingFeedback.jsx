import React, {useCallback, useEffect, useState} from "react";
import "./landingFeedback.css";
import Timeline from "./Feedback";


const LandingFeedback = () => {
    const feedbacks = [
        {
            tags: ['bot', 'telegram', 'js'],
            description: "— Guys did an outstanding job of rearranging my website along with adding features I needed badly. Now we're also developing a chat-bot with them",
            author: "Lauri Väinämö, CEO at Rasmus",
            date: ['05/04/2024', '5.1%']
        },
        {
            tags: ['website', 'redesign', 'frontend'],
            description: "— I'm amazed at the quality of work and dedication they showed in redesigning our website. It's now more user-friendly and visually appealing. Highly recommended!",
            author: "Anna Smith, Marketing Manager at ABC Corp",
            date: ['21/03/2024', '12.8%']
        },
        {
            tags: ['app', 'development', 'mobile'],
            description: "— Excellent job on developing our mobile app. The team's expertise in app development is truly impressive. Looking forward to future collaborations!",
            author: "John Doe, CTO at XYZ Solutions",
            date: ['18/01/2024', '28.2%']
        },
        {
            tags: ['backend', 'database', 'optimization'],
            description: "— We needed optimization for our backend database, and they delivered beyond our expectations. Our system now runs smoother and faster. Great work!",
            author: "Emily Brown, Lead Developer at DEF Inc",
            date: ['09/12/2023', '43.5%']
        },
        {
            tags: ['design', 'ui/ux', 'creative'],
            description: "— Kudos to the team for their creativity and attention to detail in designing our UI/UX. Our product now stands out in the market. Thank you!",
            author: "Michael Johnson, Product Manager at GHI Technologies",
            date: ['30/10/2023', '74.3%']
        }
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