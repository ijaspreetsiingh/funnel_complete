import { useEffect, useState } from 'react';

import shape8 from "/assets/img/shape/8.png"

import about1 from "../..//assets/img/about1.jpg"
import about2 from "/assets/img/about/2.jpg"
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch, useSelector } from 'react-redux';
import LeadCaptureForm from '../banner/LeadCaptureForm'; 


gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {
      const [isFormOpen, setFormOpen] = useState(false);
    const experienceYears = useSelector((state) => state.coachProfile.experienceYears);
    const totalProjectsCompleted = useSelector((state) => state.coachProfile.totalProjectsCompleted);
    const headline = useSelector((state) => state.coachProfile.bio);
 const profilepic1 = useSelector((state) => state.coachProfile.image1);
 const profilepic2 = useSelector((state) => state.coachProfile.image2);
    // Modal Video 
    const [isOpen, setOpen] = useState(false);
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
    // Scroll Animation 
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="shape-style-one">
                       <img src='https://antux-react.vercel.app/assets/img/shape/17.png' alt="Image Not Found" />
                    <img className="upDownScrol" src={shape8} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="fun-fact-style-one-items">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"> <CountUp end={experienceYears} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Years of Experience</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={totalProjectsCompleted} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Projects completed on 30 countries</span>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    {headline}
                                </p>
                                <Link className="btn-style-regular btn-border" onClick={handleOpenForm} ><span >Watch Video</span> <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-style-one-bottom-info mt-50">
                        <div className="row">
                            <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
                                <div className="img-container">
                                    <img src={profilepic1} alt="Image Not Found" />
                                    <Link to="#" className="popup-youtube video-play-button" onClick={() => setOpen(true)} >
                                        <i className="fas fa-play" />
                                        <div className="effect" />
                                    </Link>
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <img src={profilepic2} alt="Image Not Found" />
                            </div>
                        </div>
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

export default AboutV1;