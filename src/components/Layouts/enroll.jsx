import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './enroll.css';
import LeadCaptureForm from '../banner/LeadCaptureForm';
import { useNavigate } from 'react-router-dom';

const StickyEnrollBar = ({
    currentPrice,
    originalPrice,
    deadline,
    seatsLeft,
    bonusText,
    enrollLink,
    theme = 'light'
}) => {
    const [isFormOpen, setFormOpen] = useState(false);
    const navigate = useNavigate();

    const containerStyle = {
        backgroundColor: theme === 'dark' ? '#1a1a1a' : 'beige'
    };

    const textStyle = {
        color: theme === 'dark' ? '#ffffff' : '#555555'
    };

    const bonusTextStyle = {
        color: theme === 'dark' ? '#ffffff' : '#333333'
    };

    const handleOpenForm = () => {
        setFormOpen(true);
    };

    const handleCloseForm = () => {
        setFormOpen(false);
    };

    const handleFormSuccess = () => {
        setFormOpen(false);
        navigate('/contact');
    };

    return (
        <> 
            <div className="sticky-enroll-bar-container" style={containerStyle}>
                <div className="sticky-enroll-bar">
                    <div className="info-section">
                        <div className="price-wrapper">
                            <span className="current-price">{currentPrice}</span>
                            <span className="original-price">{originalPrice}</span>
                        </div>
                        <div className="deadline" style={textStyle}>{deadline}</div>
                    </div>
                    <div className="action-section">
                        <div className="enroll-button-wrapper">
                            {seatsLeft && (
                                <span className="seats-left-badge">
                                    {seatsLeft} SEATS LEFT
                                </span>
                            )}
                            <button onClick={handleOpenForm} className="enroll-now-button">
                                ENROLL NOW
                            </button>
                        </div>
                        {bonusText && <div className="bonus-text" style={bonusTextStyle}>{bonusText}</div>}
                    </div>
                </div>
            </div>
            <LeadCaptureForm
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSuccess={handleFormSuccess}
            />
        </>
    );
};

StickyEnrollBar.propTypes = {
    currentPrice: PropTypes.string,
    originalPrice: PropTypes.string,
    deadline: PropTypes.string,
    seatsLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bonusText: PropTypes.string,
    enrollLink: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
};

StickyEnrollBar.defaultProps = {
    currentPrice: "free",
    originalPrice: "₹999",
    deadline: "Deadline Coming Soon",
    seatsLeft: "10",
    bonusText: "+ Unbelievable Bonuses",
    enrollLink: "/enroll",
    theme: 'light'
};

export default StickyEnrollBar;