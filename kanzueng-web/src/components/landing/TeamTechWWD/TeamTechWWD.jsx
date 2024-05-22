import "./TeamTechWWD.css"


const TeamTechWWD = () => {
    return (
        <>
            <section className="section tech-wwd">
                <div className="content">
                    <div className="header" style={{display: "flex", justifyContent: "center"}}>
                        <h1>We're a small team aiming large <span className="target">targets</span></h1>
                    </div>
                    <div className="team-tech">
                        <div className="circles" style={{display: "flex", justifyContent: "center"}}>
                            <div className="team">
                                <div className="circle">team</div>
                            </div>
                            <div className="cross">
                                <div className="vertical">.</div>
                                <div className="horizontal">.</div>
                            </div>
                            <div className="tech">
                                <div className="circle">tech</div>
                            </div>
                        </div>
                        <div className="labels" style={{display: "flex", justifyContent: "center"}}>
                            <div className="label lb-3" style={{marginTop: "-40px"}}>easy</div>
                        </div>
                        <div className="labels" style={{display: "flex", justifyContent: "center"}}>
                            <div style={{display: "flex", justifyContent: "space-between", width: '65%'}}>
                                <div className="label lb-1">empathic</div>
                                <div className="label lb-2">efficient</div>
                                <div className="label lb-4">earthly</div>
                                <div className="label lb-5">friendly</div>
                                <div className="label lb-6">minimalistic</div>
                            </div>
                        </div>
                    </div>
                    <p className="left-text">
                        We believe tech should work efficiently to allow space and time for people to work better and
                        less
                    </p>
                    <p className="right-text">
                    Empathy navigates what we do: we want to help you solve your everyday tasks better, faster,
                        easier
                    </p>
                </div>
            </section>
        </>
    )
}

export default TeamTechWWD;