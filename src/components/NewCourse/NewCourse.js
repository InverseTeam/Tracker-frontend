import React, { useState } from 'react';
import folder from '../../img/Course/Folder.svg';
import ListCategories from './ListCategories/ListCategories';
import { useSelector } from 'react-redux';

const NewCourse = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [groupName, setGroupName] = useState('');
  const [number, setNumber] = useState('');
  const [time, setTime] = useState('');

  const teacherData = useSelector((state) => state.user.user);
  console.log(teacherData);
  
  const courseData = {
    name: name,
    description: description,
  };

  return (
    <div className='flex flex-col'>
      <span className='font-mont-bold text-2xl text-black mb-6'>
        Новый курс
      </span>
      <div className='flex justify-between mb-10'>
        <div className='flex flex-col'>
          <span className='font-mont-semibold  text-darkGray ml-5'>
            Название
          </span>
          <input
            className='input_text mb-6'
            type='text'
            placeholder='Название курса'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <span className='font-mont-semibold  text-darkGray ml-5'>Место</span>
          <input
            className='input_text mb-6'
            type='text'
            placeholder='Место проведения'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <span className='font-mont-semibold  text-darkGray ml-5'>
            Описание
          </span>
          <textarea
            className='textarea mb-6 h-40 resize-none '
            type='text'
            placeholder='Краткая информация о курсе'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <input
            type='file'
            name='file'
            id='file'
            placeholder='Шаблон файла'
            accept='.pdf'
            className='w-0 h-0 opacity-0 overflow-hidden absolute z-0'
          />
          <label for='file'>
            <div className='btn-additional flex items-center justify-center mb-4'>
              <img src={folder} className='mx-3' />
              <span>Прикрепить обложку</span>
            </div>
          </label>
          <span>Файлы PDF</span>
          {/* <div className='btn-additional flex items-center justify-center mb-4'>
        <img src={folder} className='mx-3' />
        <span>Прикрепить обложку</span>
      </div>

      <div className='btn-additional flex items-center justify-center mb-9'>
        <img src={folder} className='mx-3' />
        <span>Прикрепить шаблон докуметов</span>
      </div> */}
        </div>
        <ListCategories />
      </div>

      <span className='font-mont-bold text-2xl text-black mb-8'>Групп</span>
      <span className='font-mont-semibold  text-darkGray ml-5'>Название</span>
      <input
        className='input_text mb-6'
        type='text'
        placeholder='Название группы'
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <span className='font-mont-semibold  text-darkGray ml-5'>
        Лимит учеников
      </span>
      <input
        className='input_text mb-6'
        type='text'
        placeholder='Количество человек'
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />

      <span className='font-mont-semibold  text-darkGray ml-5 mb-3'>
        День занятий
      </span>

      <ul className='mb-6'>
        <li className='mb-3'>
          <input type='checkbox' id='mon' name='mon' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='mon'>
            Понедельник
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='tue' name='tue' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='tue'>
            Вторник
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='wen' name='wen' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='wen'>
            Среда
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='thu' name='thu' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='thu'>
            Четверг
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='fri' name='fri' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='fri'>
            Пятница
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='sat' name='sat' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='sat'>
            Суббота
          </label>
        </li>
        <li className='mb-3'>
          <input type='checkbox' id='sun' name='sun' className='mr-3' />
          <label className='font-mont-semibold text-xl' for='sun'>
            Воскресенье
          </label>
        </li>
      </ul>

      <span className='font-mont-semibold  text-darkGray ml-5'>Время</span>
      <input
        className='input_text mb-6'
        type='time'
        placeholder='Время занятий'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className='btn-main mb-10'>Опубликовать</button>
    </div>
  );
};

export default NewCourse;
