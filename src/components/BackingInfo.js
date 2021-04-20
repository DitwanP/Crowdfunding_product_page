import React from 'react';
import '../styles/BackingInfo.scss';

const BackingInfo = () => {
    return (
        <div className="backing-info">
            <div className="inner-container">
                <div className="money-raised">
                    <h3>$89,914</h3>
                    <h4>of $100,000 backed</h4>
                </div>
                <div className="backers">
                    <h3>1,337</h3>
                    <h4>total backers</h4>
                </div>
                <div className="remaining-time">
                    <h3>56</h3>
                    <h4>days left</h4>
                </div>
            </div>
            <div className="progress-bar">
                <div className="bar-fill"></div>
            </div>
        </div>
    )
}

export default BackingInfo
