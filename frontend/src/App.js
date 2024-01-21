import React, { useState } from 'react';

export default function App() {
  // const [data, setData] = useState([]);
  const [counter, setCounter] = useState(7);

  // const getData = async () => {
  //   let res = await fetch("url", {
  //     method: 'GET'
  //   });

  //   const resResult = res.json();
  //   console.log(resResult);
  //   setData(resResult);
  //   return resResult;
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className='flex flex-col justify-start h-screen w-full text-white bg-appBg'>
      <h1 className="cursor-default select-none flex justify-center items-center mt-5 font-semibold tracking-wide text-3xl uppercase">✨ Welcome to MERN STACK Application ✨</h1>
      <div className='h-full w-full flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center items-center gap-10'>
          <button className='py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-400 shadow-inner active:shadow-xl active:shadow-gray-800' onClick={() => {
            setCounter(counter + 1)
          }}>+</button>
          <p className='text-5xl'>{counter}</p>
          <button className='py-5 px-10 text-2xl font-bold rounded-md bg-appBg shadow-gray-400 shadow-inner active:shadow-xl active:shadow-gray-800' onClick={() => {
            setCounter(counter - 1)
          }}>-</button>
        </div>
        <button className='py-3 px-16 text-2xl font-bold rounded-md bg-appBg shadow-gray-400 shadow-inner active:shadow-xl active:shadow-gray-800' onClick={() => {
          setCounter(0)
        }}>Reset</button>
      </div>
      {/* {
          data && data?.map((res, index) => {
            return (
              <div className= 'flex w-full flex-col justify-center items-center' key={index}>
                <p>Username :- {res.name}</p>
                <p>Email ID :- {res.email} </p>
              </div>
            );
          })
        } */}
    </div>
  );
}