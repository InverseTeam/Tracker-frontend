import React from 'react';
import arrow from '../../img/arrow.svg';
import NewCourse from '../../components/NewCourse/NewCourse';
import { Link } from 'react-router-dom';

const NewCoursePage = () => {
  return (
    <div className='p-20 w-full h-full flex flex-col'>
      <div className='flex items-center mb-6'>
        <Link
          to='/my-courses'
          className='font-mont-bold text-2xl text-mainBlue '
        >
          Мои курсы
        </Link>
        <img src={arrow} className='mx-3' />
        <span className='font-mont-bold text-2xl text-black'>Новый курс</span>
      </div>
      <NewCourse/>
    </div>
  );
};

export default NewCoursePage;
