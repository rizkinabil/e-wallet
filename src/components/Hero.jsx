import React from 'react';
import ProfilePicture from '@/assets/Avatar.png';
import bgSaldo from '@/assets/bg-saldo.png';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

const Hero = (data) => {
  return (
    <div className="hero">
      <div className="col-span-12 mx-auto text-center lg:text-left lg:mx-0 lg:col-span-5 p-6">
        <img src={ProfilePicture} alt="profile picture" className="mx-auto w-32 h-32 lg:w-16 lg:h-16 lg:mx-0 mb-7" />
        <span className="font-normal font-inter ">Selamat datang,</span>
        <h1 className="font-bold font-poppins">{data.first_name}</h1>
      </div>
      <div className="relative col-span-12 lg:col-span-7">
        <img
          src={bgSaldo}
          alt="background saldo"
          className="object-fill bg-no-repeat float-right h-[11.625rem] w-full"
        />
        <div className="absolute z-10 top-[2.375rem] left-[3.75rem]">
          <span className="text-white font-normal font-inter text-[16px]">Saldo anda</span>
          <h1 className="text-white font-bold my-4 text-[2rem]">Rp 1231231</h1>
          <div className="flex items-center w-[200px]">
            <span className="text-white font-normal text-[14px]">Tutup Saldo </span>
            <EyeSlashIcon className="text-white w-6 h-6 pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
