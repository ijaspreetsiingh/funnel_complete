// import FooterV1 from '../footer/FooterV1';
// import HeaderV3 from '../header/HeaderV3';

// interface LayoutProps {
//     children?: React.ReactNode
// }

// const LayoutV3 = ({ children }: LayoutProps) => {
//     return (
//         <>
//             <HeaderV3 />
//             {children}
//             <FooterV1 />
//         </>
//     );
// };

// export default LayoutV3;
import FooterV1 from '../footer/FooterV1';
import HeaderV3 from '../header/HeaderV3';
import StickyEnrollBar from './enroll';
import React from 'react';
import { useSelector } from 'react-redux';

interface LayoutProps {
    children?: React.ReactNode;
}

interface RootState {
    coachProfile: {
        theme: string;
    };
}

const LayoutV3 = ({ children }: LayoutProps) => {
    const theme = useSelector((state: RootState) => state.coachProfile.theme || 'light');
    
    return (
        <>
            <HeaderV3 />
            <div className="main-content-pusher">
                {children}
            </div>
            <FooterV1 />
            <StickyEnrollBar theme={theme} />
        </>
    );
};

export default LayoutV3;