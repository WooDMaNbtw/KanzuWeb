import "./landingContact.css"
import img from "../../../assets/ceo_photo.jpeg"
import PopupForm from "../Popup/popup";
import {useState} from "react";

const LandingContact = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
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
                            <button className="brief-button" onClick={() => setShowPopup(true)}>
                                contact us
                            </button>
                            {/*<button className="contact-button"*/}
                            {/*        onClick={() => window.location.href = 'contact-us.html'}>contact us*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>
                    <div className="policy"><a href="#contact">Privacy policy</a></div>
                    <div className="year"><span>Kanzu | 2024</span></div>
                </div>
            </div>
        </section>
        {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
        </>
    );
}

export default LandingContact;