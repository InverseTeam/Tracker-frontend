import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../../constant/statuses';

const initialState = {
  courses: [],
  status: Statuses.idle,
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.courses = [];
      console.log(state.status);
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.courses = action.payload;
      console.log(state.status);
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.courses = [];
      console.log(state.status);
    },
    addOneCourse: (state, action) => {
      state.status = Statuses.success;
      state.courses = action.payload;
      console.log(state.status);
    },
  },
});

export const { courses } = coursesSlice.actions;
export default coursesSlice.reducer;
