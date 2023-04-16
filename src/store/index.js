import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import coursesSlice from './slices/courses';
import categoriesSlice from './slices/categories';
import myCoursesSlice from './slices/myCourses';

const store = configureStore({
  reducer: {
    user: userSlice,
    courses: coursesSlice,
    myCourses: myCoursesSlice,
    categories: categoriesSlice,
  },
});

export default store;
