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
    seekTo: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    skipForward: (state, action: PayloadAction<number>) => {
      const sec = action.payload ?? 10; //default skip 10 sec
      const newTime = state.currentTime + sec;
      state.currentTime = Math.min(newTime, state.duration);
    },
    Rewind: (state, action: PayloadAction<number>) => {
      const sec = action.payload ?? 10; //default rewind 10 sec
      const newTime = state.currentTime - sec;
      state.currentTime = Math.max(0, newTime);
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    stop: (state) => {
        state.isPlaying = false;
    }
  },
});

export const {
  togglePlayPause,
  seekTo,
  skipForward,
  Rewind,
  updateProgress,
  setDuration,
  stop
} = AudioSlice.actions;

export default AudioSlice.reducer