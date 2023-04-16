import { instanceLogged } from '../../axios';
import myCoursesSlice from '../../store/slices/myCourses';

export const getMyCourses = async (dispatch, len) => {
  if (len > 0) {
    return;
  }
  try {
    //Get courses
    dispatch(myCoursesSlice.actions.startLoading());
    const getMyCourses = await instanceLogged.get('users/me/teacher/courses/');
    dispatch(myCoursesSlice.actions.successLoading(getMyCourses.data));

    // console.log(getCourses.data);
  } catch (e) {
    console.log(e);
    dispatch(myCoursesSlice.actions.failLoading());
    return e;
  }
};
