import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Statuses } from '../../../constant/statuses';
import { getCategories } from './getCategories';

const ListCategories = () => {
  const dispatch = useDispatch();

  //   const isLoading =
  //     useSelector((state) => state.categories.status) === Statuses.inProgress;

  //   const categoriesData = useSelector((state) => state.categories.categories);
  // console.log(coursesData.length);

  //   useEffect(() => {
  //     getCategories(dispatch, categoriesData.length);
  //   }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col'>
        <span className='font-mont-semibold  text-darkGray ml-5'>Категория</span>
        <ul>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-1'
              name='cetegory-1'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-1'>
              IT
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-1'
              name='cetegory-1'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-1'>
              Искусство
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-2'
              name='cetegory-2'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-2'>
              Cпорт
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-3'
              name='cetegory-3'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-3'>
              Естествознание
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-4'
              name='cetegory-4'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-4'>
              Промыслы
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-5'
              name='cetegory-5'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-5'>
              Инженерия
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-6'
              name='cetegory-6'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-6'>
              Математика
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-7'
              name='cetegory-7'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-7'>
              Астрономия
            </label>
          </li>
          <li className='mb-3'>
            <input
              type='radio'
              id='cetegory-8'
              name='cetegory-8'
              className='mr-3'
            />
            <label className='font-mont-semibold text-xl' for='cetegory-8'>
              Гуманитарные науки
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListCategories;
