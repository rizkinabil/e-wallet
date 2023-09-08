import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const topupNominal = [
  {
    value: '10.000',
  },
  {
    value: '20.000',
  },
  {
    value: '50.000',
  },
  {
    value: '100.000',
  },
  {
    value: '250.000',
  },
  {
    value: '500.000',
  },
];

function TopUp() {
  return (
    <Layout>
      <Hero />
      <div className="px-4 py-8 mx-auto grid-cols-12 max-w-screen-xl">
        <div className="mt-32">
          <h3 className="font-inter font-normal text-2xl text-gray-700">Silahkan masukan</h3>
          <h1 className="font-inter text-4xl font-bold">Nominal Top Up</h1>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-12">
          <form className="grid grid-rows-2 col-span-7 gap-4">
            <input
              type="text"
              placeholder="Masukan Nominal Top Up"
              className="outline outline-1 outline-gray-400 rounded-[5px] ps-4 py-2"
            />
            <input
              type="button"
              className="outline px-4 outline-1 rounded-[5px] text-white font-inter font-semibold bg-gray-400 hover:bg-gray-600"
              value={'Top Up'}
            />
          </form>
          <div className="grid col-span-5 grid-cols-3 gap-4">
            {topupNominal.map((item) => {
              return (
                <button
                  className="font-inter font-normal text-center outline outline-1 outline-gray-400 rounded-[5px] hover:bg-gray-400 hover:text-white"
                  key={item.value}
                >
                  Rp{item.value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TopUp;
