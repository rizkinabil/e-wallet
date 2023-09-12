import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout.jsx';
import HeroSection from '@/components/Hero.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './Login';

function getUser() {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const LandingPage = () => {
  const [menu, setMenu] = useState([]);
  const [banner, setBanner] = useState([]);

  const [user] = useState(getUser());

  const dispatch = useDispatch();

  const urlApi = import.meta.env.VITE_URL_API;

  useEffect(() => {
    const fetchDataMenu = async () => {
      try {
        const dataService = await axios.get(`${urlApi}/services`, {
          headers: {
            Authorization: `bearer ${user.token}`,
          },
        });
        setMenu(dataService.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataMenu();
  });

  useEffect(() => {
    const fetchDataBanner = async () => {
      try {
        const dataBanner = await axios.get(`${urlApi}/banner`, {
          headers: {
            Authorization: `bearer ${user.token}`,
          },
        });
        setBanner(dataBanner.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataBanner();
  });

  return (
    <>
      {user ? (
        <Layout>
          <HeroSection data={user} />
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 mt-[400px] lg:mt-40 mb-12 gap-3 mx-auto max-w-screen-xl justify-between px-4 text-center">
            {menu.map((item) => {
              return (
                <Link
                  to={`/payment/${item.service_code}`}
                  key={item.service_code}
                  onClick={() =>
                    dispatch({
                      service_code: `${item.service_code}`,
                      service_name: `${item.service_name}`,
                      service_icon: `${item.service_icon}`,
                      service_tarif: `${item.service_tariff}}`,
                    })
                  }
                >
                  <div className="flex-col items-center text-center hover:cursor-pointer hover:shadow-sm hover:scale-125">
                    <img src={item.service_icon} alt={item.service_name} className="mx-auto mb-2" />
                    <h3 className="w-20 mx-auto">{item.service_name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mx-auto grid-cols-12 text-center lg:text-start xl:max-w-screen-xl">
            <div className="mx-auto container">
              <h3 className="font-inter font-semibold mb-4">Temukan promo menarik</h3>
              <div className="grid grid-cols-1 md:grid md:grid-cols-3 xl:flex overflow-x-auto gap-4 no-scrollbar">
                {banner.map((item, index) => {
                  return (
                    <img
                      src={item.banner_image}
                      alt={item.banner_name}
                      key={index}
                      className="w-[36rem] mx-auto px-8"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default LandingPage;
