import CountUp from 'react-countup'
import ReactWOW from "react-wow"
import { useSelector } from 'react-redux'

const FactV1 = () => {
    const specializations = useSelector((state) => state.coachProfile.specializations);
    const certifications = useSelector((state) => state.coachProfile.certifications);
    // Get logo_image from Redux store
    const logoImages = useSelector((state) => state.coachProfile.logo_image);
    // Get certificationIcons from Redux store
    const certificationIcons = useSelector((state) => state.coachProfile.certificationIcons);

    return (
        <>
            <div className="fun-factor-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Top Skills</h4>
                                <h2 className="title">See my expertise</h2>
                            </div>
                        </div>
                    </div>

                    {/* Specializations */}
                    <div className="fun-fact-style-two-items text-center">
                        {specializations?.map((item, index) => (
                            <ReactWOW animation="fadeInUp" delay={`${index * 100}ms`} key={index}>
                                <div className="funfact-style-two-item">
                                    <div className="icon">
                                        <img 
                                            src={logoImages[index % logoImages.length].image} 
                                            alt={logoImages[index % logoImages.length].name} 
                                        />
                                    </div>
                                    <div className="fun-fact">
                                        
                                        <span className="medium">{item.name}</span>
                                    </div>
                                </div>
                            </ReactWOW>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="certifications mt-5 text-center">
                        <h4 className="sub-title">Certifications</h4>
                        <div className="fun-fact-style-two-items text-center">
                            {/* Using the certification icons from Redux */}
                            {certificationIcons.map((item, index) => (
                                <ReactWOW animation="fadeInUp" delay={`${index * 100}ms`} key={index}>
                                    <div className="funfact-style-two-item">
                                        <div className="icon">
                                            <img src={item.icon} alt={item.name} />
                                        </div>
                                        <div className="fun-fact">
                                            <span className="medium">{item.name}</span>
                                        </div>
                                    </div>
                                </ReactWOW>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;
