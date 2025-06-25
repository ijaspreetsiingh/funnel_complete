import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { useSelector } from 'react-redux';
import LeadCaptureForm from './LeadCaptureForm';

interface CoachProfileState {
  username?: string;
  headline?: string;
  specializations?: { name: string }[];
  profilePicture?: string;
  experienceYears?: number;
  gallery?: string[];
  theme?: string;
  image0?: string; // Add image0 to the state interface
}

interface AppState {
  coachProfile: CoachProfileState & {
    fullName: string;
    emailAddress: string;
    whatsappNumber: string;
  };
}

const BannerV1LunaStyle: React.FC = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();

  const coachProfile = useSelector((state: AppState) => state.coachProfile) || {};
  const {
    username = "Your Name",
    headline: headlineBio = "A holistic approach to transform your health...",
    specializations = [],
    theme,
    image0 // Destructure image0 from coachProfile
  } = coachProfile;

  const typedSpecializations = specializations.length > 0
    ? specializations.map(spec => spec.name)
    : ["PCOD/PCOS", "Thyroid Health", "Hormonal Balance", "Natural Weight Loss"];

  // Use image0 for the videoThumbnail, with a fallback
  const videoThumbnail = image0
    ? image0
    : "https://antux-react.vercel.app/assets/img/about/1.jpg";

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

  const bioTextStyle = {
    color: theme === 'dark' ? '#a0a0a0' : '#333333'
  };

  return (
    <>
      <div className="banner-v1-luna-style">
        <div className="page-wrapper-luna">
          <main className="main-content-luna">
            <section className="hero-section-luna">
              <h1>
                I <span role="img" aria-label="wave">👋</span> am {username}, Revealing My Secret To Reversing <br />
                <span className="highlight-green-luna">
                  <ReactTyped
                    strings={typedSpecializations}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={2000}
                    loop
                    smartBackspace
                  />
                </span>
                <br />
                And Achieving Your Health Goals, Naturally.
              </h1>
              <p className="subtitle-luna" style={bioTextStyle}>
                {headlineBio}
              </p>
            </section>

            <section className="visual-focus-section-luna">
              <div className="single-image-background-luna" style={{ backgroundImage: `url(${videoThumbnail})` }}></div>
              <div className="video-area-luna">
                <div onClick={handleOpenForm} style={{ cursor: 'pointer' }}>
                  <div className="video-play-button-luna-style">
                    <i className="fas fa-play" />
                    <div className="effect-luna-style" />
                  </div>
                </div>
              </div>
              <br /><br /><br />
            </section>
          </main>
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

export default BannerV1LunaStyle;