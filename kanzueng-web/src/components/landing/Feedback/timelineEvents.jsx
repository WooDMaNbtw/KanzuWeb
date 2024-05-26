import './timelineEvents.css'
import React, {useEffect, useState} from "react";

const TimelineEvent = ({ tags, description, author, linkToProject, isVisible, showNextEvent, width }) => {

    const eventStyle = {
        opacity: isVisible ? 1 : 0,
        width: isVisible ? `40%` : `${width}%`,
        visibility: isVisible ? 'visible' : 'hidden',
    };

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 500); // 500ms matches the animation duration
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div className={`timeline-event ${animate ? 'slide-in' : ''}`} style={eventStyle}>
            <div className="event-content"
                 style={{ display: "flex", flexDirection: "column", width: '60%' }}>
                <div className="tags" style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0s'}}>
                    {tags.map((tag, index) => (
                        <span className="tag" key={index}>{tag}</span>
                    ))}
                </div>
                <div className="info">
                    <p className="description">{description}</p>
                    <p className="author">{author}</p>
                </div>
            </div>
            <div className="view-boxes" style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "flex-end",
                marginLeft: '50px',
                marginBottom: "10px",
                width: '25%'
            }}>
                <div className='boxes' style={{
                    height: '90%',
                    display: "flex",
                    width: '100%',
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <a href={linkToProject} className="view-project" style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0s'}}><span>view this project</span></a>
                    <button className="next-project" style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0s'}} onClick={showNextEvent}></button>
                </div>
            </div>
        </div>
    );
};

export default TimelineEvent;