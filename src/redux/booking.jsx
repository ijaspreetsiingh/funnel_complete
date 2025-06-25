import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Step 1: Booking Details
  bookingDate: '',
  bookingTime: '',
  
  // Step 2: Personal Details
  fullName: '',
  emailAddress: '',
  whatsappNumber: '',
  cityCountry: '',
  socialMediaUsername: '',
  age: '',
  
  // Step 3: Health & Lifestyle
  watchedVideo: '',
  currentProfession: '',
  mainHealthGoal: '',
  otherHealthGoal: '',
  medicalConditions: 'No',
  medicalConditionsDetails: '',
  activityLevel: '',
  useSupplements: 'No',
  supplementDetails: '',
  
  // Step 4: Commitment & Expectations
  readyToStart: '',
  willingToInvest: '',
  biggestReason: '',
  seriousnessScale: '',
  motivation: ''
};

const bookingFormSlice = createSlice({
  name: 'bookingForm',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
     if (action.payload.field && action.payload.value) {
        state[action.payload.field] = action.payload.value;
      } 
      // Otherwise merge the entire payload into state
      else {
        return { ...state, ...action.payload };
      }
    },
    resetFormData: () => {
      return initialState;
    },
    // You can add more specific reducers if needed
    updateStep1: (state, action) => {
      state.bookingDate = action.payload.bookingDate;
      state.bookingTime = action.payload.bookingTime;
    },
    updatePersonalDetails: (state, action) => {
      state.fullName = action.payload.fullName;
      state.emailAddress = action.payload.emailAddress;
      // Add other personal details fields...
    }
  }
});

export const { updateFormData, resetFormData, updateStep1, updatePersonalDetails } = bookingFormSlice.actions;

export default bookingFormSlice.reducer;