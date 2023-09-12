import React, { useState } from 'react';

import bgLogin from '@/assets/Illustrasi Login.png';
import Logo from '@/assets/Logo.png';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let userCredential = {
      email,
      password,
    };
    dispatch(loginUser(userCredential)).then((result) => {
      console.log(result);
      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    });
  };

  return (
    <div className="sm:grid grid-cols-12">
      <div className="col-span-6 text-center content-center h-screen grid place-items-center">
        <div className="flex items-center mx-auto text-center mb-8">
          <img src={Logo} alt="logo SIMS" className="mr-2" />
          <h3 className="font-semibold">SIMS PPOB</h3>
        </div>
        <h1 className="text-3xl text-center font-inter font-bold w-3/5 mb-12 mx-auto">
          Lengkapi data untuk membuat akun
        </h1>
        <form onSubmit={handleLogin}>
          <div className="relative flex items-center outline outline-2 outline-gray-400 rounded-sm mx-auto w-96 sm:w-80 lg:w-[25rem] mb-8">
            <AtSymbolIcon className="w-5 h-5 absolute ml-2 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="masukkan email"
              required
              className="h-9 w-full pl-9"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative flex items-center outline outline-2 outline-gray-400 rounded-sm mx-auto w-96 sm:w-80 lg:w-[25rem] mb-8">
            <LockClosedIcon className="w-5 h-5 absolute ml-2 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              className="h-9 w-full pl-9"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-red-500 rounded-sm text-white font-normal font-poppins h-10">
            {loading ? 'Loading...' : 'Login'}
          </button>

          {error && <div className="text-red-600 font-semibold">{error}</div>}
        </form>
        <span className="font-poppins font-regular text-sm text-gray-600 mt-8">
          Belum punya akun? Registrasi{' '}
          <Link to={'/register'}>
            <span className="text-red-600">di sini</span>
          </Link>
        </span>
      </div>
      <div className="hidden sm:flex col-span-6">
        <div className="mx-auto">
          <img src={bgLogin} alt="background" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
