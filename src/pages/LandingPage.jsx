import React from 'react';
import Layout from '@/components/Layout.jsx';
import HeroSection from '@/components/Hero.jsx';
import { menuServices, bannerList } from '../constants';

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="sm:flex lg:flex mt-36 mb-12 gap-3 mx-auto grid-cols-12 max-w-screen-xl justify-between px-4 text-center">
        {menuServices.map((item) => {
          return (
            <div className="inline-block md:grid-cols-3 sm:grid-cols-2 text-center" key={item.title}>
              <img
                src={item.logo}
                alt={item.title}
                className="mx-auto
              "
              />
              <h3 className="w-20">{item.title}</h3>
            </div>
          );
        })}
      </div>
      <div className="mx-auto grid-cols-12 max-w-screen-xl px-4">
        <h3 className="font-inter font-semibold ">Temukan promo menarik</h3>
        <div className="xl:flex md:grid md:grid-cols-3 overflow-x-auto gap-4 no-scrollbar grid grid-cols-1">
          {bannerList.map((item) => {
            return <img src={item.image} alt={item.img} key={item.image} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
