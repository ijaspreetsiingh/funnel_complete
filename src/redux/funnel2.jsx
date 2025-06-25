import { createSlice } from '@reduxjs/toolkit';

// Existing local image imports
import Iphoness from '../assets/img/iphone/iphoness.gif';
import Iphone from '../assets/img/iphone/iphone.png';
import arrow from '../assets/img/arrow/icons8-curly-arrow.gif';
import darkarrow from '../assets/img/arrow/darkarrow.gif';

// Replaced your placeholder image imports with public URLs and SVG data URIs
const groupPhoto = 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const shubhPhoto = 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const day1Icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjUgMTcuMjVWMjFoLTEuNXptLTYtMTMuNUg0LjVWMTguNzVINi41VjUuNWgxNHY5LjJsMS41IDEuNVY0Ljk2YTEgMSAwIDAgMCAuNzItLjM2bDEuMjgtMS4yN2EuNS41IDAgMCAwLS4zNS0uODdoLTE3LjQyYTEgMSAwIDAgMC0uODguMzV6TTYuNSAyMi41aDR2LTQuNzVoLTR6TTE5LjggMjEuMjJsLTMuMjctMy4yN0wxOC4wMiAxNiAyMS4yMiAxOS4zYTEuNiAxLjYgMCAwIDEtMS40NCAxLjl6Ii8+PC9zdmc+';
const day2Icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwIDE5aDR2LTJoLTR2MnpNNiAyMWg0djFIMlY5aDR2MTB6bTEyLTZoM3Y1aC0zdjJIOUgydjFoMTJWMTVoLTJ2LTNoLTFWNmg0VjRoMi41bDEuMjkgMi4xNTEzLjAxIDUuMDUtMi4xNiAyLjEyeiIvPjwvc3ZnPg==';
const day3Icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDMuNUM2LjQ4IDMuNSAyIDcgMiAxMkM0IDcgNi45NSA0LjUgMTIgNC41czggMi41IDEwIDcuNWMtMiA1LjUtNC45NSA4LjUtMTAgOC41UzQgMTcgMiAxMkM0IDE2LjUgNi40OCAyMCAxMiAyMGM1LjUyIDAgMTAtMy41IDEwLTguNXMtNC40OC04LjUtMTAtOC41ek0xMiAxNWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6Ii8+PC9zdmc+';

const initialState = {
    // Top Bar
    topBarText: "🎉 Give Me 3 Days & I'll Show You How To... 🎉",

    // Hero Section
    heroTitle: "Scale your Coaching Business To the <Highlight>5 Lakhs/Month PROFIT</Highlight> Using Army Of <span class=\"ai-agents\">A.I. Agents.</span>",
    heroSubtitle: "... Zero Tech Method & Complete Time Freedom.",
    heroPills: ["✔ NO Sales Calls", "✔ NO Endless Content", "✔ NO Begging In DMs"],
    videoPlaceholder: {
        name: "SHUBH JAIN",
        tagline: "AI AGENTS + REVERSE FUNNEL SYSTEM"
    },
    date:"17th - 129th June",
    time:"7 PM - 9 PM",
    location:"Zoom",
    language:"English",
  
    implementationAgenda: {
        title: "Implementation Agenda:",
        items: [
            "How to Make <strong>10 Lakhs or More in Sales</strong> in ONE Weekend Which Would Otherwise Take You Months to HIT!",
            "How To <strong>SELL Premium Offers Without Sales Calls</strong> & Close Effortlessly In 5 hours/month.",
            "How To Create A Buying Movement That Makes <strong>People Throw Credit Cards</strong> At You To Buy!"
        ]
    },

    // Client Showcase Section
    clientShowcaseTitle: "Some Of Our <UnderlineSpan>Clients...</UnderlineSpan>",
    clientShowcase: [
        { name: 'Istik Nandakumar', position: 'Business Growth Expert', image: 'https://i.pravatar.cc/200?u=istik', following: '44.7K+' },
        { name: 'Ankit Neerav', position: 'Law of Attraction Coach', image: 'https://i.pravatar.cc/200?u=ankit', following: '24.3K+' },
        { name: 'Shankar Kulkarni', position: 'Financial Freedom Coach', image: 'https://i.pravatar.cc/200?u=shankar', following: '9.1K+' },
        { name: 'Priya Sharma', position: 'Life Transformation Coach', image: 'https://i.pravatar.cc/200?u=priya', following: '32.5K+' },
        { name: 'Rahul Mehta', position: 'Mindset & Success Coach', image: 'https://i.pravatar.cc/200?u=rahul', following: '18.9K+' },
        { name: 'Kavita Singh', position: 'Health & Wellness Coach', image: 'https://i.pravatar.cc/200?u=kavita', following: '27.2K+' }
    ],

    // Social Proof Section
    socialProofTitle: "In Just 3 Days... You Can Start Getting <Highlight><UnderlineSpan>Ready To Buy</UnderlineSpan></Highlight> Leads & High Ticket Sales!!",
    socialProofSubtitle: "This is the ultimate black-book of <Highlight>TOP 1% coaches</Highlight> (they won't reveal it to you...)",
    socialProofImages: {
        iphoneGif: Iphoness,
        iphonePng: Iphone,
        lightArrow: arrow,
        darkArrow: darkarrow
    },
    handwrittenAnnotations: {
        top: "And when you start applying these <span class=\"highlight-blue-handwritten\">principles</span>... your inbox could start looking <span class=\"highlight-green-handwritten\">like this</span>.",
        bottom: "Hundreds of sales @ <span class=\"highlight-red-handwritten\">High Ticket</span> Through this <span class=\"highlight-blue-handwritten\">Reverse Funnel</span> in a span of 2 hours -"
    },

    // Reverse Funnel Section
    reverseFunnelTitle: "After 65+ Crores In Sales The Only System You'll <Highlight>Ever Need To Hit 1 CR Rapidly In 2025!</Highlight>",
    reverseFunnelSubtitle: "Reverse Funnel System",

    // Testimonials Section
    testimonialsTitle: "What Our <Highlight><UnderlineSpan>Students Say</UnderlineSpan></Highlight>",
    testimonialfunnel: [
        { picture: "https://randomuser.me/api/portraits/men/32.jpg", text: "This program completely transformed my approach to business. The results speak for themselves!", author: "Rajesh Kumar", company: "CEO, Tech Solutions" },
        { picture: "https://randomuser.me/api/portraits/women/44.jpg", text: "I was skeptical at first, but the strategies are pure gold. My income doubled in 3 months!", author: "Priya Sharma", company: "Founder, Creative Co." },
        { picture: "https://randomuser.me/api/portraits/men/35.jpg", text: "The best investment I've made for my coaching practice. Highly recommended for serious growth.", author: "Amit Singh", company: "Lead Coach, Growth Gurus" },
        { picture: "https://randomuser.me/api/portraits/women/23.jpg", text: "Incredible insights and actionable steps. Shubh's system is a game-changer!", author: "Ananya Reddy", company: "Marketing Head, Innovate Ltd." },
    ],

    // Tsunami Section
    tsunamiTitle: "Get A Tsunami Of Coaching Sales Than What You Could Possibly Handle! (<Highlight>ON AUTOPILOT</Highlight>)",
    tsunamiImage: groupPhoto, // Using public image URL
    tsunamiDescription: [
        "Before I created the Reverse Funnels System, I was tired of doing low attendance webinars & hour-long one-on-one sales calls.",
        "I was stressed, exhausted and frustrated from repeating the same tiring process all over again.",
        "And eventually, <strong>I ended up hating the business I built for freedom.</strong>",
        "So I spent the next 4 years going through every possible big launch, super workshop, live masterclass, 5-day challenge, and 2-3 day immersions.",
        "And, that's how <strong>Reverse Funnels</strong> was born."
    ],
    whatIfCard: {
        title: "What if YOU could just...",
        steps: [
            "Gather a bunch of your ideal clients in ZOOM...",
            "Use The Reverse Selling System That Persuades Buyers...",
            "Then just simply invite them to YOUR offer?"
        ]
    },
    comparisonTable: {
        oldWay: {
            title: "The Old Way",
            subtitle: "(Book A Call Model)",
            items: ["Post 24x7 On Social Media", "Create Endless Free Content", "DM People & Desperately Sell Them", "Follow Up With Them", "Follow Up Again", "Complex Webinars & Funnels", "Get Rejected, Repeat"]
        },
        newWay: {
            title: "The New Way",
            subtitle: "(Reverse Funnels)",
            items: ["Ideal Clients Happily Attend Your Events", "Serve Your Audience", "Invite Them To Work With You (No Sales Calls)", "Build Trust & Authority", "High Converting Sales Process", "6,7,Or 8-Figure Day", "Scalable Business Growth"]
        }
    },

    // Results Driven Agenda Section
    resultsAgendaTitle: "Results Driven Agenda For <Highlight>3-Day High-Ticket Sprint</Highlight>",
    resultdrivenagenda: [
        {
            pic: day1Icon, // Using SVG data URI
            heading: "Day 1: Build Your Irresistible Offer",
            point1: "EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.",
            point2: "An ancient offer creation 'law' that 99.8% people MISS out, which stops them to make more sales.",
            point3: "An old-school offer strategy that crushes Cold Audience and makes it almost neurologically impossible for people to not consider buying your offer.",
            point4: "Once you know this - creating million dollar offers & campaigns will be cake-walk!",
            point5: "And so much more..."
        },
        {
            pic: day2Icon, // Using SVG data URI
            heading: "Day 2: Sell Without Selling",
            point1: "Your 'Reverse-math' to your NEXT 10 lakh payday.",
            point2: "7-Figure Launch Checklist used behind every BIG launch.",
            point3: "How to get your dream high-ticket clients lining up to work with you before you even pitch them.",
            point4: "Battle-tested 5 Hour Engine that makes you the most money and sales in a shorter duration.",
            point5: "The TOP SECRET *** technique to CRUSH your launch the very first time."
        },
        {
            pic: day3Icon, // Using SVG data URI
            heading: "Day 3: Scale to the Moon",
            point1: "My 40 crores 'Signature-Talk' Framework.",
            point2: "This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.",
            point3: "How do I create presentations that are guaranteed to CRUSH.",
            point4: "How to persuade the whole crowd without selling or talking about your product.",
            point5: "The #1 strategy you can use to make any offer SELL AT ANY PRICE."
        },
    ],

    // Pricing Section
    pricingTitle: "YES! Save My Spot For The <Highlight>'High Ticket Sprint!!'</Highlight>",
    pricingTable: [
        { tier: "First 200 Seats", price: "₹99", bonus: "with Bonus Mystery Gifts!!!", isRecommended: true, badge: "Last Few" },
        { tier: "200 - 500 Seats", price: "₹599", bonus: "without Bonus Gifts" },
        { tier: "500 - 1,000 Seats", price: "₹1499", bonus: "without Bonus Gifts" }
    ],
    currentPriceDisplay: {
        text: "Price Today:",
        oldPrice1: "₹1499",
        oldPrice2: "₹999",
        currentPrice: "₹99/-"
    },

    // Who is Shubh Section
    whoIsShubh: {
        title: "Who Is <Highlight>Shubh</Highlight> and Why Should You Care?",
        image: shubhPhoto, // Using public image URL
        points: [
            "Sold Over 40+ Crores In Sales for clients.",
            "TOP Players Trust Us With Their Marketing!",
            "Managed An Email List Of Over 640,000+ Names OVERALL...",
            "Inventor Of The Reverse Funnels",
            "The #1 Launch Expert Of India!"
        ]
    },

    // FAQ Section
    faqTitle: "Frequently Asked <Highlight>Questions</Highlight>",
    testimonialfaqs: [
        { id: 1, question: "Is this workshop beginner-friendly?", answer: "Absolutely! The High-Ticket Sprint is designed for both new and experienced coaches. We cover foundational principles and advanced strategies, ensuring everyone gets immense value." },
        { id: 2, question: "What if I can't attend all 3 days live?", answer: "No problem. All sessions will be recorded and you will get lifetime access to them. You can watch them at your own convenience." },
        { id: 3, question: "Will I get personal support?", answer: "Yes! There will be live Q&A sessions each day where you can ask Shubh your questions directly. You'll also get access to a private community for ongoing support." },
        { id: 4, question: "What kind of results can I expect?", answer: "While results vary, our students have used this system to generate lakhs in a single weekend, quit their 9-5 jobs, and build scalable coaching empires. Your results depend on your implementation." },
        { id: 5, "question": "Is there a money-back guarantee?", "answer": "Due to the extremely low price and the high value of the content provided, we do not offer a refund. We are confident that the value you receive will far exceed your investment." }
    ],

    // Footer
    footerCopyright: `Copyright © ${new Date().getFullYear()} | Launch at scale. All rights reserved.`,
    footerDisclaimer: `This site is not a part of the Meta™ Inc. Additionally, this site is not endorsed by Meta™ in any way. Results may not be guaranteed. Please review our <a href="#" class="footer-link">Privacy Policy</a> and <a href="#" class="footer-link">Terms of Service</a> before proceeding.`
};

export const funnelSlice = createSlice({
    name: 'landingPage',
    initialState,
    reducers: {
        // भविष्य में जरूरत पड़ने पर आप यहां reducers जोड़ सकते हैं
    },
});

export default funnelSlice.reducer;