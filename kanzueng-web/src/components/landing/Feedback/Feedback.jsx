import React from 'react';
import TimelineEvent from './timelineEvents';


const Timeline = ({ feedbacks, currentEventIndex, showNextEvent, onMouseEnter, onMouseLeave }) => {
    const widths = [0, 0, 9, 12, 19]

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
                        linkToProject="#feedback"
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