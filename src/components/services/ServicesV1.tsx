import { Link } from "react-router-dom";
import { useState } from "react";
import ReactWOW from "react-wow";
import { useSelector } from "react-redux"; // Import useSelector

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode
}

const ServicesV1 = ({ sectionClass, hasTitle }: DataType) => {
    // Get training data from Redux store
    const training = useSelector((state) => state.coachProfile.training);

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const imageStyle = {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center' as const
    };

    const textStyle = {
        fontSize: '1.1rem' // Increase text size
    };

    return (
        <>
            <div id="services" className={`services-style-one-area bottom-less ${sectionClass ? sectionClass : ""}`}>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Trainings</h4>
                                    <h2 className="title">This Training Is Perfect For You If:</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    {/* First row - 4 boxes */}
                    <div className="row">
                        {training && training.slice(0, 4).map((item, index) => (
                            <div className={`col-xl-3 col-md-6 mb-30`} key={index}>
                                <ReactWOW animation="fadeInUp">
                                    <div className={`service-style-one-item ${activeIndex === index ? "active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                    >
                                        <div style={imageStyle}>
                                            <img src={item.pic} alt="Image Not Found" />
                                        </div>
                                        <h4><Link to="/services-details"></Link></h4>
                                        <p style={textStyle}>{item.text}</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        ))}
                    </div>
                    
                    {/* Second row - 5th box centered */}
                    {training && training.length > 4 && (
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-30 mx-auto">
                                <ReactWOW animation="fadeInUp">
                                    <div className={`service-style-one-item ${activeIndex === 4 ? "active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(4)}
                                    >
                                        <div style={imageStyle}>
                                            <img src={training[4].pic} alt="Image Not Found" />
                                        </div>
                                        <h4><Link to="/services-details"></Link></h4>
                                        <p style={textStyle}>{training[4].text}</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ServicesV1;
