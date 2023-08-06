import React from 'react';
import AllCourses from '../../components/AllCourses/AllCourses';

const AllCoursesPage = () => {

  
  return (
    <div className='p-20 w-fit h-full flex flex-col box-border'>
      <span className='font-mont-bold text-2xl text-black mb-5'>
        Все курсы
      </span>

      <AllCourses/>
    </div>
  );
};

export default AllCoursesPage;
