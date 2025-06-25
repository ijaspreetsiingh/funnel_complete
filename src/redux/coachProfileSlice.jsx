import { createSlice } from '@reduxjs/toolkit';
import android from "..//assets/img/skills icon/icons8-android.svg"
import figma from "..//assets/img/skills icon/figma (3).svg"
import wordpress from "..//assets/img/skills icon/icons8-wordpress.svg"
import photoshop from "..//assets/img/skills icon/icons8-photoshop.svg"
import ios from "..//assets/img/skills icon/icons8-ios.svg"
import ai from "..//assets/img/skills icon/icons8-ai.svg"
import amazon from "..//assets/img/certification/icons8-amazon.svg"
import flutter from "..//assets/img/certification/icons8-flutter.svg"
import python from "..//assets/img/certification/icons8-python.svg"
import java from "..//assets/img/certification/icons8-java.svg"
import microsoft from "..//assets/img/certification/icons8-microsoft.svg"
import react from "..//assets/img/certification/icons8-react.svg"
import vue from "..//assets/img/certification/icons8-vue-js.svg"
import video from "..//assets/img/certification/sample1.mp4"
import partner1 from "/assets/img/partner/1.png"
import partner2 from "/assets/img/partner/2.png"
import partner3 from "/assets/img/partner/3.png"
import belly from "..//assets/img/blogimage/belly.png"
import kidney from "..//assets/img/blogimage/kidney.png"
import intestine from "..//assets/img/blogimage/intestine.png"
import chart from "..//assets/img/blogimage/chart.png"
import menu from "..//assets/img/blogimage/menu.png"
import Video_main from '..//assets/video/sample1.mp4'
import Jason from '../assets/img/Jason_and_Lucia_02_landscape1.jpg'
import Video_main2 from '..//assets/video/simple2.mp4'
import { json } from 'react-router-dom';
const initialState = {
    theme: 'dark',
    username: '',
    loading: false,
    error: null,
    coach: '123abc',
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '1234567890',
    facebook:'https://facebook.com',
    instagram:'https://instagram.com',

    headline: 'As a dedicated coach, I specialize in guiding individuals toward their personal and professional goals through structured, actionable strategies. I excel at identifying strengths, unlocking potential, and fostering growth with a focus on clarity, accountability, and transformation. My passion lies in turning challenges into opportunities and helping clients achieve meaningful, lasting results in their lives and careers.',
    bio: ' As a skilled web developer, I specialize in creating responsive,user-friendly websites with a focus on modern design and efficient code.I excel in front-end development, with a deep understanding of HTML, CSS, JavaScript,  and various frameworks. My passion is turning ideas into functional and aesthetically pleasing digital experiences.',
    specializations: [
        {name: 'Strength Training' },
        {name: 'Training' },
        {name: 'Strength Training'},
        {name: 'Training'},  
        {name: 'Strength Training'},
        {name: 'Training'}
    ],
    experienceYears: 10,
    totalProjectsCompleted: 150,
    image0:["https://antux-react.vercel.app/assets/img/about/1.jpg"],
    image1:["https://antux-react.vercel.app/assets/img/about/1.jpg"],
    image2:["https://antux-react.vercel.app/assets/img/about/2.jpg"],
    gallery: ['https://antux-react.vercel.app/assets/img/about/1.jpg' , 'https://antux-react.vercel.app/assets/img/about/2.jpg',"https://antux-react.vercel.app/assets/img/projects/1.jpg",
        "https://antux-react.vercel.app/assets/img/projects/2.jpg" ,"https://antux-react.vercel.app/assets/img/projects/3.jpg" ,"https://antux-react.vercel.app/assets/img/projects/6.jpg",
        "https://antux-react.vercel.app/assets/img/projects/5.jpg","https://antux-react.vercel.app/assets/img/projects/4.jpg"
    ],
    testimonials: [
        { text: 'Amazing coach! Thanks to your web agency team for their professional work. Thewebsite they created for my business exceeded my expectations, and my clients hav', image: 'https://antux-react.vercel.app/assets/img/illustration/1.png', name : 'John Doe' },
        { text: 'Life changing! Amazing coach! Thanks to your web agency team for their professional work. Thewebsite they created for my business exceeded my expectations, and my clients hav', image: 'https://antux-react.vercel.app/assets/img/illustration/1.png', name: 'Second Doe' },
        { text: 'Highly recommend! Amazing coach! Thanks to your web agency team for their professional work. Thewebsite they created for my business exceeded my expectations, and my clients hav', image: 'https://antux-react.vercel.app/assets/img/illustration/1.png' ,name : 'Third Apperance' },
    ],
    Partner_logo:[partner1,partner2,partner3,partner1,partner2,partner3],
    logo_image: [
        {name:'android', image:android},
        {name:'figma', image:figma},
        {name:'wordpress', image:wordpress},
        {name:'photoshop', image:photoshop},
        {name:'ios', image:ios},
        {name:'ai', image:ai},
    ],
    certificationIcons : [
        { name: "amazon", icon: amazon },
        { name: "flutter", icon: flutter },
        { name: "python", icon: python },
        { name: "java", icon: java },
        { name: "microsoft", icon: microsoft },
        { name: "react", icon: react },
        { name: "vue", icon: vue }
    ],

    videoEmbedUrls: [
        {yturl: '<iframe width="1905" height="837" src="https://www.youtube.com/embed/FEpK8l1hJdA?list=RDMMFEpK8l1hJdA" title="Zehr Vibe x Intense - One Wish (Official Visualizer) - 1:11 EP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
        {yturl: '<iframe width="1905" height="748" src="https://www.youtube.com/embed/WZjqblzUIXE" title="Gminxr, Tegi Pannu &amp; Zehr Vibe - WEEKEND (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'}
    ],
    customvideo:[
        {video: video},
    ],

    training:[
        {pic: belly, text : "You want to lose weight without damaging your metabolism"},
        {pic: kidney, text : "You're managing a health condition like PCOS, thyroid issues, or diabetes"},
        {pic: intestine, text : "You struggle with digestive problems or hormonal imbalances"},
        {pic: chart, text : "You're tired of contradictory nutrition advice and want clear, practical guidance"},
    ],
    
    faqs: [
        {
            id: 1,
            question: "11Can I see your coaching success stories?",
            answer: "Yes! I have helped numerous clients achieve their fitness goals. You can view testimonials and before/after photos in my portfolio section.",
        },
        {
            id: 2,
            question: "What are your nutrition coaching rates?",
            answer: "My coaching programs start at $99/month for basic nutrition plans. Customized programs with weekly check-ins start at $199/month. I offer discounts for 3-month commitments.",
        },
        {
            id: 3,
            question: "How do you communicate with clients?",
            answer: "I use a combination of WhatsApp for quick check-ins, weekly Zoom calls for deep dives, and a custom app for meal tracking and progress monitoring.",
        },
        {
            id: 4,
            question: "Do you offer customized workout plans?",
            answer: "Absolutely! After assessing your fitness level and goals, I create personalized workout routines that fit your schedule and available equipment.",
        }
    ],

    testimonialfaqs: [
        {
            id: 1,
            question: "Can I see your coaching success stories?",
            answer: "Yes! I have helped numerous clients achieve their fitness goals. You can view testimonials and before/after photos in my portfolio section.",
        },
        {
            id: 2,
            question: "What are your nutrition coaching rates?",
            answer: "My coaching programs start at $99/month for basic nutrition plans. Customized programs with weekly check-ins start at $199/month. I offer discounts for 3-month commitments.",
        },
        {
            id: 3,
            question: "How do you communicate with clients?",
            answer: "I use a combination of WhatsApp for quick check-ins, weekly Zoom calls for deep dives, and a custom app for meal tracking and progress monitoring.",
        },
        {
            id: 4,
            question: "Do you offer customized workout plans?",
            answer: "Absolutely! After assessing your fitness level and goals, I create personalized workout routines that fit your schedule and available equipment.",
        }
    ],

    clientShowcase: [
        {
            name: 'Istik Nandakumar',
            position: 'Business and business growth expert',
            following: '44.7K+',
            image: 'https://antux-react.vercel.app/assets/img/illustration/1.png'
        },
        {
            name: 'Ankit Neerav',
            position: 'Law of Attraction Coach',
            following: '24.3K+',
            image: 'https://antux-react.vercel.app/assets/img/about/1.jpg'
        },
        {
            name: 'Shankar Kulkarni',
            position: 'Financial Freedom & Confidence Coach',
            following: '9.1K+',
            image: 'https://antux-react.vercel.app/assets/img/about/2.jpg'
        },
        {
            name: 'Priya Sharma',
            position: 'Life Transformation Coach',
            following: '32.5K+',
            image: 'https://antux-react.vercel.app/assets/img/projects/1.jpg'
        },
        {
            name: 'Rahul Mehta',
            position: 'Mindset & Success Coach',
            following: '18.9K+',
            image: 'https://antux-react.vercel.app/assets/img/projects/2.jpg'
        },
        {
            name: 'Kavita Singh',
            position: 'Health & Wellness Coach',
            following: '27.2K+',
            image: 'https://antux-react.vercel.app/assets/img/projects/3.jpg'
        }
    ],

    resultdrivenagenda:[
        {
            pic: vue, 
            heading: "Build",
            point1: "EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.",
            point2: "An ancient offer creation 'law' that 99.8% people MISS out, which stops them to make more sales.",
            point3: "An old-school offer strategy that crushes Cold Audience and makes it almost neurologically impossible for people to not consider buying your offer.",
            point4: "Once you know this - creating million dollar offers & campaigns will be cake-walk!",
            point5: "And so much more..."
        },
        {
            pic: python, 
            heading: "Sell",
            point1: "Your 'Reverse-math' to your NEXT 10 lakh payday.",
            point2: "7-Figure Launch Checklist used behind every BIG launch.",
            point3: "How to get your dream high-ticket clients lining up to work with you before you even pitch them.",
            point4: "Battle-tested 5 Hour Engine that makes you the most money and sales in a shorter duration.",
            point5: "The TOP SECRET *** technique to CRUSH your launch the very first time."
        },
        {
            pic: microsoft, 
            heading: "Scale",
            point1: "My 40 crores 'Signature-Talk' Framework.",
            point2: "This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.",
            point3: "How do I create presentations that are guaranteed to CRUSH.",
            point4: "How to persuade the whole crowd without selling or talking about your product.",
            point5: "The #1 strategy you can use to make any offer SELL AT ANY PRICE."
        },
    ],



    video_main:[Video_main],

    // ========== LANDING PAGE SPECIFIC FIELDS ==========
    // Top Bar
       heroBgFunnel2:[
        {source: ""}
    ],
    topBarText: "🔥 Limited Time Offer - Scale Your Coaching Business To 5 Lakhs/Month!",
    testimonialfunnel:[
        {picture: microsoft, text: "hey whats up", author: "Test Author 1", company: "Test Company 1"},
        {picture: react, text: "hey whats up2", author: "Test Author 2", company: "Test Company 2"},
        {picture: vue, text: "hey whats up3", author: "Test Author 3", company: "Test Company 3"},
    ],

    // Hero Section
    heroTitle: "Scale your Coaching Business To the <span class='highlight'>5 Lakhs/Month PROFIT</span> Using Army Of <span class='ai-agents'>A.I. Agents</span>",
    heroSubtitle: "Zero Tech Method & Complete Time Freedom.",
    heroPills: ["NO Sales Calls", "NO Endless Content", "NO Begging in DMs"],
    
    // Video Section
    videoPlaceholder: {
        name: "SHUBH JAIN",
        tagline: "From Employee to 40 CR+ Empire Builder",
        videoblock: Video_main,
    },
    
    // Implementation Agenda
    implementationAgenda: {
        title: "Implementation Agenda:",
        items: [
            "How to Make 10 Lakhs or More in Sales in One Weekend Which Would Otherwise Take You Months to Hit!",
            "How To SELL Premium Offers Without Sales Calls & Close Effortlessly in 5 hours/month.",
            "How To Create a Buying Movement That Makes People Throw Credit Cards At You To Buy!"
        ]
    },
    
    // Client Showcase
    clientShowcaseTitle: "Success Stories from My <span class='highlight'>Coaching Community</span>",
    
    // Social Proof Section
    socialProofTitle: "Real Results from <span class='highlight'>Real People</span>",
    socialProofSubtitle: "See the transformation happening every single day in our community",
    socialProofImages: {
        iphoneGif: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        iphonePng: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        darkArrow: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        lightArrow: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    handwrittenAnnotations: {
        top: "Look at these <span class='highlight-red-handwritten'>REAL results</span> from my students!",
        bottom: "This could be <span class='highlight-blue-handwritten'>YOUR success story</span> next!"
    },
    
    // Reverse Funnel Section
    reverseFunnelTitle: "The 5-Step <span class='highlight'>Success Blueprint</span>",
    reverseFunnelSubtitle: "Follow this exact process that helped 10,000+ people transform their lives",
    
    // Testimonials
    testimonialsTitle: "What My <span class='highlight'>Students Say</span>",
    
    // Tsunami Section
    tsunamiTitle: "Join The Success <span class='highlight'>Revolution</span>",
    tsunamiImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tsunamiDescription: [
        "Over <strong>10,000+ students</strong> have transformed their lives using my proven methods and strategies.",
        "This isn't just another course - it's a <strong>complete life transformation system</strong> that works.",
        "Join the community of successful individuals who took action and changed their destiny forever."
    ],
    
    // What If Card
    whatIfCard: {
        title: "What if you could transform your life in just 90 days?",
        steps: [
            "Master the mindset of highly successful people",
            "Build your high-value offer that clients desperately want",
            "Create your signature system that scales automatically",
            "Generate consistent 6-figure income doing what you love"
        ]
    },
    
    // Comparison Table
    comparisonTable: {
        oldWay: {
            title: "The Old Way",
            subtitle: "Struggling alone without guidance",
            items: [
                "Trial and error approach wasting precious time",
                "No clear direction or proven roadmap to follow",
                "Inconsistent results that frustrate and demotivate",
                "Wasted money on courses that don't deliver results"
            ]
        },
        newWay: {
            title: "The New Way",
            subtitle: "With my proven system and guidance",
            items: [
                "Proven step-by-step system that guarantees results",
                "Clear roadmap to success with exact action steps",
                "Consistent, predictable results within 90 days",
                "Investment that pays for itself within first month"
            ]
        }
    },
    
    // Results Agenda
    resultsAgendaTitle: "Your 3-Day <span class='highlight'>Transformation Journey</span>",
    
    // Pricing Section
    pricingTitle: "Choose Your <span class='highlight'>Success Package</span>",
    pricingTable: [
        {
            tier: "Regular Price",
            price: "₹2,999",
            bonus: "Basic Package Only",
            isRecommended: false
        },
        {
            tier: "Early Bird Special",
            price: "₹99",
            bonus: "+ ₹25,000 Worth of Exclusive Bonuses",
            isRecommended: true,
            badge: "ONLY 100 SEATS"
        },
        {
            tier: "Last Minute",
            price: "₹999",
            bonus: "Standard Package",
            isRecommended: false
        }
    ],
    
    currentPriceDisplay: {
        text: "Today Only Special Price:",
        oldPrice1: "₹2,999",
        oldPrice2: "₹999",
        currentPrice: "₹99"
    },
    
    // Who Is Shubh Section
    whoIsShubh: {
        title: "Meet Your <span class='highlight'>Success Mentor</span>",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        points: [
            "Built a ₹40+ crore coaching business from scratch",
            "Mentored 10,000+ students to achieve their dreams",
            "Featured in top business magazines and TV shows",
            "Certified master coach with 15+ years experience",
            "Author of 3 bestselling books on success and mindset",
            "Speaker at 100+ international conferences and events"
        ]
    },
    
    // FAQ Section
    faqTitle: "Frequently Asked <span class='highlight'>Questions</span>",
    
    // Footer
    footerCopyright: "© 2024 Success Academy. All rights reserved.",
    footerDisclaimer: "Results shown are not typical and may vary. Success requires dedication, hard work, and consistent action. This is an educational program and individual results depend on individual effort and circumstances.",
    
    // Event Details
    date: "June 28th - 30th",
    time: "7 PM - 9 PM",
    location: "Zoom",
    language: "English"
};

const coachProfileSlice = createSlice({
    name: 'coachProfile',
    initialState,
    reducers: {
        setCoachProfile: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        addToArrayField: (state, action) => {
            const { field, value } = action.payload;
            if (Array.isArray(state[field])) {
                state[field].push(value);
            }
        },
        removeFromArrayField: (state, action) => {
            const { field, index } = action.payload;
            if (Array.isArray(state[field])) {
                state[field].splice(index, 1);
            }
        },
        resetCoachProfile: () => initialState
    },
});

export const {
    setCoachProfile,
    updateField,
    addToArrayField,
    removeFromArrayField,
    resetCoachProfile
} = coachProfileSlice.actions;

export default coachProfileSlice.reducer;
