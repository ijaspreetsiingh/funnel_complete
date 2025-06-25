// import FooterV1 from '../footer/FooterV1';
// import HeaderV2 from '../header/HeaderV2';
// import BreadCrumb from '../breadCrumb/BreadCrumb';

// interface LayoutProps {
//     children?: React.ReactNode;
//     breadCrumb?: string;
//     title?: string;
// }

// const LayoutV2 = ({ children, breadCrumb, title }: LayoutProps) => {
//     return (
//         <>
//             <HeaderV2 />
//             {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
//             {children}
//             <FooterV1 />
//         </>
//     );
// };

import FooterV1 from '../footer/FooterV1';
import HeaderV2 from '../header/HeaderV2';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import StickyEnrollBar from './enroll';
import React from 'react';
import { useSelector } from 'react-redux';

interface LayoutProps {
    children?: React.ReactNode;
    breadCrumb?: string;
    title?: string;
}

interface RootState {
    coachProfile: {
        theme: string;
    };
}

const LayoutV2 = ({ children, breadCrumb, title }: LayoutProps) => {
    const theme = useSelector((state: RootState) => state.coachProfile.theme || 'light');
    
    return (
        <>
            <HeaderV2 />
            <div className="main-content-pusher">
                {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
                {children}
            </div>
            <FooterV1 />
            <StickyEnrollBar theme={theme} />
        </>
    );
};

export default LayoutV2;