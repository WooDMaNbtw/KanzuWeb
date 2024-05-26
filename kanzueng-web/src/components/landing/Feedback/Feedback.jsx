import React from 'react';
import TimelineEvent from './timelineEvents';


const Timeline = ({ feedbacks, currentEventIndex, showNextEvent, onMouseEnter, onMouseLeave }) => {
    const widths = [8, 16, 17, 16.5, 20]

    return (
        <div className="content"
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            <div className="timeline" style={{position: "relative", left: '-150px'}}
            >
                {feedbacks.map((feedback, index) => (
                    <TimelineEvent
                        key={index}
                        tags={feedback.tags}
                        description={feedback.description}
                        author={feedback.author}
                        linkToProject="https://google.com"
                        isVisible={index === currentEventIndex}
                        showNextEvent={showNextEvent}
                        width={widths[currentEventIndex]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;