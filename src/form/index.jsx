
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './form.css';
// // Assuming FooterV1 and HeaderV3 are used elsewhere or part of a larger layout.
// // import FooterV1 from '../components/footer/FooterV1';
// // import HeaderV3 from '../components/header/HeaderV3';

// // The FormIcon SVG is defined but not used in the provided AppointmentForm JSX.
// // It's kept here in case it's used by other parts of your application or intended for future use.
// // const FormIcon = () => (
// //   <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
// //     <rect x="12" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
// //     <rect x="12" y="36" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
// //     <rect x="28" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
// //     <path d="M28 36H40C41.1046 36 42 36.8954 42 38V46C42 47.1046 41.1046 48 40 48H28V36Z" stroke="currentColor" strokeWidth="2"/>
// //     <path d="M46 12H50C51.1046 12 52 12.8954 52 14V50C52 51.1046 51.1046 52 50 52H10C8.89543 52 8 51.1046 8 50V14C8 12.8954 8.89543 12 10 12H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="47" y1="18" x2="47" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="44" y1="22" x2="50" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );

// const TOTAL_STEPS = 3; // 1. Schedule, 2. Additional Info, 3. Review

// const ClockIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
//   </svg>
// );

// const WebConfIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12H5V6h14v9zM8 12h8v2H8v-2z"/>
//   </svg>
// );

// const AppointmentForm = () => {
//   const coachProfile = useSelector(state => state.coachProfile);
//   const client_data = useSelector((state) => state.bookingForm); // Data from bookingForm slice

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Step 1: Schedule
//     bookingDate: '',
//     bookingTime: '',
//     // Fields from Redux (bookingForm slice)
//     fullName: '',
//     emailAddress: '',
//     whatsappNumber: '',
//     // Step 2: Additional Info (Original Step 2, 3, 4 combined, minus Redux fields)
//     // Personal Details (partial)
//     cityCountry: '',
//     socialMediaUsername: '',
//     age: '',
//     // Health & Lifestyle
//     watchedVideo: '',
//     currentProfession: '',
//     mainHealthGoal: '',
//     otherHealthGoal: '',
//     medicalConditions: 'No',
//     medicalConditionsDetails: '',
//     activityLevel: '',
//     useSupplements: 'No',
//     supplementDetails: '',
//     // Commitment & Expectations
//     readyToStart: '',
//     willingToInvest: '',
//     biggestReason: '',
//     seriousnessScale: '',
//     motivation: ''
//   });

//   const [selectedMonth, setSelectedMonth] = useState(new Date());

//   // Effect to populate formData with data from bookingForm Redux slice
//   useEffect(() => {
//     if (client_data) {
//       setFormData(prevData => ({
//         ...prevData,
//         fullName: client_data.fullName || '',
//         emailAddress: client_data.emailAddress || '',
//         whatsappNumber: client_data.whatsappNumber || ''
//       }));
//     }
//   }, [client_data]);

//   const getAvailableDates = () => {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth() + 1;
    
//     let dynamicDates = {};
//     for (let i = 1; i <= 5; i++) {
//         const day = Math.min(today.getDate() + i, new Date(currentYear, currentMonth, 0).getDate());
//         // Ensure future dates within the current month or valid dates if loop crosses month boundary
//         const dateCandidate = new Date(currentYear, currentMonth - 1, day);
//         if (dateCandidate >= today || (dateCandidate.toDateString() === today.toDateString() && day >= today.getDate())) {
//             const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//             dynamicDates[dateStr] = ['09:00', '11:30', '14:00', '16:30'];
//         }
//     }

//     return {
//       ...dynamicDates,
//       '2025-06-10': ['10:00', '15:00'],
//       '2025-06-12': ['09:30', '14:30', '17:00'],
//     };
//   };
//   const availableDates = getAvailableDates();


//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleHealthGoalChange = (e) => {
//     const { value } = e.target;
//     setFormData(prevData => ({
//         ...prevData,
//         mainHealthGoal: value,
//         otherHealthGoal: value === 'Other' ? prevData.otherHealthGoal : '' 
//     }));
//   };

//   const handleDateSelect = (dateStr) => {
//     setFormData({ ...formData, bookingDate: dateStr, bookingTime: '' });
//   };

//   const handleTimeSelect = (time) => {
//     setFormData({ ...formData, bookingTime: time });
//   };
  
//   // --- Step Validation Functions ---
//   const validateStep1 = () => !formData.bookingDate || !formData.bookingTime;
  
//   const validateStep2 = () => 
//     !formData.cityCountry || 
//     !formData.age ||
//     !formData.watchedVideo || 
//     !formData.currentProfession || 
//     !formData.mainHealthGoal || 
//     (formData.mainHealthGoal === 'Other' && !formData.otherHealthGoal) || 
//     (formData.medicalConditions === 'Yes' && !formData.medicalConditionsDetails) || 
//     !formData.activityLevel || 
//     (formData.useSupplements === 'Yes' && !formData.supplementDetails) ||
//     !formData.readyToStart || 
//     !formData.willingToInvest || 
//     !formData.biggestReason || 
//     !formData.seriousnessScale || 
//     !formData.motivation;

//   const handleNext = () => {
//     let isValid = true;
//     if (step === 1 && validateStep1()) {
//       toast.error('Please select a date and time for your appointment.');
//       isValid = false;
//     } else if (step === 2 && validateStep2()) {
//       toast.error('Please complete all required fields in Additional Information.');
//       isValid = false;
//     }

//     if (isValid && step < TOTAL_STEPS) {
//       setStep(s => s + 1);
//     }
//   };

//   const handleBack = () => {
//     if (step > 1) {
//       setStep(s => s - 1);
//     }
//   };

//   const handleSubmit = () => {
//     // Final check for Redux-provided data and other steps
//     if (!formData.fullName || !formData.emailAddress || !formData.whatsappNumber) {
//         toast.error('Essential user information is missing. Please ensure your profile is complete.');
//         // Optionally, navigate to a profile page or show a more specific error.
//         // For now, just prevent submission.
//         return;
//     }
//     if (validateStep1()) {
//         toast.error('Please ensure appointment date and time are selected.');
//         setStep(1);
//         return;
//     }
//     if (validateStep2()) {
//         toast.error('Please ensure all fields in Additional Information are completed.');
//         setStep(2);
//         return;
//     }

//     console.log('Form Data Submitted:', formData);
//     toast.success('Appointment booking confirmed! We will get back to you.');
//     // Potentially reset form or redirect:
//     // setStep(1);
//     // setFormData({ initial state, including fetching from client_data again if needed });
//   };

//   const renderCalendar = () => {
//     const year = selectedMonth.getFullYear();
//     const month = selectedMonth.getMonth();
//     const today = new Date();
//     today.setHours(0,0,0,0);

//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const daysArray = [];

//     for (let i = 0; i < firstDayOfMonth; i++) {
//       daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       const currentDateObj = new Date(year, month, day);
//       const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//       const isAvailable = availableDates[dateStr] && availableDates[dateStr].length > 0;
//       const isSelected = formData.bookingDate === dateStr;
//       const isPast = currentDateObj < today;

//       daysArray.push(
//         <button
//           key={day}
//           type="button"
//           className={`calendar-day 
//             ${isAvailable && !isPast ? 'available' : 'unavailable'} 
//             ${isSelected ? 'selected' : ''}
//             ${isPast && !isAvailable ? 'past' : ''}`}
//           onClick={() => isAvailable && !isPast && handleDateSelect(dateStr)}
//           disabled={!isAvailable || isPast}
//         >
//           {day}
//           {isAvailable && !isPast && <span className="availability-dot"></span>}
//         </button>
//       );
//     }
//     return daysArray;
//   };

//   const getSidebarTitle = () => {
//     switch(step) {
//       case 1: return "Schedule Slot";
//       case 2: return "Additional Information";
//       case 3: return "Review Booking";
//       default: return "Your Information";
//     }
//   };

//   const progressPercentage = (step / TOTAL_STEPS) * 100;

//   const renderStepContent = () => {
//     switch (step) {
//       case 1: // Schedule
//         return (
//           <>
//             <h4 className="form-section-title">Select Date & Time</h4>
//             <div className="calendar-wrapper">
//               <div className="calendar-navigation">
//                 <button type="button" className="nav-arrow" onClick={() => setSelectedMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>&lt;</button>
//                 <h5 className="current-month-year">{selectedMonth.toLocaleString('default', { month: 'long' })} {selectedMonth.getFullYear()}</h5>
//                 <button type="button" className="nav-arrow" onClick={() => setSelectedMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>&gt;</button>
//               </div>
//               <div className="calendar-grid-headers">
//                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="grid-header-cell">{d}</div>)}
//               </div>
//               <div className="calendar-grid-days">{renderCalendar()}</div>
//             </div>
            
//             {formData.bookingDate && (
//               <div className="time-selector-wrapper">
//                 <h5 className="time-selector-title">Available Times for {new Date(formData.bookingDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}:</h5>
//                 <div className="time-slots-grid">
//                   {availableDates[formData.bookingDate]?.length > 0 ? availableDates[formData.bookingDate].map(time => (
//                     <button type="button" key={time} className={`time-slot-btn ${formData.bookingTime === time ? 'selected' : ''}`} onClick={() => handleTimeSelect(time)}>
//                       {time}
//                     </button>
//                   )) : <p>No time slots available for this date.</p>}
//                 </div>
//               </div>
//             )}
//           </>
//         );
//       case 2: // Additional Information (Combined)
//         return (
//           <>
//             <h4 className="form-section-title">Additional Information</h4>
            
//             {/* Personal Details (excluding Redux-managed fields) */}
//             <h5 className="form-subsection-title" style={{marginTop: '10px', marginBottom: '15px'}}>Personal Details</h5>
//             <div className="form-row">
//                 <div className="form-group"><label htmlFor="cityCountry">City & Country*</label><input type="text" id="cityCountry" name="cityCountry" value={formData.cityCountry} onChange={handleChange} required /></div>
//                 <div className="form-group"><label htmlFor="age">What is your age?*</label><input type="number" id="age" name="age" value={formData.age} onChange={handleChange} min="1" required /></div>
//             </div>
//             <div className="form-row">
//                 <div className="form-group full-width"><label htmlFor="socialMediaUsername">Instagram/Facebook username</label><input type="text" id="socialMediaUsername" name="socialMediaUsername" value={formData.socialMediaUsername} onChange={handleChange} /></div>
//             </div>

//             {/* Health & Lifestyle Assessment */}
//             <h5 className="form-subsection-title" style={{marginTop: '25px', marginBottom: '15px'}}>Health & Lifestyle Assessment</h5>
//             <div className="form-group">
//               <label>Did you watch the full video before booking this call?*</label>
//               <div className="radio-group">
//                 {['Yes', 'No', 'I plan to watch it soon'].map(opt => <label key={opt}><input type="radio" name="watchedVideo" value={opt} checked={formData.watchedVideo === opt} onChange={handleChange} required /> {opt}</label>)}
//               </div>
//             </div>
//             <div className="form-group"><label htmlFor="currentProfession">Current profession/daily routine?*</label><input type="text" id="currentProfession" name="currentProfession" value={formData.currentProfession} onChange={handleChange} required /></div>
//             <div className="form-group">
//               <label htmlFor="mainHealthGoal">Main health goal?*</label>
//               <select id="mainHealthGoal" name="mainHealthGoal" value={formData.mainHealthGoal} onChange={handleHealthGoalChange} required>
//                 <option value="">Select goal</option>
//                 {['Weight Loss', 'Weight Gain', 'Muscle Building', 'Increase Energy', 'Better Nutrition Habits', 'Other'].map(g => <option key={g} value={g}>{g}</option>)}
//               </select>
//               {formData.mainHealthGoal === 'Other' && <input type="text" name="otherHealthGoal" value={formData.otherHealthGoal} onChange={handleChange} placeholder="Specify other goal" className="conditional-input" required/>}
//             </div>
//             <div className="form-group">
//               <label>Any medical conditions/lifestyle diseases?*</label>
//               <div className="radio-group">
//                 {['Yes', 'No'].map(opt => <label key={opt}><input type="radio" name="medicalConditions" value={opt} checked={formData.medicalConditions === opt} onChange={handleChange} required /> {opt}</label>)}
//               </div>
//               {formData.medicalConditions === 'Yes' && <textarea name="medicalConditionsDetails" value={formData.medicalConditionsDetails} onChange={handleChange} placeholder="Details (Diabetes, Thyroid, etc.)" className="conditional-input" required/>}
//             </div>
//             <div className="form-group">
//               <label>Current daily activity level?*</label>
//               <select id="activityLevel" name="activityLevel" value={formData.activityLevel} onChange={handleChange} required>
//                 <option value="">Select level</option>
//                 {['Very active', 'Moderately active', 'Not active'].map(l => <option key={l} value={l}>{l}</option>)}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Currently use any supplements/nutrition products?*</label>
//               <div className="radio-group">
//                 {['Yes', 'No'].map(opt => <label key={opt}><input type="radio" name="useSupplements" value={opt} checked={formData.useSupplements === opt} onChange={handleChange} required /> {opt}</label>)}
//               </div>
//               {formData.useSupplements === 'Yes' && <textarea name="supplementDetails" value={formData.supplementDetails} onChange={handleChange} placeholder="Specify brand & duration" className="conditional-input" required/>}
//             </div>

//             {/* Commitment & Expectations */}
//             <h5 className="form-subsection-title" style={{marginTop: '25px', marginBottom: '15px'}}>Commitment & Expectations</h5>
//             <div className="form-group">
//               <label>Ready to start transformation within 7 days if selected?*</label>
//               <select id="readyToStart" name="readyToStart" value={formData.readyToStart} onChange={handleChange} required>
//                 <option value="">Select option</option>
//                 {['Yes', 'No', 'Not sure'].map(o => <option key={o} value={o}>{o}</option>)}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Willing to invest if program guarantees results?*</label>
//               <select id="willingToInvest" name="willingToInvest" value={formData.willingToInvest} onChange={handleChange} required>
//                 <option value="">Select option</option>
//                 {['Yes', 'Need a flexible option', 'No'].map(o => <option key={o} value={o}>{o}</option>)}
//               </select>
//             </div>
//             <div className="form-group"><label htmlFor="biggestReason">Biggest reason for not achieving goals so far?*</label><textarea id="biggestReason" name="biggestReason" value={formData.biggestReason} onChange={handleChange} rows="3" required></textarea></div>
//             <div className="form-group">
//               <label htmlFor="seriousnessScale">Seriousness (1–10) about transforming health now?*</label>
//               <select id="seriousnessScale" name="seriousnessScale" value={formData.seriousnessScale} onChange={handleChange} required>
//                 <option value="">Select rating</option>
//                 {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
//               </select>
//             </div>
//             <div className="form-group"><label htmlFor="motivation">What motivates you most to improve health now?*</label><textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} rows="3" required></textarea></div>
//           </>
//         );
//       case 3: // Review
//         return (
//           <>
//             <h4 className="form-section-title">Review Your Booking</h4>
//             <div className="review-grid">
//                 <div className="review-item"><strong>Date & Time:</strong> {formData.bookingDate ? `${new Date(formData.bookingDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${formData.bookingTime}` : 'Not selected'}</div>
                
//                 <div className="review-item"><strong>Full Name:</strong> {formData.fullName || 'Not provided'}</div>
//                 <div className="review-item"><strong>Email Address:</strong> {formData.emailAddress || 'Not provided'}</div>
//                 <div className="review-item"><strong>WhatsApp Number:</strong> {formData.whatsappNumber || 'Not provided'}</div>
                
//                 <div className="review-item"><strong>City & Country:</strong> {formData.cityCountry || 'Not provided'}</div>
//                 <div className="review-item"><strong>Age:</strong> {formData.age || 'Not provided'}</div>
//                 <div className="review-item"><strong>Social Media:</strong> {formData.socialMediaUsername || 'N/A'}</div>

//                 <div className="review-item"><strong>Watched Video:</strong> {formData.watchedVideo || 'Not answered'}</div>
//                 <div className="review-item"><strong>Current Profession:</strong> {formData.currentProfession || 'Not provided'}</div>
//                 <div className="review-item"><strong>Main Health Goal:</strong> {formData.mainHealthGoal}{formData.mainHealthGoal === 'Other' && formData.otherHealthGoal ? ` (${formData.otherHealthGoal})` : '' || 'Not selected'}</div>
//                 <div className="review-item"><strong>Medical Conditions:</strong> {formData.medicalConditions}{formData.medicalConditions === 'Yes' && formData.medicalConditionsDetails ? `: ${formData.medicalConditionsDetails}` : '' || 'Not answered'}</div>
//                 <div className="review-item"><strong>Activity Level:</strong> {formData.activityLevel || 'Not selected'}</div>
//                 <div className="review-item"><strong>Use Supplements:</strong> {formData.useSupplements}{formData.useSupplements === 'Yes' && formData.supplementDetails ? `: ${formData.supplementDetails}` : '' || 'Not answered'}</div>
                
//                 <div className="review-item"><strong>Ready to Start:</strong> {formData.readyToStart || 'Not answered'}</div>
//                 <div className="review-item"><strong>Willing to Invest:</strong> {formData.willingToInvest || 'Not answered'}</div>
//                 <div className="review-item full-span"><strong>Biggest Reason (Not Achieving Goals):</strong> {formData.biggestReason || 'Not provided'}</div>
//                 <div className="review-item"><strong>Seriousness (1-10):</strong> {formData.seriousnessScale || 'Not rated'}</div>
//                 <div className="review-item full-span"><strong>Motivation:</strong> {formData.motivation || 'Not provided'}</div>
//             </div>
//             <p style={{marginTop: '20px', fontStyle: 'italic', textAlign: 'center'}}>Please review your information. Click "Confirm Booking" to submit.</p>
//           </>
//         );
//       default: return null;
//     }
//   };

//   return (
//    <div className={`page-background ${coachProfile.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
//       <ToastContainer position="top-center" autoClose={3000} theme="colored" />
//       <div className="form-card">
//         <header className="form-card-header">
//           <div className="logo-container"><span className="logo-text">{coachProfile.username}lolo</span></div>
//           <div className="user-info">
//             <img src={coachProfile.profilePicture} alt="User" className="user-avatar" />
//           </div>
//         </header>
//         <div className="form-card-body">
//           <aside className="sidebar">
//             {/* Use formData.fullName which is populated from client_data via useEffect */}
//             <h3 style={{ margin: 0, padding: 0, fontSize: "1.2rem", fontWeight: 600, color: "#333" }}>
//               Hii, {formData.fullName || 'Valued Guest'}! Welcome
//             </h3>
//             <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0" }}>
//                 <ClockIcon />
//                 <span style={{ fontSize: "0.9rem", color: "#555" }}>30 min</span>
//             </div>
//             <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0", textAlign: "start" }}>
//                 <WebConfIcon />
//                 <span style={{ fontSize: "0.9rem", color: "#555" }}>Web conferencing details provided upon confirmation.</span>
//             </div>
//             <h4 className="sidebar-section-heading" style={{ margin: "15px 0 0 0", padding: 0, fontSize: "1rem", fontWeight: 600, color: "#495057", lineHeight: 1.4 }}>
//                 Get Expert Analysis From India's Leading Dietitian With 20 Years Of Experience
//                 <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
//                     {/* Bullet points as before */}
//                     <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: "rgb(85, 85, 85)" }}>Discuss your specific health challenges and goals</span></div>
//                     <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: "rgb(85, 85, 85)" }}>Receive a professional assessment of your situation</span></div>
//                     <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: "rgb(85, 85, 85)" }}>Explore potential paths to sustainable health transformation</span></div>
//                 </div>
//             </h4>
//             <span style={{ fontSize: "0.9rem", color: "#555" }}>15-Minute Consultation. Speak directly with Luna Jaiswal to see if she can help with your unique health concerns</span>
//             <br />
//             <h3 className="sidebar-title" style={{marginTop: '20px'}}>{getSidebarTitle()}</h3>
//             <p className="sidebar-subtitle">Step {step} of {TOTAL_STEPS}</p>
//             <div className="sidebar-progress-bar">
//               <div className="sidebar-progress" style={{ width: `${progressPercentage}%` }}></div>
//             </div>
//           </aside>
//           <main className="main-content">
//             <h2 className="main-title">Book Your Free Health Assessment Call</h2>
//             <form onSubmit={(e) => e.preventDefault()} className="appointment-form">
//               <div className="form-step-content-area">
//                 {renderStepContent()}
//               </div>
//               <div className="form-actions">
//                 {step > 1 && <button type="button" className="button-cancel" onClick={handleBack}>Back</button>}
//                 {step < TOTAL_STEPS && <button type="button" className="button-next" onClick={handleNext}>Next &rarr;</button>}
//                 {step === TOTAL_STEPS && <button type="button" className="button-next" onClick={handleSubmit}>Confirm Booking</button>}
//               </div>
//             </form>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css'; // Your existing CSS file
// import FooterV1 from '../components/footer/FooterV1';
// import HeaderV3 from '../components/header/HeaderV3';

// const FormIcon = () => ( ... ); // Kept as is

const TOTAL_STEPS = 2; // 1. Schedule, 2. Additional Information

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);
const ConfettiPiece = ({ id, style }) => (
  <div className={`confetti-piece confetti-${id}`} style={style}></div>
);
const WebConfIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12H5V6h14v9zM8 12h8v2H8v-2z"/>
  </svg>
);

const SuccessIcon = () => ( // Icon for congratulations message
  <svg className="congratulations-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);


const AppointmentForm = () => {
  const coachProfile = useSelector(state => state.coachProfile);
  const client_data = useSelector((state) => state.bookingForm);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false); // For congratulations screen
  const [formData, setFormData] = useState({
    // Step 1: Schedule
    bookingDate: '',
    bookingTime: '',
    // Fields from Redux (bookingForm slice) - will be pre-filled
    fullName: '',
    emailAddress: '',
    whatsappNumber: '',
    // Step 2: Additional Info (Original Step 2, 3, 4 combined)
    // Personal Details (remaining)
    cityCountry: '',
    socialMediaUsername: '', // Label: "Instagram/Facebook username"
    age: '',
    // Health & Lifestyle
    watchedVideo: '',
    currentProfession: '',
    mainHealthGoal: '',
    otherHealthGoal: '',
    medicalConditions: 'No',
    medicalConditionsDetails: '',
    activityLevel: '',
    useSupplements: 'No',
    supplementDetails: '',
    // Commitment & Expectations
    readyToStart: '',
    willingToInvest: '',
    biggestReason: '',
    seriousnessScale: '',
    motivation: ''
  });

 useEffect(() => {
    if (isSubmitted) {
      const pieces = [];
      const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#32CD32', '#FF4500', '#9370DB']; // Gold, Pink, SkyBlue, LimeGreen, OrangeRed, MediumPurple
      for (let i = 0; i < 50; i++) { // Generate 50 confetti pieces
        pieces.push({
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -50 - 50}%`, // Start above the view
            width: `${Math.random() * 8 + 4}px`, // Random width
            height: `${Math.random() * 10 + 5}px`, // Random height
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 0.5}s`, // Stagger the fall
            animationDuration: `${Math.random() * 2 + 2}s`, // Random fall duration
          }
        });
      }
      setConfettiPieces(pieces);
    }
  }, [isSubmitted]);

  const [selectedMonth, setSelectedMonth] = useState(new Date());

  useEffect(() => {
    if (client_data) {
      setFormData(prevData => ({
        ...prevData,
        fullName: client_data.fullName || '',
        emailAddress: client_data.emailAddress || '',
        whatsappNumber: client_data.whatsappNumber || ''
      }));
    }
  }, [client_data]);

  const getAvailableDates = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-indexed
    
    let dynamicDates = {};
    // Add a few dynamic dates for the current month, ensuring they are in the future
    for (let i = 0; i <= 5; i++) { // Start from today
        const dayCandidate = new Date(currentYear, currentMonth, today.getDate() + i);
        if (dayCandidate.getMonth() === currentMonth) { // Only add if still in the same month
             const dateStr = `${dayCandidate.getFullYear()}-${String(dayCandidate.getMonth() + 1).padStart(2, '0')}-${String(dayCandidate.getDate()).padStart(2, '0')}`;
            dynamicDates[dateStr] = ['09:00', '11:30', '14:00', '16:30'];
        }
    }

    return {
      ...dynamicDates,
      // Keep your static future examples if needed for testing calendar navigation
      '2025-06-10': ['10:00', '15:00'],
      '2025-06-12': ['09:30', '14:30', '17:00'],
    };
  };
  const availableDates = getAvailableDates();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleHealthGoalChange = (e) => {
    const { value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        mainHealthGoal: value,
        otherHealthGoal: value === 'Other' ? prevData.otherHealthGoal : '' 
    }));
  };

  const handleDateSelect = (dateStr) => {
    setFormData({ ...formData, bookingDate: dateStr, bookingTime: '' });
  };

  const handleTimeSelect = (time) => {
    setFormData({ ...formData, bookingTime: time });
  };
  
  // --- Step Validation Functions ---
  const validateStep1 = () => !formData.bookingDate || !formData.bookingTime;
  
  const validateStep2 = () => 
    // Check Redux-populated fields (should ideally be present)
    !formData.fullName || !formData.emailAddress || !formData.whatsappNumber ||
    // Check other fields in the combined step 2
    !formData.cityCountry || 
    !formData.age ||
    !formData.watchedVideo || 
    !formData.currentProfession || 
    !formData.mainHealthGoal || 
    (formData.mainHealthGoal === 'Other' && !formData.otherHealthGoal) || 
    (formData.medicalConditions === 'Yes' && !formData.medicalConditionsDetails) || 
    !formData.activityLevel || 
    (formData.useSupplements === 'Yes' && !formData.supplementDetails) ||
    !formData.readyToStart || 
    !formData.willingToInvest || 
    !formData.biggestReason || 
    !formData.seriousnessScale || 
    !formData.motivation;

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      toast.error('Please select a date and time for your appointment.');
      return;
    }
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.emailAddress || !formData.whatsappNumber) {
        toast.error('Essential user information (Name, Email, WhatsApp) is missing. Please check your profile.');
        return;
    }
    if (validateStep1()) {
        toast.error('Please ensure appointment date and time are selected (Step 1).');
        setStep(1);
        return;
    }
    if (validateStep2()) { // This already checks fullName, email, whatsappNumber again, but primary check is above.
        toast.error('Please complete all required fields in Additional Information (Step 2).');
        setStep(2);
        return;
    }

    console.log('Form Data Submitted:', formData);
    setIsSubmitted(true); // Show congratulations screen
    // toast.success('Appointment booking confirmed! We will get back to you.'); // Replaced by full screen message
  };

  const renderCalendar = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const today = new Date();
    today.setHours(0,0,0,0);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateObj = new Date(year, month, day);
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isAvailable = availableDates[dateStr] && availableDates[dateStr].length > 0;
      const isSelected = formData.bookingDate === dateStr;
      const isPast = currentDateObj < today;

      daysArray.push(
        <button
          key={day}
          type="button"
          className={`calendar-day 
            ${isAvailable && !isPast ? 'available' : 'unavailable'} 
            ${isSelected ? 'selected' : ''}
            ${isPast && !isAvailable ? 'past' : ''}`}
          onClick={() => isAvailable && !isPast && handleDateSelect(dateStr)}
          disabled={!isAvailable || isPast}
        >
          {day}
          {isAvailable && !isPast && <span className="availability-dot"></span>}
        </button>
      );
    }
    return daysArray;
  };

  const getSidebarTitle = () => {
    switch(step) {
      case 1: return "Schedule Slot";
      case 2: return "Your Information";
      default: return "Booking Details";
    }
  };

  const progressPercentage = (step / TOTAL_STEPS) * 100;

  const renderStepContent = () => {
    switch (step) {
      case 1: // Schedule
        return (
          <>
            <h4 className="form-section-title">Select Date & Time</h4>
            <div className="calendar-wrapper">
              <div className="calendar-navigation">
                <button type="button" className="nav-arrow" onClick={() => setSelectedMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>&lt;</button>
                <h5 className="current-month-year">{selectedMonth.toLocaleString('default', { month: 'long' })} {selectedMonth.getFullYear()}</h5>
                <button type="button" className="nav-arrow" onClick={() => setSelectedMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>&gt;</button>
              </div>
              <div className="calendar-grid-headers">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="grid-header-cell">{d}</div>)}
              </div>
              <div className="calendar-grid-days">{renderCalendar()}</div>
            </div>
            
            {formData.bookingDate && (
              <div className="time-selector-wrapper">
                <h5 className="time-selector-title">Available Times for {new Date(formData.bookingDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}:</h5>
                <div className="time-slots-grid">
                  {availableDates[formData.bookingDate]?.length > 0 ? availableDates[formData.bookingDate].map(time => (
                    <button type="button" key={time} className={`time-slot-btn ${formData.bookingTime === time ? 'selected' : ''}`} onClick={() => handleTimeSelect(time)}>
                      {time}
                    </button>
                  )) : <p>No time slots available for this date.</p>}
                </div>
              </div>
            )}
          </>
        );
      case 2: // Additional Information (Combined)
        return (
          <>
            <h4 className="form-section-title">Complete Your Information</h4>
            
            {/* Personal Details (excluding Redux-managed fields) */}
            <h5 className="form-subsection-title">Personal Details</h5>
            <div className="form-row">
                <div className="form-group"><label htmlFor="cityCountry">City & Country*</label><input type="text" id="cityCountry" name="cityCountry" value={formData.cityCountry} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="age">What is your age?*</label><input type="number" id="age" name="age" value={formData.age} onChange={handleChange} min="1" required /></div>
            </div>
            <div className="form-row">
                <div className="form-group"> {/* This will take full width as it's the only item in form-row */}
                    <label htmlFor="socialMediaUsername">Instagram/Facebook username</label>
                    <input type="text" id="socialMediaUsername" name="socialMediaUsername" value={formData.socialMediaUsername} onChange={handleChange} />
                </div>
            </div>

            {/* Health & Lifestyle Assessment */}
            <h5 className="form-subsection-title">Health & Lifestyle Assessment</h5>
            <div className="form-group">
              <label>Did you watch the full video before booking this call?*</label>
              <div className="radio-group">
                {['Yes', 'No', 'I plan to watch it soon'].map(opt => <label key={opt}><input type="radio" name="watchedVideo" value={opt} checked={formData.watchedVideo === opt} onChange={handleChange} required /> {opt}</label>)}
              </div>
            </div>
            <div className="form-group"><label htmlFor="currentProfession">Current profession/daily routine?*</label><input type="text" id="currentProfession" name="currentProfession" value={formData.currentProfession} onChange={handleChange} required /></div>
            <div className="form-group">
              <label htmlFor="mainHealthGoal">Main health goal?*</label>
              <select id="mainHealthGoal" name="mainHealthGoal" value={formData.mainHealthGoal} onChange={handleHealthGoalChange} required>
                <option value="">Select goal</option>
                {['Weight Loss', 'Weight Gain', 'Muscle Building', 'Increase Energy', 'Better Nutrition Habits', 'Other'].map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              {formData.mainHealthGoal === 'Other' && <input type="text" name="otherHealthGoal" value={formData.otherHealthGoal} onChange={handleChange} placeholder="Specify other goal" className="conditional-input" required/>}
            </div>
            <div className="form-group">
              <label>Any medical conditions/lifestyle diseases?*</label>
              <div className="radio-group">
                {['Yes', 'No'].map(opt => <label key={opt}><input type="radio" name="medicalConditions" value={opt} checked={formData.medicalConditions === opt} onChange={handleChange} required /> {opt}</label>)}
              </div>
              {formData.medicalConditions === 'Yes' && <textarea name="medicalConditionsDetails" value={formData.medicalConditionsDetails} onChange={handleChange} placeholder="Details (Diabetes, Thyroid, etc.)" className="conditional-input" required/>}
            </div>
            <div className="form-group">
              <label>Current daily activity level?*</label>
              <select id="activityLevel" name="activityLevel" value={formData.activityLevel} onChange={handleChange} required>
                <option value="">Select level</option>
                {['Very active', 'Moderately active', 'Not active'].map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Currently use any supplements/nutrition products?*</label>
              <div className="radio-group">
                {['Yes', 'No'].map(opt => <label key={opt}><input type="radio" name="useSupplements" value={opt} checked={formData.useSupplements === opt} onChange={handleChange} required /> {opt}</label>)}
              </div>
              {formData.useSupplements === 'Yes' && <textarea name="supplementDetails" value={formData.supplementDetails} onChange={handleChange} placeholder="Specify brand & duration" className="conditional-input" required/>}
            </div>

            {/* Commitment & Expectations */}
            <h5 className="form-subsection-title">Commitment & Expectations</h5>
            <div className="form-group">
              <label>Ready to start transformation within 7 days if selected?*</label>
              <select id="readyToStart" name="readyToStart" value={formData.readyToStart} onChange={handleChange} required>
                <option value="">Select option</option>
                {['Yes', 'No', 'Not sure'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Willing to invest if program guarantees results?*</label>
              <select id="willingToInvest" name="willingToInvest" value={formData.willingToInvest} onChange={handleChange} required>
                <option value="">Select option</option>
                {['Yes', 'Need a flexible option', 'No'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div className="form-group"><label htmlFor="biggestReason">Biggest reason for not achieving goals so far?*</label><textarea id="biggestReason" name="biggestReason" value={formData.biggestReason} onChange={handleChange} rows="3" required></textarea></div>
            <div className="form-group">
              <label htmlFor="seriousnessScale">Seriousness (1–10) about transforming health now?*</label>
              <select id="seriousnessScale" name="seriousnessScale" value={formData.seriousnessScale} onChange={handleChange} required>
                <option value="">Select rating</option>
                {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
              </select>
            </div>
            <div className="form-group"><label htmlFor="motivation">What motivates you most to improve health now?*</label><textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} rows="3" required></textarea></div>
          </>
        );
      default: return null;
    }
  };
  if (isSubmitted) {
    return (
      <div className={`page-background ${coachProfile.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <div className="congratulations-container-wrapper"> {/* New wrapper for positioning */}
          <div className="congratulations-container">
            <div className="confetti-burst-container">
              {confettiPieces.map(piece => (
                <ConfettiPiece key={piece.id} id={piece.id} style={piece.style} />
              ))}
            </div>
            <SuccessIcon />
            <h2 className="congratulations-title">Congratulations, {formData.fullName}!</h2>
            <p>Your Free Health Assessment Call is successfully booked for:</p>
            <p><strong>Date:</strong> {new Date(formData.bookingDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> {formData.bookingTime}</p>
            <p>We're excited to speak with you and will send a confirmation email to {formData.emailAddress} shortly with further details.</p>
          </div>
        </div>
      </div>
    );
  }
return (
   <div className={`page-background ${coachProfile.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <div className="form-card">
        <header className="form-card-header">
          <div className="logo-container"><span className="logo-text">{coachProfile.username}</span></div>
          <div className="user-info">
            <img src={coachProfile.profilePicture} alt="User" className="user-avatar" />
          </div>
        </header>
        <div className="form-card-body">
          <aside className="sidebar">
            <h3 style={{ margin: 0, padding: 0, fontSize: "1.2rem", fontWeight: 600, color: coachProfile.theme === 'dark' ? '#f0f0f0' : '#333' }}>
                 Hi, {formData.fullName || 'Valued Guest'}! Welcome
            </h3>
            <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0" }}>
                <ClockIcon />
                <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>30 min</span>
            </div>
            <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0", textAlign: "start" }}>
                <WebConfIcon />
                <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>Web conferencing details provided upon confirmation.</span>
            </div>
            <h4
              className="sidebar-section-heading"
              style={{
                margin: "15px 0 0 0",
                padding: 0,
                fontSize: "1rem",
                fontWeight: 600,
                color: coachProfile.theme === 'dark' ? '#f0f0f0' : '#495057',
                lineHeight: 1.4
              }}
            >
                Get Expert Analysis From India's Leading Dietitian With 20 Years Of Experience
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Discuss your specific health challenges and goals</span></div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Receive a professional assessment of your situation</span></div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Explore potential paths to sustainable health transformation</span></div>
                </div>
            </h4>
            <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>15-Minute Consultation. Speak directly with {coachProfile.username} to see if they can help with your unique health concerns</span>
            <br />
            <h3 className="sidebar-title" style={{marginTop: '20px'}}>{getSidebarTitle()}</h3>
            <p className="sidebar-subtitle">Step {step} of {TOTAL_STEPS}</p>
            <div className="sidebar-progress-bar">
              <div className="sidebar-progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </aside>
          <main className="main-content">
            <h2 className="main-title">Book Your Free Health Assessment Call</h2>
            <form onSubmit={(e) => e.preventDefault()} className="appointment-form">
              <div className="form-step-content-area">
                {renderStepContent()}
              </div>
              <div className="form-actions">
                {step > 1 && <button type="button" className="button-cancel" onClick={handleBack}>Back</button>}
                {step < TOTAL_STEPS && <button type="button" className="button-next" onClick={handleNext}>Next &rarr;</button>}
                {step === TOTAL_STEPS && <button type="button" className="button-next" onClick={handleSubmit}>Confirm & Submit Booking</button>}
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );

  // return (
  //  <div className={`page-background ${coachProfile.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
  //     <ToastContainer position="top-center" autoClose={3000} theme="colored" />
  //     <div className="form-card">
  //       <header className="form-card-header">
  //         <div className="logo-container"><span className="logo-text">{coachProfile.username}lolo</span></div>
  //         <div className="user-info">
  //           <img src={coachProfile.profilePicture} alt="User" className="user-avatar" />
  //         </div>
  //       </header>
  //       <div className="form-card-body">
  //         <aside className="sidebar">
  //           <h3 style={{ margin: 0, padding: 0, fontSize: "1.2rem", fontWeight: 600, color: coachProfile.theme === 'dark' ? '#f0f0f0' : '#333' }}>
  //                Hi, {formData.fullName || 'Valued Guest'}! Welcome
  //           </h3>
  //           <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0" }}>
  //               <ClockIcon />
  //               <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>30 min</span>
  //           </div>
  //           <div className="sidebar-info-item" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0", textAlign: "start" }}>
  //               <WebConfIcon />
  //               <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>Web conferencing details provided upon confirmation.</span>
  //           </div>
  //           <h4 
  //             className="sidebar-section-heading" 
  //             style={{ 
  //               margin: "15px 0 0 0", 
  //               padding: 0, 
  //               fontSize: "1rem", 
  //               fontWeight: 600, 
  //               color: coachProfile.theme === 'dark' ? '#f0f0f0' : '#495057', // Adjusted for dark theme
  //               lineHeight: 1.4 
  //             }}
  //           >
  //               Get Expert Analysis From India's Leading Dietitian With 20 Years Of Experience
  //               <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
  //                   <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Discuss your specific health challenges and goals</span></div>
  //                   <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Receive a professional assessment of your situation</span></div>
  //                   <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><span style={{ color: "#4CAF50", fontWeight: "bold" }}>•</span><span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : 'rgb(85, 85, 85)' }}>Explore potential paths to sustainable health transformation</span></div>
  //               </div>
  //           </h4>
  //           <span style={{ fontSize: "0.9rem", color: coachProfile.theme === 'dark' ? '#b0b0b0' : '#555' }}>15-Minute Consultation. Speak directly with Luna Jaiswal to see if she can help with your unique health concerns</span>
  //           <br />
  //           <h3 className="sidebar-title" style={{marginTop: '20px'}}>{getSidebarTitle()}</h3>
  //           <p className="sidebar-subtitle">Step {step} of {TOTAL_STEPS}</p>
  //           <div className="sidebar-progress-bar">
  //             <div className="sidebar-progress" style={{ width: `${progressPercentage}%` }}></div>
  //           </div>
  //         </aside>
  //         <main className="main-content">
  //           <h2 className="main-title">Book Your Free Health Assessment Call</h2>
  //           <form onSubmit={(e) => e.preventDefault()} className="appointment-form">
  //             <div className="form-step-content-area">
  //               {renderStepContent()}
  //             </div>
  //             <div className="form-actions">
  //               {step > 1 && <button type="button" className="button-cancel" onClick={handleBack}>Back</button>}
  //               {step < TOTAL_STEPS && <button type="button" className="button-next" onClick={handleNext}>Next &rarr;</button>}
  //               {step === TOTAL_STEPS && <button type="button" className="button-next" onClick={handleSubmit}>Confirm & Submit Booking</button>}
  //             </div>
  //           </form>
  //         </main>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AppointmentForm;
