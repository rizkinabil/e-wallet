import React from 'react';
import ProfilePicture from '@/assets/Avatar.png';
import bgSaldo from '@/assets/bg-saldo.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="col-span-12 lg:col-span-5 p-6">
        <img src={ProfilePicture} alt="profile picture" className="w-16 h-16 mb-7" />
        <span className="font-normal font-inter ">Selamat datang,</span>
        <h1 className="font-bold font-poppins">User</h1>
      </div>
      <div className="relative col-span-12 lg:col-span-7">
        <img src={bgSaldo} alt="background saldo" className="object-fill bg-no-repeat  py-4 ps-4" />
        <div className="absolute z-10 top-10 left-9">
          <span className="text-white font-normal">Saldo anda</span>
          <h1 className="text-white font-bold my-4">Rp 1231231</h1>
          <span className="text-white font-normal text-sm">Tutup Saldo</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
