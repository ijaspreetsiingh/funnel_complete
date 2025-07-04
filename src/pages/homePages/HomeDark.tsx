import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../redux/coachProfileSlice';

import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV1 from "../../components/blog/BlogV1";
import ContactV1 from "../../components/contact/ContactV1";
import FactV1 from "../../components/fact/FactV1";
import FaqV1 from "../../components/faq/FaqV1";
import FaqV2 from "../../components/faq/FaqV2";
import LayoutV1 from "../../components/Layouts/LayoutV1";
import LayoutV3 from "../../components/Layouts/LayoutV3";
import PartnerV1 from "../../components/partner/PartnerV1";
import PartnerV2 from "../../components/partner/PartnerV2";
import PortfolioV1 from "../../components/portfolio/PortfolioV1";
import PriceV1 from "../../components/price/PriceV1";
import PromoV1 from "../../components/promo/PromoV1";
import ResumeV1 from "../../components/resume/ResumeV1";
import ServicesV1 from "../../components/services/ServicesV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import BodyDark from "../../components/classes/BodyDark";
import { useParams } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const globalTheme = useSelector((state) => state.coachProfile.theme);
    const location = useLocation();
    const [theme, setTheme] = useState(globalTheme); // local state
    const { username } = useParams();
    // ⬇️ Sync URL params to Redux
useEffect(() => {
    if (username) {
        dispatch(updateField({ field: 'username', value: username }));
    }
}, [username, dispatch]);


    // ⬇️ Sync Redux to local state
    useEffect(() => {
        setTheme(globalTheme);
    }, [globalTheme]);

    const isDark = theme === 'dark';

    return (
        <>
            {theme === 'light' ? (
                <LayoutV1 currentTheme={theme}>
                    <BannerV1 />
                    <AboutV1 />
                    <ServicesV1 sectionClass="default-padding" hasTitle={true} />
                    <PortfolioV1 sectionClass="bg-gray default-padding" hasTitle={true} />
                    {/* <FactV1 /> */}
                    {/* <ResumeV1 sectionClass="bg-gray default-padding" /> */}
                    <PartnerV1 />
                   
                    <PriceV1 sectionClass="default-padding bg-light" hasTitle={true} />
                     <TestimonialV1 sectionClass="bg-gray" />
                    <FaqV1 />
                    {/* <ContactV1 sectionClass="bg-gray default-padding" /> */}
                    {/* <BlogV1 /> */}
                    <PromoV1 />
                </LayoutV1>
            ) : (
                <LayoutV3 currentTheme={theme}>
                    <BannerV1 />
                    <AboutV1 />
                    <ServicesV1 sectionClass="default-padding" hasTitle={true} />
                    <PortfolioV1 sectionClass="bg-gray default-padding" hasTitle={true} />
                    <FactV1 />
                    {/* <ResumeV1 sectionClass="bg-gray default-padding" /> */}
                    <PartnerV2 />
                  
                    <PriceV1 sectionClass="default-padding bg-light" hasTitle={true} />
                      <TestimonialV1 sectionClass="bg-gray" />
                    <FaqV2 />
                    {/* <ContactV1 sectionClass="bg-gray default-padding" /> */}
                    {/* <BlogV1 /> */}
                    <PromoV1 />
                    {isDark && <BodyDark />}
                </LayoutV3>
            )}
        </>
    );
};

export default Home;
