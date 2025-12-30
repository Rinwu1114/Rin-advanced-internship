import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AudioState {
  isPlaying: boolean;
  currentTime: number; //seconds
  duration: number; //seconds
}
const initialState: AudioState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

export const AudioSlice = createSlice({
  name: "Audio",
  initialState,
  reducers: {
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    userSeekTo: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    skipForward: (state, action: PayloadAction<number>) => {
      const sec = action.payload ?? 10;
      let newTime = state.currentTime + sec;
      if (state.duration > 0){
        newTime = Math.min(newTime, state.duration)
      }
      state.currentTime = Math.max(0, newTime);
    },
    Rewind: (state, action: PayloadAction<number>) => {
      const sec = action.payload ?? 10; 
      const newTime = state.currentTime - sec;
      state.currentTime = Math.max(0, newTime);
    },
    stop: (state) => {
        state.isPlaying = false;
    }
  },
});

export const {
  togglePlayPause,
  userSeekTo,
  skipForward,
  Rewind,
  updateProgress,
  setDuration,
  stop
} = AudioSlice.actions;

export default AudioSlice.reducer