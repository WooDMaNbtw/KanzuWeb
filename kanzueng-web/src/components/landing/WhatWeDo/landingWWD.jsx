import "./landingWWD.css"
import radarChart from "../../../assets/WWDcircle.png"
import CardWWDComponentLeft from "./cards";
import CardWWDComponentRight from "./cards";
import {useEffect, useState} from "react";


const panels = ['left-top', 'left-bottom', 'right-top', 'right-bottom'];

const LandingWhatWeDo = () => {
    const [activePanel, setActivePanel] = useState('left-top');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setActivePanel((prevPanel) => {
                    const currentIndex = panels.indexOf(prevPanel);
                    const nextIndex = (currentIndex + 1) % panels.length;
                    return panels[nextIndex];
                });
            }
        }, 3500);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const getH2Style = (panel) => {
        return panel === activePanel
            ? { color: 'black', fontWeight: 'bold', transform: 'scale(1.08)', transition: '.5s ease-in-out' }
            : { color: 'gray', transition: '.5s ease-in-out' };
    };

    const isCardVisible = (panel) => {
        return panel === activePanel;
    };

    return (
        <section id="what-we-do" className="section section--wwd">
            <h2 className="wwd-header">what we do</h2>
            <div className="content">
                <div
                    className={`left-panel ${activePanel.startsWith('left') ? 'visible visible-left' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="top-panel">
                        <h2 style={getH2Style('left-top')}>chat-bot Development</h2>
                        {isCardVisible('left-top') && (
                            <CardWWDComponentLeft
                                flex={"flex-end"}
                                tags={['Bot', 'Telegram', 'JS']}
                                descText={"We’re pro experts at developing chat-bots for your business. Automize processes and make your customer service next level with chat-bots"}
                                buttonText={"develop chat-bot"}
                            />
                        )}
                    </div>
                    <div className="bottom-panel">
                        {isCardVisible('left-bottom') && (
                            <CardWWDComponentLeft
                                flex="flex-end"
                                tags={['React Native', 'Flutter']}
                                descText={"We develop both native and cross-platform apps to fit your business needs whether it is a tiny entry form or an immense product. "}
                                buttonText={"build an app"}
                            />
                        )}
                        <h2 style={getH2Style('left-bottom')}>Mobile Development</h2>
                    </div>
                </div>
                <div className="center-panel">
                    <div className="radar-chart">
                        <img src={radarChart} alt="Radar Chart" className="radar-chart-image"/>
                    </div>
                </div>
                <div
                    className={`right-panel ${activePanel.startsWith('right') ? 'visible visible-right' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="top-panel">
                        <h2 style={getH2Style('right-top')}>Websites & Web Services</h2>
                        {isCardVisible('right-top') && (
                            <CardWWDComponentRight
                                flex="flex-start"
                                tags={['Django', 'React', 'API']}
                                descText={"At Kanzu we're proficient in developing custom web apps as well as websites that create smooth experiences and use flawless technologies."}
                                buttonText={"develop chat-bot"}
                            />
                        )}
                    </div>
                    <div className="bottom-panel">
                        {isCardVisible('right-bottom') && (
                            <CardWWDComponentRight
                                flex="flex-start"
                                tags={['Unix', 'Windows', 'DBA']}
                                descText={"Our experts are skilled in creating, fine-tuning and maintaining software and computer systems. Complexity is handled with precision and attention."}
                                buttonText={"develop admin systems"}
                            />
                        )}
                        <h2 style={getH2Style('right-bottom')}>System Administration</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingWhatWeDo;
