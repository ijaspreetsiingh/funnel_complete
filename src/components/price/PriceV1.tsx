import ReactWOW from "react-wow";
import { useSelector } from 'react-redux';

const PartnerV1 = () => {
    const partnerLogos = useSelector((state) => state.coachProfile.Partner_logo);

    if (!partnerLogos || partnerLogos.length === 0) {
        return null;
    }

    // Split logos into chunks of 4 for each row
    const chunkSize = 4;
    const logoRows = [];
    for (let i = 0; i < partnerLogos.length; i += chunkSize) {
        logoRows.push(partnerLogos.slice(i, i + chunkSize));
    }

    return (
        <div id="partner" className="-area text-center default-padding bottom-less overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Partner</h4>
                            <h2 className="title">With The World Premier 80+ Brands</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-full">
                <div className="row">
                    <div className="col-lg-12">
                        {logoRows.map((rowLogos, rowIndex) => (
                            <div key={rowIndex} className="partner-style-one-items">
                                {rowLogos.map((logo, logoIndex) => (
                                    <ReactWOW key={logoIndex} animation="fadeInLeft">
                                        <div className="partner-style-one-item">
                                            <img src={logo} alt={`Partner Logo ${rowIndex * chunkSize + logoIndex + 1}`} />
                                        </div>
                                    </ReactWOW>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerV1;