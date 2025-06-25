import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FunnelState {
    colorSegment: string;
    heroMedia: string;
    mediaType: 'image' | 'video' | 'default';
}

const initialState: FunnelState = {
    colorSegment: '',
    heroMedia: '',
    mediaType: 'default'
};

const funnelSlice = createSlice({
    name: 'funnel',
    initialState,
    reducers: {
        setColorSegment: (state, action: PayloadAction<string>) => {
            state.colorSegment = action.payload;
            // Save to localStorage
            localStorage.setItem('funnelColorSegment', action.payload);
        },
        setHeroMedia: (state, action: PayloadAction<string>) => {
            state.heroMedia = action.payload;
            localStorage.setItem('funnelHeroMedia', action.payload);
        },
        setMediaType: (state, action: PayloadAction<'image' | 'video' | 'default'>) => {
            state.mediaType = action.payload;
            localStorage.setItem('funnelMediaType', action.payload);
        },
        loadFromLocalStorage: (state) => {
            const colorSegment = localStorage.getItem('funnelColorSegment') || '';
            const heroMedia = localStorage.getItem('funnelHeroMedia') || '';
            const mediaType = localStorage.getItem('funnelMediaType') as 'image' | 'video' | 'default' || 'default';
            
            return {
                ...state,
                colorSegment,
                heroMedia,
                mediaType
            };
        }
    }
});

export const { setColorSegment, setHeroMedia, setMediaType, loadFromLocalStorage } = funnelSlice.actions;
export default funnelSlice.reducer;