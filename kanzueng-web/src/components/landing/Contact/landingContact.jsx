import "./landingContact.css"
import Kanzu from "../../../assets/Kanzu1.png"
import img from "../../../assets/1714982237089.jpeg"

const LandingContact = () => {
    return (
        <section id="contact" className="section contact">
            <h1 className="naming">contact</h1>
            <div className="content">
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-info-icon">
                            <img src={img} alt="s"/>
                        </div>
                        <div className="message">
                            <p>— Write us about your project, and we’ll solve your case efficiently. Want things done
                                even faster? Start with filling in our brief-like form
                            </p>
                            <p className="ceo-aftername">Alexander, CEO</p>
                        </div>
                        <div className="contact-details">
                            <div>
                                <p>email: <a href="mailto:ceo@kanzu.com">ceo@kanzu.com</a></p>
                                <p>tg: <a href="https://t.me/SkyFyFamily" target="_blank">@SkyFyFamily</a></p>

                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div>
                            <button className="brief-button" onClick={() => window.location.href = 'brief-form.html'}>fill
                                in the brief
                            </button>
                            <button className="contact-button"
                                    onClick={() => window.location.href = 'contact-us.html'}>contact us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingContact;