import { instanceLogged } from '../../axios';
import { coursesSlice } from '../../store/slices/courses';
import { myCoursesSlice } from '../../store/slices/myCourses';

export const postNewCourse = async (dispatch, courseData) => {
  try {
    //Post New Course
    
    dispatch(coursesSlice.actions.startLoading());
    dispatch(myCoursesSlice.actions.startLoading());
    console.log(courseData)
    const postNewCourse = await instanceLogged.post('courses/create/', courseData);
    console.log(postNewCourse.data)
    dispatch(coursesSlice.actions.addOneCourse(postNewCourse.data));
    dispatch(myCoursesSlice.actions.addOneCourse(postNewCourse.data));

    // console.log(getCourses.data);
  } catch (e) {
    console.log(e);
    dispatch(coursesSlice.actions.failLoading());
    return e;
  }
};
