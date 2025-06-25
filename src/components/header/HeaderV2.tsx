// // import logo from "/assets/img/logo.png"
// // import { Link } from "react-router-dom";
// // import useSidebarMenu from "../../hooks/useSidebarMenu";
// // import useStickyMenu from "../../hooks/useStickyMenu";
// // import useSubMenuToggle from "../../hooks/useSubMenuToggle";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { updateField } from '../../redux/coachProfileSlice';
// // import "./header.css";
// // const HeaderV2 = () => {

// //      const name = useSelector((state) => state.coachProfile.username);
// //     const { isOpen, openMenu, closeMenu } = useSidebarMenu();
// //     const isMenuSticky = useStickyMenu();
// //     const toggleSubMenu = useSubMenuToggle();

// //     return (
// //         <>
// //      <header className="top-strip-luna">
// //         <p className="top_c">For People Struggling Everyday Due To Their Health Issues...</p>
// //     </header>
// //         </>
// //     );
// // };

// // export default HeaderV2;


// import ScrollContact from "./ScrollContact";
// import { useDispatch, useSelector } from 'react-redux';
// import { updateField } from '../../redux/coachProfileSlice';


// const HeaderV1 = () => {
//     const theme = useSelector((state) => state.coachProfile.theme || 'light');


//     // Theme-based styles
//     const headerStyles = {
//          color: 'orange'
//     };

//     const topStripStyles = {
//         backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f9fa',
//         color: theme === 'dark' ? 'orange !important' : '#333333'
//     };

//     return (
//         <>
//             <header className="top-strip-luna" style={topStripStyles}>
//                 <p className="top_c" style={ {color: 'orange !important'}}>For People Struggling Everyday Due To Their Health Issues...</p>
//             </header>
//         </>
//     );
// };

// export default HeaderV1;

import React, { useEffect, useState, useRef } from "react";
import { FaGlobe, FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import "./header.css";

const HeaderV2 = () => {
    const theme = useSelector((state) => state.coachProfile.theme || 'light');
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'zh-CN', name: 'Chinese' },
        { code: 'fr', name: 'French' },
        { code: 'ar', name: 'Arabic' },
        { code: 'ru', name: 'Russian' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'de', name: 'German' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'it', name: 'Italian' },
        { code: 'hi', name: 'Hindi' }
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,zh-CN,fr,ar,ru,pt,de,ja,ko,it,hi',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
            }, 'google_translate_element');
        };
        
        document.body.appendChild(script);
        
        return () => {
            if (script.parentNode) {
                document.body.removeChild(script);
            }
            delete window.googleTranslateElementInit;
        };
    }, []);

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
        setShowDropdown(false);
        
        if (document.querySelector('.goog-te-combo')) {
            const selectField = document.querySelector('.goog-te-combo');
            selectField.value = languageCode;
            selectField.dispatchEvent(new Event('change'));
        } else {
            const cookieName = 'googtrans';
            const cookieValue = `/en/${languageCode}`;
            const domain = window.location.hostname;
            
            document.cookie = `${cookieName}=${cookieValue}; path=/;`;
            document.cookie = `${cookieName}=${cookieValue}; path=/; domain=${domain};`;
            document.cookie = `${cookieName}=${cookieValue}; path=/; domain=.${domain};`;
            
            window.location.reload();
        }
    };

    const topStripStyles = {
        backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f9fa',
        color: theme === 'dark' ? 'orange' : '#333333'
    };

    return (
        <>
            <header className="top-strip-luna" style={topStripStyles}>
                <p className="top_c" style={{color: 'orange'}}>
                    For People Struggling Everyday Due To Their Health Issues...
                </p>
                
                <div className="translate-container" style={{ 
                    position: 'absolute', 
                    top: '5px', 
                    right: '20px', 
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <button 
                        ref={buttonRef}
                        className="translate-button" 
                        onClick={() => setShowDropdown(!showDropdown)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: theme === 'dark' ? '#444444' : '#333333',
                            color: 'white',
                            border: '1px solid #555',
                            borderRadius: '4px',
                            padding: '6px 12px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        <FaGlobe style={{ marginRight: '8px', fontSize: '16px' }} /> 
                        Translate | {selectedLanguage.toUpperCase()}
                    </button>
                    
                    {showDropdown && (
                        <div 
                            ref={dropdownRef}
                            className="language-dropdown"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                marginTop: '5px',
                                backgroundColor: theme === 'dark' ? '#444444' : '#333333',
                                border: '1px solid #555',
                                borderRadius: '6px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                width: '200px',
                                maxHeight: '300px',
                                overflowY: 'auto',
                                zIndex: 1001
                            }}
                        >
                            {languages.map((lang) => (
                                <div 
                                    key={lang.code}
                                    className="language-option"
                                    onClick={() => changeLanguage(lang.code)}
                                    style={{
                                        padding: '10px 15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        backgroundColor: selectedLanguage === lang.code ? '#666666' : 'transparent',
                                        color: 'white',
                                        borderBottom: '1px solid #555',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#666666'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = selectedLanguage === lang.code ? '#666666' : 'transparent'}
                                >
                                    <span>{lang.name}</span>
                                    {selectedLanguage === lang.code && (
                                        <FaCheck style={{ color: '#4CAF50', fontSize: '14px' }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <div id="google_translate_element" style={{ display: 'none' }}></div>
                </div>
            </header>

            <style dangerouslySetInnerHTML={{ __html: `
                .goog-te-banner-frame { display: none !important; }
                body { top: 0 !important; }
                .goog-te-gadget { font-size: 0 !important; }
                .goog-te-gadget div { display: none !important; }
                .goog-te-menu-value { display: none !important; }
                .VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none !important; }
                .skiptranslate { display: none !important; }
            `}} />
        </>
    );
};

export default HeaderV2;