import { Link } from "react-router-dom";

const PromoV1 = () => {
    return (
        <>
            <div className="promot-box-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="promo-box-items text-center">
                                <h2>{`Hello👋i'm available to assist you`}</h2>
                                <h4>For quick response: <a href="skype:example123?chat"><i className="fab fa-skype" /> Chat
                                    now</a></h4>
                                <div className="button mt-40">
                                    <Link className="btn-style-regular" to="/contact"><span>Contact Us </span> <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoV1;