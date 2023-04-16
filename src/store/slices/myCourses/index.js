import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../../constant/statuses';

const initialState = {
  myCourses: [],
  status: Statuses.idle,
};

export const myCoursesSlice = createSlice({
  name: 'myCourses',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.myCourses = [];
      console.log(state.status);
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.myCourses = action.payload;
      console.log(state.status);
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.myCourses = [];
      console.log(state.status);
    },
    addOneCourse: (state, action) => {
      state.status = Statuses.success;
      state.myCourses = action.payload;
      console.log(state.status);
    },
  },
});

export const { myCourses } = myCoursesSlice.actions;
export default myCoursesSlice.reducer;
