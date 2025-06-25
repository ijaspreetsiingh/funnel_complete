import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './video.css';

// Define your Redux state interfaces
interface CoachProfileState {
    vslHeadline?: string;
    video_main?: string;
    vslVideoThumbnailUrl?: string;
    vslCtaButtonText?: string;
    vslCtaButtonLink?: string;
    vslSecondaryText?: string;
}

interface BookingFormState {
    fullName?: string;
    // Add other booking form fields if needed
}

interface AppState {
    coachProfile: CoachProfileState;
    bookingForm: BookingFormState;
}

const VideoSalesLetter: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);
    
    // Access both slices separately with proper typing
    const coachProfile = useSelector((state: AppState) => state.coachProfile) || {};
    const bookingForm = useSelector((state: AppState) => state.bookingForm) || {};
    
    const {
        vslHeadline = "Default Headline: Empower Your Health Journey",
        video_main,
        vslVideoThumbnailUrl,
        vslCtaButtonText = "Book Your Call Now",
        vslCtaButtonLink = "/calender",
        vslSecondaryText = "Take the first step towards a healthier you."
    } = coachProfile;

    // Get the name from bookingForm
    const name = bookingForm.fullName || '';

    useEffect(() => {
        if (vslVideoThumbnailUrl) {
            const img = new Image();
            img.src = vslVideoThumbnailUrl;
            img.onload = () => setIsLoaded(true);
        }
    }, [vslVideoThumbnailUrl]);

    const handlePlayVideo = () => {
        if (video_main) {
            setIsPlaying(true);
        }
    };

    const handlePauseVideo = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.src = video_main || '';
        }
    };

    return (
        <div className="video-sales-letter-section">
            <div className="container vsl-container">
                <p style={{ 
                    color: 'orange', 
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {name ? `Congratulations ${name}!` : 'Congratulations!'}
                </p>
                
                <h2 className="vsl-headline">{vslHeadline}</h2>

                <div className="vsl-video-area">
                    {video_main ? (
                        <div className="vsl-video-container">
                            <iframe
                                ref={videoRef}
                                src={isPlaying ? `${video_main}${video_main.includes('?') ? '&' : '?'}autoplay=1` : video_main}
                                title="Promotional Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="vsl-iframe"
                                frameBorder="0"
                            />
                            
                            {!isPlaying && (
                                <div 
                                    className="vsl-video-overlay"
                                    onClick={handlePlayVideo}
                                >
                                    <div className="vsl-play-button-overlay">
                                        <svg className="vsl-play-icon" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="vsl-video-placeholder">
                            <div className="vsl-placeholder-content">
                                <svg className="vsl-video-icon" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
                                </svg>
                                <p>Video content is coming soon!</p>
                            </div>
                        </div>
                    )}
                </div>

                <Link to={vslCtaButtonLink || '#'} className="vsl-cta-button">
                    {vslCtaButtonText}
                </Link>

                <p className="vsl-secondary-text">{vslSecondaryText}</p>
            </div>
        </div>
    );
};

export default VideoSalesLetter;