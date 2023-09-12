import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '@/components/Hero.jsx';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Payment = () => {
  const routerParams = useParams();
  const [paymentContent, setPaymentContent] = useState([]);

  const urlApi = import.meta.env.VITE_URL_API;

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const dataService = await axios.get(`${urlApi}/services`, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        });
        setPaymentContent(dataService.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataService();
  });

  const serviceSelected = paymentContent.filter((obj) => {
    return obj.service_code === routerParams.paymentCode;
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="px-10 sm:px-14">
        <div className="mx-auto mt-[400px] grid mb-7 sm:mt-92 lg:mt-40">
          <h1 className="font-normal text-sm">PemBayaran</h1>
          {serviceSelected.map((item, index) => {
            return (
              <div className="flex items-center" key={index}>
                <img src={item.service_icon} alt={item.service_code} className="w-5 h-5" />
                <h3 className="text-sm font-bold">{item.service_name}</h3>
              </div>
            );
          })}
        </div>
        <form action="" className="flex flex-col mx-auto">
          {serviceSelected.map((item, index) => {
            return (
              <input
                type="text"
                className="outline outline-1 outline-gray-400 rounded-[5px] ps-4 py-2 mb-7"
                value={item.service_tariff}
                key={index}
              />
            );
          })}
          <input
            type="button"
            className="outline px-4 outline-1 rounded-[5px] text-white font-inter font-semibold bg-gray-400 hover:bg-gray-600"
            value={'Bayar'}
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
