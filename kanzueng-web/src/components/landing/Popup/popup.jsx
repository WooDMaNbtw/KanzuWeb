import React, { useState } from 'react';
import './popup.css';


const PopupForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        projectType: '',
        budget: '',
        deadline: '',
        technologies: '',
        taskLink: '',
        designLink: '',
        competitorLink: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="contact-header">
                            <h2 className="header">Contact Us</h2>
                            <h2 className="pre-header">Establish a contact or start describing your project right
                                away </h2>
                        </div>
                        <div className="form-group form-group-inline">
                            <div className="form-group-short">
                                <label>Your name</label>
                                <input type="text" name="name" placeholder="Write your name here" onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group-short">
                                <label>Your phone number</label>
                                <input type="text" name="phone" placeholder="+358 (000) 000-00-00" onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group-short">
                                <label>Your email</label>
                                <input type="email" name="email" placeholder="hello-there@general-kenobi.com"
                                       onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Your message</label>
                            <textarea name="message"
                                      placeholder="Write your message: describe your future project that we can handle"
                                      onChange={handleChange}></textarea>
                        </div>
                        <div className="form-footer">
                            <div className="checkbox-group"  style={{opacity: 0}}>
                                <label>
                                    <input type="checkbox" name="consent" required/>
                                    Please accept our Privacy Policy
                                </label>
                            </div>
                            <div className="form-buttons">
                                <button type="button" className="brief-btn" style={{opacity: 0}}>Fill in the Brief</button>
                                <button type="submit" className="send-btn">Send Form</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;