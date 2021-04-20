import React from 'react';
import '../styles/AboutSection.scss';

const AboutSection = () => {
    return (
        <div className="about-main">
            <div className="inner-container">
                <h3 className="section-title">About this project</h3>
                <div className="product-description">
                    <p>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br />
                        <br />
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>
                </div>
                <div className="backing-options">
                    <div className="title-and-price">
                        <h3 className="option-title">Bamboo Stand</h3>
                        <h2 className="option-price">Pledge $25 or more</h2>
                    </div>
                    <div className="option-description">
                        <p>
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                            you’ll be added to a special Backer member list.
                        </p>
                    </div>
                    <div className="remaining-and-select-button">
                        <div className="amount-remaining">101</div>
                        <button className="option-select">Select Reward</button>
                    </div>
                </div>
                <div className="backing-options">
                    <div className="title-and-price">
                        <h3 className="option-title">Black Edition Stand</h3>
                        <h2 className="option-price">Pledge $75 or more</h2>
                    </div>
                    <div className="option-description">
                        <p>
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                            member list. Shipping is included.
                        </p>
                    </div>
                    <div className="remaining-and-select-button">
                        <div className="amount-remaining">64</div>
                        <button className="option-select">Select Reward</button>
                    </div>
                </div>
                <div className="backing-options">
                    <div className="title-and-price">
                        <h3 className="option-title">Mahogany Special Edition</h3>
                        <h2 className="option-price">Pledge $200 or more</h2>
                    </div>
                    <div className="option-description">
                        <p>
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                            to our Backer member list. Shipping is included.
                        </p>
                    </div>
                    <div className="remaining-and-select-button">
                        <div className="amount-remaining">0</div>
                        <button className="option-select">Out of Stock</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection