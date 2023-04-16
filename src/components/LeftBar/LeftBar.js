import React from 'react';
import group from '../../img/LeftBar/Group.svg';
import vector from '../../img/LeftBar/Vector.svg';
import allcoursesActive from '../../img/LeftBar/allCoursesActive.svg';
import title from '../../img/title.svg';
import './LeftBar.scss';
import AllCoursesIcon from '../../img/icon/AllCoursesIcon';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  const pathName = window.location.pathname;

  return (
    <div className='w-1/4 h-full shadow-lg p-11 box-border'>
      {/* <AllCoursesIcon /> */}
      {/* <svg src={allcoursesActive} className='test'/> */}
      {/* <img src={vector} className='test'/> */}

      <img src={title} className='mb-20' />
      <ul className='w-full'>
        <li>
          <Link to='/my-courses' className='link-my-courses'>
            {pathName === '/my-courses' ? (
              <div className=''>
                <div className='iconActive' />
                <span className='font-mont-bold text-2xl  text-mainBlue'>
                  Мои курсы
                </span>
              </div>
            ) : (
              <>
                <div className='icon' />
                <span className='font-mont-bold text-2xl  text-darkGray hover:text-mainBlue'>
                  Мои курсы
                </span>
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to='/courses' className='link-all-courses'>
            {pathName === '/courses' ? (
              <>
                <div className='iconActive' />
                <span className='font-mont-bold text-2xl  text-mainBlue'>
                  Все курсы
                </span>
              </>
            ) : (
              <>
                <div className='icon' />
                <span className='font-mont-bold text-2xl  text-darkGray hover:text-mainBlue'>
                  Все курсы
                </span>
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to='/courses' className='link-news'>
            {pathName === '/news' ? (
              <>
                <div className='iconActive' />
                <span className='font-mont-bold text-2xl  text-mainBlue'>
                  Новости
                </span>
              </>
            ) : (
              <>
                <div className='icon' />
                <span className='font-mont-bold text-2xl  text-darkGray hover:text-mainBlue'>
                  Новости
                </span>
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to='/courses' className='link-all-courses'>
            {pathName === '/profile' ? (
              <>
                <div className='iconActive' />
                <span className='font-mont-bold text-2xl  text-mainBlue'>
                  Профиль
                </span>
              </>
            ) : (
              <>
                <div className='icon' />
                <span className='font-mont-bold text-2xl  text-darkGray hover:text-mainBlue'>
                  Профиль
                </span>
              </>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
