import React, { useEffect } from 'react';
import CardCourse from '../CardCourse/CardCourse';
import { getAllCourses } from './getAllCourses';
import { useSelector, useDispatch } from 'react-redux';
import { Statuses } from '../../constant/statuses';

const AllCourses = () => {
  const dispatch = useDispatch();

  const isLoading =
    useSelector((state) => state.courses.status) === Statuses.inProgress;
  // console.log(isLoading);


  const coursesData = useSelector((state) => state.courses.courses);
  // console.log(coursesData);

  useEffect(() => {
    getAllCourses(dispatch, coursesData.length);
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className='flex justify-center flex-wrap'>
      {coursesData.length > 0 &&
        coursesData.map((course) => (
          // console.log(course.name)
          // <CardCourse
          //   key={course.id}
          //   name={course.name}
          //   description={course.description}
          //   category={course.category}
          // />
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

export default AllCourses;
