import React from 'react';
import MyCourses from '../../components/MyCourses/MyCourses';
import plus from '../../img/plus.svg'
import { Link } from 'react-router-dom';

const MyCoursesPage = () => {
  return (
    <div className='p-20 w-full h-full flex flex-col box-border'>
      <div className='flex justify-between items-center'>
        <span className='font-mont-bold text-2xl text-black mb-5'>
          Мои курсы
        </span>
        <Link to='/new-course' >
          <img   src={plus}/>
        </Link>
      </div>

      <MyCourses />
    </div>
  );
};

export default MyCoursesPage;
