import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(3);
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("http://localhost:4000/info", {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col justify-between  h-screen w-full text-white bg-appBg'>
      <h1 className={counter % 3 === 0 ? "cursor-default select-none flex justify-center items-center mt-5 font-bold tracking-wide text-3xl uppercase text-purple-500" : "cursor-default select-none flex justify-center items-center mt-5 font-semibold tracking-wide text-3xl uppercase"}>✨ Welcome to MERN STACK Application ✨</h1>
      <div className='h-full w-full flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center items-center gap-10'>
          <button className={counter % 3 === 0 ? 'py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800 text-purple-400' : 'py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800'} onClick={() => {
            setCounter(counter - 1)
          }}>-</button>
          <p className={counter % 3 === 0 ? 'font-bold text-purple-400 text-4xl' : 'text-light text-4xl'}>{counter}</p>
          <button className={counter % 3 === 0 ? 'py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800 text-purple-400' : 'py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800'} onClick={() => {
            setCounter(counter + 1)
          }}>+</button>
        </div>
        <button className={counter % 3 === 0 ? 'py-3 px-16 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800 text-purple-400' : 'py-3 px-16 text-2xl font-bold rounded-md bg-appBg shadow-gray-700 shadow-inner active:shadow-xl active:shadow-gray-800'} onClick={() => {
          setCounter(3)
        }}>Reset</button>
      </div>
      <div className='flex flex-col h-full w-full justify-center items-center gap-10'>
        <h1 className='text-4xl uppercase'>🌿 Data coming from backend 🌿</h1>
        {
          data && data?.map((res, index) => {
            return (
              <div className='flex justify-center items-start flex-col' key={index}>
                <p className='font-light text-gray-300'>Username :- <span className='font-bold'>{res.name}</span></p>
                <p className='font-light text-gray-300'>Email ID :- <span className='font-bold'>{res.emailID}</span></p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}