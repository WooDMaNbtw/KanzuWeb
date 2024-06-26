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
                            <p className="ceo-aftername">Aleksandr, CEO</p>
                        </div>
                        <div className="contact-details">
                            <div>
                                <p>email: <a href="mailto:hello@kanzu.fi">hello@kanzu.fi</a></p>
                                {/*<p>tg: <a href="https://t.me/SkyFyFamily" target="_blank">@SkyFyFamily</a></p>*/}
                                <hr/>
                                <p><b>Contact numbers</b></p>
                                <p>primary: 040 871 65 01</p>
                                <p>second: 040 871 65 04</p>

                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div>
                            {/*<button className="brief-button" onClick={() => setShowPopup(true)}>*/}
                            {/*    contact us*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>
                    <div className="policy"><a href="#contact"></a></div>
                    <div className="year"><span>Kanzu | 2024</span></div>
                </div>
            </div>
        </section>
        {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
        </>
    );
}

export default LandingContact;