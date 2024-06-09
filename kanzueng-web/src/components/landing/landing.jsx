import './landing.css'; // Подключаем стили
import LandingFirstPage from "./FirstPage/landingFirstPage";
import LandingWhatWeDo from "./WhatWeDo/landingWWD";
import LandingPortfolio from "./portfolio/landingPortfolio";
import LandingContact from "./Contact/landingContact";
import TeamTechWWD from "./TeamTechWWD/TeamTechWWD";
import LandingFeedback from "./Feedback/landingFeedback";


const Landing = () => {
    return (
        <div>
            <LandingFirstPage/>
            <LandingWhatWeDo/>
            <TeamTechWWD/>
            <LandingPortfolio/>
            <LandingFeedback/>
            <LandingContact/>
        </div>
    );
}

export default Landing;
