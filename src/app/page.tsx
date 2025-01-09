'use client';
import { FiEye, FiEyeOff } from "react-icons/fi";
import CustomInput from "./components/CustomInput";
import Image from 'next/image'
import { useState } from "react";


export default function Home() {
  const [eye, setEye] = useState(true);

  const toggleEye = () => {
    setEye((previous) => !previous)
  };

  return (
    <div className="w-screen h-screen flex justify-evenly items-center ">
      <Image src={'/authentic-image.webp'}
        alt="learning" width={500} height={200}
      />
      <div className=" w-96 flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold">Sign Up And Start Learning</h1>
        <div className="flex flex-col gap-4 w-full py-2">
          <CustomInput className={'outline-none'}
            label={'First Name :'} />
          <CustomInput className={'outline-none'}
            label={'Last Name :'} />
          <CustomInput className={'outline-none'}
            label={'Email :'} />
          <CustomInput className={'outline-none pr-1'}
            label={'Password :'} onRightIconClick={toggleEye} rightIcon={!eye ? <FiEye /> : <FiEyeOff />} />
          <CustomInput className={'outline-none'}
            label={'Address :'} />
          <div className=" flex items-center gap-1">

            <label htmlFor="" className="w-1/3 text-lg font-medium">Category :</label>
            <select name="" id=""
              className=" px-2 py-1 border rounded bg-slate-200 w-52"
            >
              <option value="">Engineering</option>
              <option value="">Accounting</option>
              <option value="">Photography</option>
              <option value="">Fitness</option>
              <option value="">Design</option>
              <option value="">Ui Ux</option>
            </select>
          </div>
          <div className="flex justify-center mt-3">
            <button className="w-full py-1 bg-purple-500 text-white font-medium rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
