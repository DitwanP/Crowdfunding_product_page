import React, {useState} from 'react';
import '../styles/Product.scss';

const Product = () => {
    const [showModal, setShowModal] = useState(false);
    const [isBookmarked, setBookmark] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const updateBookmark = () => {
        setBookmark(!isBookmarked);
    }

    return (
        <div className="product">
            <svg className="logo-svg" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <circle fill="#000" cx="28" cy="28" r="28"/>
                    <g fillRule="nonzero">
                        <path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/>
                        <path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/>
                    </g>
                </g>
            </svg>
            <h1 className="product-name">Mastercraft Bamboo Monitor Riser</h1>
            <h2 className="product-tagline">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h2>
            <div className="product-buttons">
                <button className="back-project-button" onClick={toggleModal}>Back this project</button>
                <button className={isBookmarked ? "bookmark-button-active" : "bookmark-button"} onClick={updateBookmark}>
                    <svg className="bookmark-svg" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <circle fill="#2F2F2F" cx="28" cy="28" r="28"/>
                            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
                        </g>
                    </svg>
                    <h3 className="bookmark-text">{isBookmarked ? "Bookmarked" : "Bookmark"}</h3>
                </button>
            </div>
            {showModal ? (<div className="backing-modal"> 
                <div className="modal-main">
                    <div className="inner-container">
                        <div className="title-and-close-button">
                            <h3 className="section-title">Back this project</h3>
                            <button className="close-modal-button" onClick={toggleModal}>
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
                            </button>
                        </div>
                        <div className="backing-options">
                            <div className="checkbox-container">
                                <label className="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span className="checkbox-fill"></span>
                                </label>
                            </div>
                            <div className="content">
                                <h3 className="option-title">Pledge with no reward</h3>
                                <div className="option-description">
                                <p>
                                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                                    you will be signed up to receive product updates via email.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="backing-options">
                            <div className="checkbox-container">
                                <label className="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span className="checkbox-fill"></span>
                                </label>
                            </div>
                            <div className="content">
                                <h3 className="option-title">Bamboo Stand</h3>
                                <div className="option-description">
                                    <p>
                                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                                        you’ll be added to a special Backer member list.
                                    </p>
                                </div>
                            </div>
                            <div className="remaining-and-select-button">
                                <div className="amount-remaining">101</div>
                                <button className="option-select">Select Reward</button>
                            </div>
                        </div>
                        <div className="backing-options">
                            <div className="checkbox-container">
                                <label className="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span className="checkbox-fill"></span>
                                </label>
                            </div>
                            <div className="content">
                                <h3 className="option-title">Black Edition Stand</h3>
                                <div className="option-description">
                                    <p>
                                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                                        member list. Shipping is included.
                                    </p>
                                </div>
                            </div>
                            <div className="remaining-and-select-button">
                                <div className="amount-remaining">64</div>
                                <button className="option-select">Select Reward</button>
                            </div>
                        </div>
                        <div className="backing-options">
                            <div className="checkbox-container">
                                <label className="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span className="checkbox-fill"></span>
                                </label>
                            </div>
                            <div className="content">
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
                </div>
            </div>) : null}
        </div>
    )
}

export default Product

