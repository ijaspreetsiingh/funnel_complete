import { configureStore } from '@reduxjs/toolkit';
import coachProfileReducer from './coachProfileSlice';
import bookingFormReducer from './booking';
import landingPageReducer from './funnel2';

const store = configureStore({
    reducer: {
        coachProfile: coachProfileReducer,
        bookingForm: bookingFormReducer,
        landingPage: landingPageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});
export default store;