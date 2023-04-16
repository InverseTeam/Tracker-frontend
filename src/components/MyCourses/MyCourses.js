import React from 'react';
import CardCourse from '../CardCourse/CardCourse';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from '../../constant/statuses';

const MyCourses = () => {
  const dispatch = useDispatch();

  const isLoading =
    useSelector((state) => state.myCourses.status) === Statuses.inProgress;
  const myCoursesData = useSelector((state) => state.myCourses.myCourses);

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
