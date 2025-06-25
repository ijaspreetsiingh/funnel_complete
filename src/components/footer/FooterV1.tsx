import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// Aap social media icons ke liye koi library jaise Font Awesome use kar sakte hain
// উদাহরণের জন্য, import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterV1 = () => {
    // Get username directly from Redux state
    const username = useSelector((state) => state.coachProfile.username);
    
    // Fallback to 'No Name Found' if username is empty
    const displayName = username || 'No Name Found';
    
    // Social media links (aap inhe props se ya config se bhi la sakte hain)
    const socialLinks = [
        { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' }, // Example Font Awesome class
        { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
        { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
        { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
    ];

    return (
        <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="footer-items text-center">
                            <Link to="/" className="footer-logo">
                                <h2 style={{ 
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    margin: '15px 0',
                                    fontSize: '32px',
                                    textTransform: 'uppercase'
                                }}>
                                    {displayName}
                                </h2>
                            </Link>

               
              
                            {/* Social Media Links */}
                            <div className="social-links" style={{ marginBottom: '30px' }}>
                                {socialLinks.map((link) => (
                                    <a 
                                        key={link.name} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        title={link.name}
                                        style={{
                                            color: '#FFAE00',
                                            margin: '0 12px',
                                            fontSize: '20px',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#FFAE00'}
                                    >
                                        {/* Agar aap Font Awesome ya koi icon library use kar rahe hain: */}
                                        {/* <FontAwesomeIcon icon={['fab', link.icon.split(' ')[1]]} /> */}
                                        {/* Abhi ke liye, hum text istemal kar rahe hain */}
                                        <i className={link.icon} aria-hidden="true"></i> {/* Yeh Font Awesome classes ke liye hai */}
                                        {/* Agar aapke paas icons nahi hain, to aap link.name display kar sakte hain */}
                                        {/* {link.name} */}
                                    </a>
                                ))}
                            </div>

                            <p >Copyright &copy; {new Date().getFullYear()} {displayName}. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Aapko Font Awesome CSS link karna hoga apne public/index.html mein ya project setup mein */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" /> */}
        </footer>
    );
};

export default FooterV1;
