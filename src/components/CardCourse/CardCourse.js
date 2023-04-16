import React from 'react';
import time from '../../img/Course/time.svg';
import title from '../../img/titleWrap.svg';
import laptop from '../../img/laptop.svg';
import './CardCourse.scss'

const CardCourse = (props) => {
  // const course = {
  //   name: 'Вязание бархатных тяг',
  //   description: 'Вы научитесь вязать лучшие бархатные тяги в мире.',
  //   category: 'вязание',
  // };
  // console.log(props)

  return (
    <div className='w-72 shadow-lg rounded-2xl bg-gray-200 mb-5 mx-5'>
      <div className='flex items-center justify-between px-6 py-2'>
        <img src={title}/>
        <img src={laptop} className='w-24' />
      </div>
      <div className='w-full h-40 px-6 py-4 rounded-lg bg-lightGray flex flex-col justify-between'>
        <span className='font-mont-semibold text-sm text-black'>
          {props.name}
        </span>
        <div className='flex items-center mb-2'>
          <img src={time} className='mr-1' />
          <span className='font-mont-semibold text-xs text-mainBlue'>
            Пн, Ср, Пт
          </span>
        </div>
        <span className='description font-mont-semibold text-xs text-darkGray mb-3 h-8'>
          {props.description}
        </span>
        <span className='font-mont-semibold text-xs text-mainBlue rounded-full bg-white p-2 w-fit'>
          {props.category}
        </span>
      </div>
    </div>
  );
};

export default CardCourse;
