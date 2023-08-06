import React, { useEffect } from 'react';
import CardCourse from '../CardCourse/CardCourse';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from '../../constant/statuses';
import { getMyCourses } from './getMyCourses';

const MyCourses = () => {
  const dispatch = useDispatch();

  const isLoading =
    useSelector((state) => state.myCourses.status) === Statuses.inProgress;
  const myCoursesData = useSelector((state) => state.myCourses.myCourses);
  
  console.log(myCoursesData)
  useEffect(() => {
    getMyCourses(dispatch, myCoursesData.length);
  }, []);


  return (
    <div className='flex justify-center flex-wrap'>
      {myCoursesData.length > 0 &&
        myCoursesData.map((course) => (
          <CardCourse
            key={course.id}
            name={course.name}
            description={course.description}
            category={course.category.name}
          />
        ))}
    </div>
  );
};

export default MyCourses;
