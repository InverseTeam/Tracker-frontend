import { instanceLogged } from '../../axios';
import { coursesSlice } from '../../store/slices/courses';

export const getAllCourses = async (dispatch, len) => {
  if (len > 0) {
    return;
  }
  try {
    //Post New Course
    
    dispatch(coursesSlice.actions.startLoading());
    const postNewCourse = await instanceLogged.post('courses/create/', );
    dispatch(coursesSlice.actions.addOneCourse(postNewCourse.data));

    // console.log(getCourses.data);
  } catch (e) {
    console.log(e);
    dispatch(coursesSlice.actions.failLoading());
    return e;
  }
};
