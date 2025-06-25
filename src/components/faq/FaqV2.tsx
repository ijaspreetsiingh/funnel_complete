import { useSelector } from 'react-redux';

const FaqV2 = () => {
    const faqs = useSelector((state) => state.coachProfile.faqs);
    const theme = useSelector((state) => state.coachProfile.theme);

    return (
        <>
            <div className={`faq-style-one-area default-padding ${theme === 'dark' ? 'dark-theme' : ''}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="faq-style-one-items">
                                <h4 className="sub-title">FAQ</h4>
                                <h2>Frequently Asked Questions</h2>
                                <div className="accordion mt-30" id="faqAccordion">
                                    {faqs.map((faq, index) => (
                                        <div className="accordion-item accordion-style-one" key={faq.id}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                    {faq.image && (
                                                        <img
                                                            src={faq.image}
                                                            alt="FAQ Visual"
                                                            className="img-fluid mt-3"
                                                            style={{ maxHeight: '200px' }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV2;
