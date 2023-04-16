import React, { useState } from 'react';
import { handleLogin } from './HandleLogin';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from '../../constant/statuses';
import title from '../../img/title.svg';
import { useAuth } from '../../hooks/useAuth';

import './Login.scss';
import laptop from '../../img/laptop.svg';
import { useNavigate } from 'react-router-dom';

const Login = ({ setModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading =
    useSelector((state) => state.user.status) === Statuses.inProgress;

  const usersData = useSelector((state) => state.user.user);

  if (auth) {
    navigate('/courses')
  }
  // console.log(isLoading);
  // console.log(usersData);

  return (
    <div className='flex w-full h-full'>
      <div className='w-2/4 flex flex-col justify-center items-center'>
        <img src={title} className='w-2/4 mb-8' />
        <img src={laptop} className='img-laptop' />
      </div>
      <div className='w-2/4 flex flex-col justify-center items-center'>
        <div className='data-layout'>
          <span className='font-mont-bold text-2xl mb-10 text-black'>Вход</span>
          <input
            className='input_text mb-5'
            type='email'
            placeholder='Почта'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input_text mb-3'
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='btn-main mb-4'
            onClick={() => handleLogin(dispatch, email, password)}
          >
            Войти
          </button>
          <span
            className='font-mont-semibold text-xl mb-10 underline text-black w-full text-center cursor-pointer'
            onClick={() => setModal(true)}
          >
            Забыли пароль?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
