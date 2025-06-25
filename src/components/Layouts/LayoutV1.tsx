import HeaderV1 from '../header/HeaderV1';
import FooterV1 from '../footer/FooterV1';
import StickyEnrollBar from './enroll.jsx'; // StickyEnrollBar ko import karein
import React from 'react'; // React ko import karein agar pehle se nahi hai

interface LayoutProps {
    children?: React.ReactNode
}

const LayoutV1 = ({ children }: LayoutProps) => {
    // Sticky bar ki height (approximate, CSS ke padding/font-size par depend karega)
    // Aap ise dynamically calculate kar sakte hain ya ek fixed value assume kar sakte hain
    // Example: 60px for desktop, 100px for mobile (jab stacked ho)
    // Yeh value `main-content-pusher` ke padding-bottom ke liye use hogi
    const stickyBarHeightDesktop = "75px"; // Adjust this based on your final CSS
    const stickyBarHeightMobile = "140px"; // Adjust this for stacked mobile view

    return (
        <>
            <HeaderV1 />
            {/* Main content ke neeche padding add karein taki sticky bar content ko na chupaye */}
            <div 
                className="main-content-pusher" 
                style={{ 
                    paddingBottom: `var(--sticky-bar-height, ${stickyBarHeightDesktop})` 
                }}
            >
                {children}
            </div>
            <FooterV1 />
            <StickyEnrollBar /> {/* Sticky bar ko yahan render karein */}
        </>
    );
};

export default LayoutV1;
