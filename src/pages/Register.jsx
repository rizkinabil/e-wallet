import React from 'react';
import { AtSymbolIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Logo from '@/assets/Logo.png';
import bgLogin from '@/assets/Illustrasi Login.png';

const formRegister = [
  {
    label: 'email',
    icon: <AtSymbolIcon className="w-5 h-5 absolute ml-2 text-gray-500" />,
    type: 'text',
    placeholder: 'masukkan alamat email anda',
  },
  {
    label: 'firstName',
    icon: <UserIcon className="w-5 h-5 absolute ml-2 text-gray-500" />,
    type: 'text',
    placeholder: 'nama depan',
  },
  {
    label: 'lastName',
    icon: <UserIcon className="w-5 h-5 absolute ml-2 text-gray-500" />,
    type: 'text',
    placeholder: 'nama belakang',
  },
  {
    label: 'password',
    icon: <LockClosedIcon className="w-5 h-5 absolute ml-2 text-gray-500" />,
    type: 'password',
    placeholder: 'buat password',
  },
  {
    label: 'password',
    icon: <LockClosedIcon className="w-5 h-5 absolute ml-2 text-gray-500" />,
    type: 'password',
    placeholder: 'konfirmasi password',
  },
];

const Register = () => {
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
        <form action="">
          {formRegister.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex items-center outline outline-2 outline-gray-400 rounded-sm mx-auto w-96 sm:w-80 lg:w-[25rem] mb-6"
              >
                {item.icon}
                <input type={item.type} placeholder={item.placeholder} className="h-9 w-full pl-9" />
              </div>
            );
          })}
          <button type="submit" className="w-full bg-red-500 rounded-sm text-white font-normal font-poppins h-10">
            Registrasi
          </button>
        </form>
        <span className="font-poppins font-regular text-sm text-gray-600 mt-8">
          Sudah punya akun? Login{' '}
          <span className="text-red-600">
            <a href="/login">di sini</a>
          </span>
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

export default Register;
