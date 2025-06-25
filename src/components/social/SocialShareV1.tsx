import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


  
const SocialShareV1 = () => {
        const facebook = useSelector((state) => state.coachProfile.facebook);
          const instagram = useSelector((state) => state.coachProfile.instagram);
    return (
        <>
            <li>
                <Link to={facebook} target='_blank'>
                    <i className="fab fa-facebook" />
                </Link>
            </li>
            <li>
                <Link to={instagram} target='_blank'>
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link to="https://dribbble.com" target='_blank'>
                    <i className="fab fa-dribbble" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV1;