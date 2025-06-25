import React, { useState, useRef, useEffect } from 'react';
import './funnel3.css';
import {
  FaCheckCircle, FaTimesCircle, FaFire, FaCog, FaMobileAlt,
  FaAward, FaUsers, FaStar, FaLightbulb, FaYoutube,
  FaClock, FaCalendarAlt, FaGlobe, FaVideo, FaCheck,  // Added FaCheck here
  FaExclamationTriangle, FaHeart, FaGem, FaGift,
  FaLock,
  FaAngleLeft,
  FaAngleRight,
  FaQuestionCircle,
  FaAngleDown,
  FaUserCircle,
  FaSun, FaMoon
} from 'react-icons/fa';

import lightmode from '../assets/img/lightdarkicon/icons8-light-mode-78.png';
import darkmode from '../assets/img/lightdarkicon/icons8-dark-mode-50.png';



interface FAQItemData {
  question: string;
  answer: string;
}

const faqsData: FAQItemData[] = [
  {
    question: "Do I need to be tech-savvy?",
    answer: "No, absolutely not! This workshop is designed for coaches of all tech levels. We'll show you how to build your system live, step-by-step, with no prior tech or funnel knowledge required."
  },
  {
    question: "Is this workshop really free?",
    answer: "Yes, it's 100% free. We believe in providing immense value upfront to help coaches succeed. Our goal is to demonstrate the power of our methods, hoping you'll consider our advanced programs in the future if you find this workshop beneficial."
  },
  {
    question: "What if I miss the live session?",
    answer: "We highly recommend attending live to get the most out of the interactive sessions, Q&A, and exclusive live bonuses. However, a replay might be available for a limited time for registered participants. Details will be shared during the workshop."
  },
  {
    question: "How long is the workshop?",
    answer: "The workshop is scheduled for 2 hours. We'll cover all the core concepts and practical steps within this timeframe, plus a Q&A session."
  },
  {
    question: "What results can I expect?",
    answer: "By implementing the strategies from this workshop, you can expect to generate more qualified leads, understand how to automate parts of your sales process, and build a stronger brand presence online, ultimately leading to more clients and business growth."
  }
];

interface CoachTestimonial {
  name: string;
  role: string;
  quote: string;
  avatarPlaceholder?: boolean;
}

const coachTestimonialsData: CoachTestimonial[] = [
  { name: "Aarti Mehra", role: "Nutrition Coach", quote: "I was stuck for 8 months with no clients. After this workshop, I got 37 leads in 3 days!", avatarPlaceholder: true },
  { name: "Rohan Kapoor", role: "Holistic Trainer", quote: "Finally understood how to position and sell my offer without being salesy.", avatarPlaceholder: true },
  { name: "Priya Singh", role: "Wellness Advisor", quote: "The strategies are practical and easy to implement. Highly recommend!", avatarPlaceholder: true },
  { name: "Amit Dave", role: "Fitness Expert", quote: "My client base doubled in just a month after applying these techniques!", avatarPlaceholder: true },
  { name: "Sunita Roy", role: "Yoga Instructor", quote: "I now have a clear path to getting clients online. Thank you!", avatarPlaceholder: true },
];

// Enhanced Intersection Observer Hook with multiple animation types
const useScrollAnimation = (animationType: string = 'fade-in', threshold: number = 0.1, rootMargin: string = '50px') => {
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.classList.add('fn3-animate-in');
        element.classList.add(`fn3-${animationType}`);
      }
    }, { threshold, rootMargin });

    const currentRef = nodeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationType, threshold, rootMargin]);

  return [nodeRef] as const;
};

// Enhanced Stagger Animation Hook with direction support
const useStaggerAnimation = (delay: number = 0.1, direction: 'up' | 'left' | 'right' = 'up') => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            (child as HTMLElement).classList.add('fn3-animate-in');
            (child as HTMLElement).classList.add(`fn3-slide-${direction}`);
          }, index * delay * 1000);
        });
      }
    }, { threshold: 0.1 });

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, direction]);

  return [containerRef] as const;
};

// Enhanced Animated Section Component
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  animationType?: string;
  delay?: number;
  threshold?: number;
}> = ({ 
  children, 
  className, 
  as = 'section', 
  animationType = 'fade-in',
  delay = 0,
  threshold = 0.1
}) => {
  const [ref] = useScrollAnimation(animationType, threshold);
  const Tag = as;
  
  return (
    <Tag 
      ref={ref} 
      className={`fn3-animate-element ${className || ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};

// Enhanced Staggered Animation Component
const StaggeredContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}> = ({ children, className, delay = 0.1, direction = 'up' }) => {
  const [ref] = useStaggerAnimation(delay, direction);
  
  return (
    <div ref={ref} className={`fn3-stagger-container ${className || ''}`}>
      {children}
    </div>
  );
};

const ThemeToggleButton: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [ref] = useScrollAnimation('slide-right');
  
  return (
    <button 
      ref={ref}
      onClick={toggleTheme} 
      className="fn3-theme-toggle-button fn3-animate-element" 
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <img src={lightmode} alt="Light Mode" className="fn3-theme-icon" />
      ) : (
        <img src={darkmode} alt="Dark Mode" className="fn3-theme-icon" />
      )}
    </button>
  );
};

const GoogleTranslateButton = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const languages = [
        { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' },
        { code: 'zh-CN', name: 'Chinese' }, { code: 'fr', name: 'French' },
        { code: 'ar', name: 'Arabic' }, { code: 'ru', name: 'Russian' },
        { code: 'pt', name: 'Portuguese' }, { code: 'de', name: 'German' },
        { code: 'ja', name: 'Japanese' }, { code: 'ko', name: 'Korean' },
        { code: 'it', name: 'Italian' }, { code: 'hi', name: 'Hindi' }
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, buttonRef]);

    useEffect(() => {
        const scriptId = 'google-translate-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;

        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,zh-CN,fr,ar,ru,pt,de,ja,ko,it,hi',
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
            }, 'google_translate_element');
        };
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }
            delete (window as any).googleTranslateElementInit;
            const gtWidget = document.getElementById('google_translate_element');
            if (gtWidget) gtWidget.innerHTML = '';
            const googTopFrame = document.querySelector('.goog-te-menu-frame');
            googTopFrame?.remove();
            document.body.classList.remove('goog-te-banner-frame-show');
        };
    }, []);

    const changeLanguage = (languageCode: string) => {
        setSelectedLanguage(languageCode);
        setShowDropdown(false);
        const googleTranslateElement = (window as any).google?.translate?.TranslateElement;
        if (googleTranslateElement) {
            const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (selectElement) {
                selectElement.value = languageCode;
                selectElement.dispatchEvent(new Event('change'));
            } else {
                setCookieAndReload(languageCode);
            }
        } else {
            setCookieAndReload(languageCode);
        }
    };

    const setCookieAndReload = (languageCode: string) => {
        const cookieName = 'googtrans';
        const cookieValue = `/en/${languageCode}`;
        document.cookie = `${cookieName}=${cookieValue}; path=/; SameSite=Lax`;
        const domain = window.location.hostname;
        document.cookie = `${cookieName}=${cookieValue}; path=/; domain=${domain}; SameSite=Lax`;
        document.cookie = `${cookieName}=${cookieValue}; path=/; domain=.${domain}; SameSite=Lax`;
        window.location.reload();
    }

    return (
        <div className="fn3-translate-container">
            <button ref={buttonRef} className="fn3-translate-button" onClick={() => setShowDropdown(!showDropdown)}>
                <FaGlobe className="fn3-translate-icon" /> Translate
            </button>
            {showDropdown && (
                <div ref={dropdownRef} className="fn3-language-dropdown">
                    {languages.map((lang) => (
                        <div key={lang.code} className="fn3-language-option" onClick={() => changeLanguage(lang.code)}>
                            <span>{lang.name}</span>
                            {selectedLanguage === lang.code && <FaCheck className="fn3-language-check-icon" />}
                        </div>
                    ))}
                </div>
            )}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </div>
    );
};

const StickyRegisterBar: React.FC<{ theme: string }> = ({ theme }) => {

  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [ref] = useScrollAnimation('slide-up');

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs} Mins`;
  };

  return (
    <div ref={ref} className={`fn3-sticky-register-bar fn3-animate-element`}>
      <div className="fn3-sticky-timer-section">
        <span className="fn3-sticky-offer-ends">Offer Ends in</span><br />
        <span className="fn3-sticky-countdown">{timeLeft > 0 ? formatTime(timeLeft) : "0:00 Mins"}</span>
      </div>
      <div className="fn3-sticky-logo-section">
        <FaGem className="fn3-sticky-logo-icon" />
        <span className="fn3-sticky-logo-text">Kohinoor</span>
      </div>
      <button
        className="fn3-sticky-register-now-button"
        onClick={() => console.log("Sticky Register clicked!")}
      >
        Register Now
      </button>
    </div>
  );
};


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [ref] = useScrollAnimation('fade-in-up');
  
  return (
    <footer ref={ref} className="fn3-footer fn3-animate-element">
      <div className="fn3-footer-content">
        <p>
          &copy; {currentYear} Chirag Chhabra Coaching. All Rights Reserved.
        </p>
        <p>
          Empowering Health & Wellness Coaches to Achieve Excellence and Automation.
        </p>
      </div>
    </footer>
  );
};



const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  
  const [currentCoachSlide, setCurrentCoachSlide] = useState(0);
  const [coachItemsPerSlide, setCoachItemsPerSlide] = useState(2);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');


  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.fn3-parallax');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
        const transform = `translateY(${scrolled * speed}px)`;
        (element as HTMLElement).style.transform = transform;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add different animation classes based on element type
          if (element.classList.contains('fn3-counter')) {
            animateCounter(element);
          }
          
          if (element.classList.contains('fn3-progress-bar')) {
            animateProgressBar(element);
          }
          
          if (element.classList.contains('fn3-typewriter')) {
            animateTypewriter(element);
          }
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fn3-counter, .fn3-progress-bar, .fn3-typewriter').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const animateCounter = (element: HTMLElement) => {
    const target = parseInt(element.dataset.target || '0');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toString();
      }
    };
    
    updateCounter();
  };

  const animateProgressBar = (element: HTMLElement) => {
    const progress = element.querySelector('.fn3-progress-fill') as HTMLElement;
    const targetWidth = element.dataset.progress || '0%';
    
    if (progress) {
      progress.style.width = targetWidth;
    }
  };

  const animateTypewriter = (element: HTMLElement) => {
    const text = element.dataset.text || element.textContent || '';
    element.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  };

useEffect(() => {
  // Apply theme class to body
  document.body.className = `theme-${theme}`;
}, [theme]);



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCoachItemsPerSlide(1);
      } else {
        setCoachItemsPerSlide(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselContainerRef.current) {
      const scrollAmount = carouselContainerRef.current.clientWidth * 0.8;
      carouselContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const placeholderImg = (width: number, height: number, text: string) => 
    `https://placehold.co/${width}x${height}/${theme === 'light' ? 'E0E0E0/777777' : '444444/AAAAAA'}?text=${encodeURIComponent(text)}`;

  const totalCoachSlides = Math.ceil(coachTestimonialsData.length / coachItemsPerSlide);
  const displayedCoachTestimonials = coachTestimonialsData.slice(
    currentCoachSlide * coachItemsPerSlide,
    (currentCoachSlide + 1) * coachItemsPerSlide
  );

  const handleCoachDotClick = (index: number) => {
    setCurrentCoachSlide(index);
  };

  return (
 <div className="fn3-page-container">
      <div className="fn3-theme-controls">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        <GoogleTranslateButton />
      </div>

      
      <AnimatedSection as="header" className="fn3-top-banner" animationType="slide-down">
        <p className="fn3-banner-text">Leads and Sales Automation Workshop</p>
      </AnimatedSection>

      <main className="fn3-main-content">
        <AnimatedSection className="fn3-heading-section" animationType="fade-in-up" delay={0.2}>
          <p className="fn3-sub-heading">Unblock: 3-Hour LIVE webinar Uncovers...</p>
          <h1 className="fn3-main-title" data-text="Build a 6-Figure Health & Wellness Coaching Business Using AI – Without Offline Meetings">
            Build a 6-Figure Health & Wellness Coaching Business Using AI – Without Offline Meetings
          </h1>
        </AnimatedSection>

        <AnimatedSection className="fn3-two-column-layout" animationType="slide-in-parallel">
          <div className="fn3-left-column">
            <AnimatedSection className="fn3-speaker-award-image-container" animationType="slide-left" delay={0.3}>
              <img src={placeholderImg(600, 400, 'Speaker Award')} alt="Chirag Chhabra receiving award" className="fn3-speaker-award-image" />
            </AnimatedSection>
            
            <AnimatedSection className="fn3-speaker-info-card" animationType="slide-left" delay={0.5}>
              <h2 className="fn3-speaker-name">Chirag Chhabra</h2>
              <p className="fn3-speaker-detail">
                <FaUsers className="fn3-detail-icon" />
                Trained <span className="fn3-counter" data-target="1000">0</span>+ Coaches and Affiliate Marketers
              </p>
              <p className="fn3-speaker-detail">
                <FaStar className="fn3-detail-icon" />
                Rated 4.9/5
              </p>
            </AnimatedSection>
            
            <AnimatedSection as="h3" className="fn3-webinar-details-heading" animationType="slide-left" delay={0.7}>
              Webinar Details
            </AnimatedSection>
            
            <StaggeredContainer className="fn3-webinar-details-grid" delay={0.1} direction="left">
              <div className="fn3-detail-item">
                <FaClock className="fn3-item-icon" />
                <p className="fn3-item-label">Duration</p>
                <p className="fn3-item-value">2 hours</p>
              </div>
              <div className="fn3-detail-item">
                <FaCalendarAlt className="fn3-item-icon" />
                <p className="fn3-item-label">Date</p>
                <p className="fn3-item-value">Upcoming Date</p>
              </div>
              <div className="fn3-detail-item">
                <FaGlobe className="fn3-item-icon" />
                <p className="fn3-item-label">Language</p>
                <p className="fn3-item-value">Hindi & English</p>
              </div>
              <div className="fn3-detail-item">
                <FaVideo className="fn3-item-icon" />
                <p className="fn3-item-label">Venue</p>
                <p className="fn3-item-value">Zoom</p>
              </div>
            </StaggeredContainer>
          </div>

          <div className="fn3-right-column">
            <AnimatedSection as="h3" className="fn3-why-attend-heading" animationType="slide-right" delay={0.4}>
              <FaLightbulb className="fn3-heading-icon" /> Why Attend This Workshop?
            </AnimatedSection>
            
            <StaggeredContainer className="fn3-benefit-list" delay={0.15} direction="right">
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> Break free from the constant hustle of chasing clients and still feeling stuck.
              </div>
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> No Tech Skills Needed | No Funnel Knowledge Required
              </div>
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> Discover why your current efforts aren't bringing results – and what to do instead.
              </div>
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> Build your dream coaching business without tech overwhelm, confusion, or burnout.
              </div>
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> Finally feel in control of your growth, income, and impact – without ads, funnels, or cold messages.
              </div>
              <div className="fn3-benefit-item">
                <FaCheckCircle className="fn3-checkmark" /> Learn a simple yet powerful system that gets you results from Day 1 (without complex automations, paid tools, or boring theory).
              </div>
            </StaggeredContainer>
            
            <AnimatedSection as="button" className="fn3-register-button" animationType="pulse-glow" delay={1}>
              Register For Free
            </AnimatedSection>
            
            <p className="fn3-disclaimer">This free workshop will show you how to do exactly that.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="fn3-featured-section" animationType="slide-left">
          <div className="fn3-featured-in-label">Featured in</div>
          <StaggeredContainer className="fn3-media-logos" delay={0.2} direction="right">
            <img src={placeholderImg(150, 50, 'Dailyhunt')} alt="Dailyhunt" className="fn3-media-logo" />
            <img src={placeholderImg(150, 50, 'Hindustan Times')} alt="Hindustan Times" className="fn3-media-logo" />
            <img src={placeholderImg(150, 50, 'The Print')} alt="The Print" className="fn3-media-logo" />
            <img src={placeholderImg(150, 50, 'Business Standard')} alt="Business Standard" className="fn3-media-logo" />
          </StaggeredContainer>
        </AnimatedSection>

        <AnimatedSection className="fn3-struggle-section" animationType="zoom-in">
          <h2 className="fn3-struggle-heading">
            <FaExclamationTriangle className="fn3-heading-icon" /> STOP STRUGGLING TO FIND CLIENTS
          </h2>
          <StaggeredContainer className="fn3-struggle-list" delay={0.2} direction="left">
            <div className="fn3-struggle-item">
              <FaTimesCircle className="fn3-cross-icon" /> Tried posting on Instagram, but nothing converts?
            </div>
            <div className="fn3-struggle-item">
              <FaTimesCircle className="fn3-cross-icon" /> Done with cold DMs and random content?
            </div>
            <div className="fn3-struggle-item">
              <FaTimesCircle className="fn3-cross-icon" /> Feel like you're meant for more, but tech holds you back?
            </div>
          </StaggeredContainer>
          
          <AnimatedSection as="p" className="fn3-imagine-text fn3-typewriter" animationType="slide-right" delay={0.8} 
            data-text="Now imagine waking up to 100+ quality leads a day, reaching out to work with you – without paid ads, without DMing, and without begging.">
            Now imagine waking up to <span className="fn3-highlight-text">100+ quality leads a day</span>, reaching out to work with you
            – <span className="fn3-highlight-text">without paid ads, without DMing, and without begging.</span>
          </AnimatedSection>
          
          <p className="fn3-workshop-promise">
            This free workshop will show you how to do exactly that.
          </p>
          <AnimatedSection as="button" className="fn3-register-button" animationType="bounce-in" delay={1}>
            Register For Free
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection className="fn3-learn-section" animationType="fade-in">
          <div className="fn3-learn-separator"></div>
          <h3 className="fn3-learn-heading">
            <FaCheckCircle className="fn3-learn-check-icon" /> In Just 2 hours, You Will Learn:
          </h3>
        </AnimatedSection>

        <AnimatedSection className="fn3-learn-grid-section" animationType="stagger-horizontal">
          <StaggeredContainer className="fn3-learn-grid-container" delay={0.2} direction="right">
            <div className="fn3-learn-card">
              <span className="fn3-card-icon"><FaFire /></span>
              <h4 className="fn3-card-title">100 Leads A Day Formula</h4>
              <div className="fn3-progress-bar" data-progress="95%">
                <div className="fn3-progress-fill"></div>
              </div>
              <p className="fn3-card-description">A plug-and-play AI method that brings in leads daily using FREE tools</p>
            </div>
            <div className="fn3-learn-card">
              <span className="fn3-card-icon"><FaHeart /></span>
              <h4 className="fn3-card-title">No-Objection Sales Framework</h4>
              <div className="fn3-progress-bar" data-progress="90%">
                <div className="fn3-progress-fill"></div>
              </div>
              <p className="fn3-card-description">Close high-ticket clients (even if you hate selling)</p>
            </div>
            <div className="fn3-learn-card">
              <span className="fn3-card-icon"><FaGem /></span>
              <h4 className="fn3-card-title">USP Builder Blueprint</h4>
              <div className="fn3-progress-bar" data-progress="85%">
                <div className="fn3-progress-fill"></div>
              </div>
              <p className="fn3-card-description">Craft a powerful personal brand that makes you stand out instantly</p>
            </div>
            <div className="fn3-learn-card">
              <span className="fn3-card-icon"><FaCog /></span>
              <h4 className="fn3-card-title">Funnels & Content Automation Setup</h4>
              <div className="fn3-progress-bar" data-progress="92%">
                <div className="fn3-progress-fill"></div>
              </div>
              <p className="fn3-card-description">No tech needed. Watch us build your system live in real time</p>
            </div>
            <div className="fn3-learn-card">
              <span className="fn3-card-icon"><FaMobileAlt /></span>
              <h4 className="fn3-card-title">Social Media Strategy for Coaches</h4>
              <div className="fn3-progress-bar" data-progress="88%">
                <div className="fn3-progress-fill"></div>
              </div>
              <p className="fn3-card-description">We show you what to post, when, and how to get leads without going viral</p>
            </div>
          </StaggeredContainer>
        </AnimatedSection>

        <AnimatedSection as="button" className="fn3-register-button fn3-centered-button" animationType="pulse-glow">
          Register For Free
        </AnimatedSection>

        <AnimatedSection className="fn3-for-you-section" animationType="slide-right">
          <h3 className="fn3-for-you-heading"><FaFire className="fn3-heading-icon" /> This Is For You If:</h3>
          <StaggeredContainer className="fn3-for-you-list" delay={0.15} direction="left">
            <div className="fn3-for-you-item">
              <FaCheckCircle className="fn3-for-you-check" /> You're a Coach, Therapist, Yoga Instructor, or Nutritionist
            </div>
            <div className="fn3-for-you-item">
              <FaCheckCircle className="fn3-for-you-check" /> You want to automate your lead generation and sales
            </div>
            <div className="fn3-for-you-item">
              <FaCheckCircle className="fn3-for-you-check" /> You're stuck offline or doing random stuff online without results
            </div>
            <div className="fn3-for-you-item">
              <FaCheckCircle className="fn3-for-you-check" /> You've never used a landing page or funnel before
            </div>
          </StaggeredContainer>
        </AnimatedSection>

        <AnimatedSection className="fn3-problem-section" animationType="zoom-in">
          <h2 className="fn3-problem-heading">
            <span className="fn3-problem-icon"><FaLightbulb /></span> Your Current Problem is <span className="fn3-problem-highlight">NOT Your Content</span> — It's Your <span className="fn3-problem-highlight">System.</span>
          </h2>
          <p className="fn3-problem-text">You don't need more likes or reels.</p>
          <p className="fn3-problem-text">You need a system that brings leads and clients on autopilot.</p>
          <p className="fn3-problem-text fn3-problem-bold">And that's exactly what we're going to build together.</p>
          <AnimatedSection as="button" className="fn3-register-button fn3-centered-button fn3-spacing-top" animationType="bounce-in" delay={0.5}>
            Register For Free
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection className="fn3-bonus-section" animationType="slide-left">
          <h3 className="fn3-bonus-heading"><FaGift className="fn3-heading-icon" /> BONUS (ONLY FOR LIVE ATTENDEES)</h3>
          <StaggeredContainer className="fn3-bonus-grid" delay={0.1} direction="right">
            <div className="fn3-bonus-item">
              <FaGift className="fn3-bonus-item-icon" />
              <p className="fn3-bonus-item-text">AI Funnel Template</p>
            </div>
            <div className="fn3-bonus-item">
              <FaGift className="fn3-bonus-item-icon" />
              <p className="fn3-bonus-item-text">Social Media Content Calendar</p>
            </div>
            <div className="fn3-bonus-item">
              <FaGift className="fn3-bonus-item-icon" />
              <p className="fn3-bonus-item-text">High-Converting Lead Magnet Blueprint</p>
            </div>
            <div className="fn3-bonus-item">
              <FaGift className="fn3-bonus-item-icon" />
              <p className="fn3-bonus-item-text">No-Objection Sales Script</p>
            </div>
          </StaggeredContainer>
          <AnimatedSection className="fn3-bonus-exclusive-access" animationType="slide-right" delay={0.6}>
            <FaGift className="fn3-bonus-item-icon" />
            <p className="fn3-bonus-item-text">Exclusive Lifetime Community Access</p>
          </AnimatedSection>
          
          <p className="fn3-bonus-giveaway">
            <FaGift className="fn3-bonus-giveaway-icon" /> Plus: Surprise Giveaway for First 50 Registrations
          </p>
          
          <AnimatedSection as="button" className="fn3-register-button fn3-centered-button fn3-spacing-top" animationType="pulse-glow" delay={0.8}>
            Register For Free
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection className="fn3-real-coaches-section" animationType="slide-right">
          <h2 className="fn3-real-coaches-heading">
            <FaStar className="fn3-heading-icon" /> Real Coaches. Real Results
          </h2>
          <StaggeredContainer className="fn3-real-coaches-testimonials" delay={0.2} direction="left">
            {displayedCoachTestimonials.map((testimonial, index) => (
              <div className="fn3-coach-testimonial-card" key={index}>
                <p className="fn3-coach-quote">{testimonial.quote}</p>
                <div className="fn3-coach-info">
                  {testimonial.avatarPlaceholder ? (
                    <FaUserCircle className="fn3-coach-avatar-placeholder" />
                  ) : (
                    <img src={testimonial.avatarUrl} alt={testimonial.name} className="fn3-coach-avatar" />
                  )}
                  <div>
                    <p className="fn3-coach-name">{testimonial.name}</p>
                    <p className="fn3-coach-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredContainer>
          {totalCoachSlides > 1 && (
            <div className="fn3-testimonial-dots">
              {Array.from({ length: totalCoachSlides }).map((_, index) => (
                <span
                  key={index}
                  className={`fn3-dot ${currentCoachSlide === index ? 'active' : ''}`}
                  onClick={() => handleCoachDotClick(index)}
                />
              ))}
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection className="fn3-carousel-testimonials-section" animationType="slide-in-horizontal">
          <div className="fn3-carousel-nav fn3-carousel-prev" onClick={() => scrollCarousel('left')}>
            <FaAngleLeft />
          </div>
          <div className="fn3-carousel-cards-container" ref={carouselContainerRef}>
            <div className="fn3-carousel-card">
              <h4 className="fn3-carousel-card-title">MEET KHUSHBOO</h4>
              <p className="fn3-carousel-card-subtitle">Digital Marketer</p>
              <img src={placeholderImg(300, 180, 'Khushboo')} alt="Khushboo" className="fn3-carousel-card-image" />
              <p className="fn3-carousel-card-text">Closing High Ticket Offers with Email Daily</p>
            </div>
            <div className="fn3-carousel-card">
              <h4 className="fn3-carousel-card-title">MEET SHIVAY</h4>
              <p className="fn3-carousel-card-subtitle">Business Consultant</p>
              <img src={placeholderImg(300, 180, 'Shivay')} alt="Shivay" className="fn3-carousel-card-image" />
              <p className="fn3-carousel-card-text">AFTER - Closing Multi Lakh Every Month</p>
            </div>
            <div className="fn3-carousel-card">
              <h4 className="fn3-carousel-card-title">MEET AKSHAY</h4>
              <p className="fn3-carousel-card-subtitle">Founder</p>
              <img src={placeholderImg(300, 180, 'Akshay')} alt="Akshay" className="fn3-carousel-card-image" />
              <p className="fn3-carousel-card-text">Closed his 2nd Deal Within 10 days</p>
            </div>
            <div className="fn3-carousel-card">
              <h4 className="fn3-carousel-card-title">MEET PRIYA</h4>
              <p className="fn3-carousel-card-subtitle">Yoga Instructor</p>
              <img src={placeholderImg(300, 180, 'Priya')} alt="Priya" className="fn3-carousel-card-image" />
              <p className="fn3-carousel-card-text">Automated her client onboarding successfully</p>
            </div>
          </div>
          <div className="fn3-carousel-nav fn3-carousel-next" onClick={() => scrollCarousel('right')}>
            <FaAngleRight />
          </div>
        </AnimatedSection>

        <AnimatedSection as="button" className="fn3-register-button fn3-centered-button fn3-spacing-top" animationType="bounce-in">
          Register For Free
        </AnimatedSection>

        <AnimatedSection className="fn3-testimonials-section" animationType="slide-left">
          <h2 className="fn3-testimonials-heading">Hear From Coaches Like You</h2>
          <StaggeredContainer className="fn3-testimonial-grid" delay={0.15} direction="right">
            {[
              { img: placeholderImg(300, 200, 'Testimonial 1'), title: "\"This One Decision Made A...\"", name: "Arun Chhabra", link: "#" },
              { img: placeholderImg(300, 200, 'Testimonial 2'), title: "\"7 Figure Sales Closer, Shyre...\"", name: "Shreyank Jain", link: "#" },
              { img: placeholderImg(300, 200, 'Testimonial 3'), title: "\"Sandeep's 6-Figure Digital...\"", name: "Sandeep", link: "#" },
              { img: placeholderImg(300, 200, 'Testimonial 4'), title: "\"Shivan's Game Changing Moment!\"", name: "Shivani", link: "#" },
              { img: placeholderImg(300, 200, 'Testimonial 5'), title: "\"From Dream to Award! Jyotsana's Win\"", name: "Jyotsana", link: "#" },
            ].map((testimonial, idx) => (
              <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="fn3-testimonial-card" key={idx}>
                <img src={testimonial.img} alt={`Testimonial ${idx + 1}`} className="fn3-testimonial-thumbnail" />
                <div className="fn3-play-overlay"><FaYoutube className="fn3-youtube-icon" /></div>
                <div className="fn3-testimonial-content">
                  <p className="fn3-testimonial-title">{testimonial.title}</p>
                  <p className="fn3-testimonial-name">{testimonial.name}</p>
                  <div className="fn3-star-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <p className="fn3-watch-on">Watch on <FaYoutube className="fn3-watch-youtube-icon" /></p>
                </div>
              </a>
            ))}
          </StaggeredContainer>
        </AnimatedSection>

        <AnimatedSection as="button" className="fn3-register-button fn3-centered-button fn3-spacing-top" animationType="pulse-glow">
          Register For Free
        </AnimatedSection>

        <AnimatedSection className="fn3-limited-spots-section" animationType="shake-attention">
          <h3 className="fn3-limited-spots-heading">
            <FaLock className="fn3-heading-icon" /> Limited Spots Available <br />(Fills Fast Every Time)
          </h3>
          <p className="fn3-limited-spots-text">This workshop is <span className="fn3-highlight-text">LIVE, practical, and results-focused.</span></p>
          <p className="fn3-limited-spots-text">We're only accepting <span className="fn3-highlight-text">serious, committed coaches.</span></p>
          <p className="fn3-limited-spots-text">Once it's full — it's full.</p>
          <AnimatedSection as="button" className="fn3-register-button fn3-centered-button fn3-spacing-top" animationType="urgent-pulse" delay={0.5}>
            Secure Your Spot Now
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection className="fn3-about-mentor-section" animationType="fade-in-up">
          <h2 className="fn3-about-mentor-heading">About Mentor</h2>
          <p className="fn3-about-mentor-subheading">& The Tremendous Change She'll Help Bring In Your Life</p>
          <div className="fn3-mentor-details-layout">
            <AnimatedSection className="fn3-mentor-image-container" animationType="slide-left" delay={0.3}>
              <img src={placeholderImg(300, 350, 'Chirag Chhabra')} alt="Chirag Chhabra - Mentor" className="fn3-mentor-image" />
              <div className="fn3-mentor-caption">
                <p className="fn3-mentor-caption-name">Chirag Chhabra</p>
                <p className="fn3-mentor-caption-role">Leading Business Coach</p>
                <p className="fn3-mentor-caption-specialty">Quality leads Specialist</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="fn3-mentor-text-content" animationType="slide-right" delay={0.5}>
              <p className="fn3-mentor-paragraph">A Growth-Focused Coach With Real Business Experience Chirag isn't just another trainer. He's a business coach who has worked directly with hundreds of health and wellness coaches to build systems that actually bring clients – without chasing, begging, or burning out.</p>
              <p className="fn3-mentor-paragraph fn3-mentor-struggle">He knows your struggles.<br />No leads.<br />No sales.<br />No clarity.</p>
              <p className="fn3-mentor-paragraph">That's exactly why he created this challenge – to help you stop guessing and start growing.</p>
              <p className="fn3-mentor-paragraph">Over the past few years, he's helped solo coaches:</p>
              <StaggeredContainer className="fn3-mentor-list" delay={0.1} direction="left">
                <li><FaCheckCircle className="fn3-mentor-check" /> Get <span className="fn3-counter" data-target="100">0</span>+ leads a day (without paid ads)</li>
                <li><FaCheckCircle className="fn3-mentor-check" /> Automate their sales process</li>
                <li><FaCheckCircle className="fn3-mentor-check" /> Close high-ticket offers with confidence</li>
                <li><FaCheckCircle className="fn3-mentor-check" /> Build six-figure businesses – even with zero tech background.</li>
              </StaggeredContainer>
              <p className="fn3-mentor-paragraph">This isn't theory. It's real-world business.<br />And Chirag is here to work with you, step-by-step, until you get the results you deserve.</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="fn3-my-mission-card" animationType="slide-up" delay={0.8}>
            <h4 className="fn3-my-mission-heading">My Mission</h4>
            <p className="fn3-my-mission-quote">"To help every coach turn their passion into profit – <span className="fn3-quote-highlight">using simple tools, proven frameworks, and automation that works.</span>"</p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection className="fn3-faq-section" animationType="slide-right">
          <h2 className="fn3-faq-heading"><FaQuestionCircle className="fn3-heading-icon" /> Frequently Asked Questions</h2>
          <StaggeredContainer className="fn3-faq-container" delay={0.1} direction="left">
            {faqsData.map((faq, index) => (
              <div className={`fn3-faq-item ${openFaqIndex === index ? 'open' : ''}`} key={index}>
                <div className="fn3-faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <FaAngleDown className="fn3-faq-arrow" />
                </div>
                <div className="fn3-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </StaggeredContainer>
        </AnimatedSection>
      </main>

      <Footer />
      <StickyRegisterBar theme={theme} />
    </div>
  );
};

export default App;