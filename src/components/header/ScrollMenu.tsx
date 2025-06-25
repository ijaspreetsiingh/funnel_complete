import { Link } from 'react-scroll';

interface DataType {
    closeMenu?: () => void;
}

const ScrollMenu: React.FC<DataType> = ({ closeMenu }) => {
    return (
        <>
            <li>
                <Link className="smooth-menu" to="about" offset={-50} onClick={closeMenu}>About US</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="portfolio" offset={-50} onClick={closeMenu}>Gallery</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="video" offset={-50} onClick={closeMenu}>Video's</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="partner" offset={-50} onClick={closeMenu}>Partner</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="testimonal" offset={-50} onClick={closeMenu}>Testimonial</Link>
            </li>
            <li>
                <Link className="smooth-menu" to="contact" offset={-50} onClick={closeMenu}>Contact US</Link>
            </li>
        </>
    );
};

export default ScrollMenu;