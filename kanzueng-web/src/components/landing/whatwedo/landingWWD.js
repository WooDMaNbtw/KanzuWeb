import Kanzu from "../../../assets/Kanzu1.png";
import "./landingWhatWeDo.css"
import circle from "../../../assets/img_1.png"
const LandingWWD = () => {
    return (
        <>
            <section id="what-we-do" className="section">
                <div className="content">
                    <div className="image-container">
                        <img src={Kanzu} alt="What We Do"/>
                        <div className="overlay overlay-what-we-do" style={{width: '80%', background: "transparent"}}>
                            {/*<h1 style={{fontSize: "30px"}}>What We Do</h1>*/}
                            <div className="overlay-what-we-do"
                                 style={{width: "100%", height: '600px', marginTop: '-150px', marginLeft: '100px'}}>
                                <h2 className="move-wwd-1">automation</h2>
                                <h2 className="move-wwd-2" style={{background: "transparent"}}><span>website</span></h2>
                                <div className="move-wwd-block-1">
                                    <h2 className="move-wwd-3">Experience</h2>
                                    <h2 className="move-wwd-4">chat-bot</h2>
                                    <h2 className="move-wwd-5">magic</h2>
                                </div>
                                <h2 className="move-wwd-6">parsing</h2>
                                <h2 className="move-wwd-7">app</h2>
                            </div>
                            <table style={{width: '100%', marginTop: "0px", justifyContent: "center"}}>
                                <tr>
                                    <td width='50%'>
                                        <div style={{
                                            justifyContent: "center",
                                            width: "100%",
                                            height: "100px",
                                            alignItems: "center",
                                            display: "flex",
                                        }}><span
                                            style={{
                                                width: '450px',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // border: "3px solid #000000",
                                                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                                // borderRadius: "8px",
                                                fontSize: '27px'
                                            }}>At Kanzu we develop job-perfect IT projects that meet both the needs and the eye</span>
                                        </div>
                                    </td>
                                    <td width='50%' style={{justifyContent: "center"}}>
                                        <div style={{
                                            width: '100%',
                                            justifyContent: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            height: "100%"
                                        }}>
                                            <a href="#contact" style={{
                                                textDecoration: "none", color: "white",
                                                width: "300px",
                                                height: "70px",
                                                display: "flex",
                                                alignItems: "center",
                                                fontSize: "26px",
                                                justifyContent: 'center',
                                                border: "2px solid #000000",
                                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                                borderRadius: "5px",
                                                backgroundColor: "black",
                                            }} type="button">
                                                <span style={{fontWeight: 600}}>
                                                    Start a project
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{display: 'flex', justifyContent: 'center'}}>
                <div className="content">
                    <img src={circle} alt="What We Do" style={{width: 1920, height: 1080}}/>
                </div>
            </section>

        </>
    )
}

export default LandingWWD