import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../../constant/statuses';

const initialState = {
  categories: [],
  status: Statuses.idle,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.categories = [];
      console.log(state.status);
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.categories = action.payload;
      console.log(state.status);
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.categories = [];
      console.log(state.status);
    },
    addOneCourse: (state, action) => {
      state.status = Statuses.success;
      state.categories = action.payload;
      console.log(state.status);
    },
  },
});

export const { categories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
