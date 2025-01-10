'use client';
import { FiEye, FiEyeOff } from "react-icons/fi";
import CustomInput from "./CustomInput";
import Image from 'next/image'
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';


export default function LogInPage() {
  const [eye, setEye] = useState(true);

  interface FormInputs {
    email: string;
    password: string;
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('data', data)
  };

  const toggleEye = (): void => {
    setEye((previous) => !previous)
  };

  return (
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-evenly items-center gap-6 p-4 bg-gray-100"> 
      <div className="w-full lg:w-1/2 flex justify-center">
      <Image src={'/authentic-image.webp'}
        alt="learning" width={500} height={200}
        />
        </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold text-center">Log In And Start Learning</h1>
        <div className="flex flex-col gap-4 w-full py-2">
          <Controller
            name="email"
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInput
                  value={value}
                  onChange={onChange}
                  className={'outline-none'}
                  label={'Email :'} />
                {errors.email ? <p className="text-red-600">{errors.email.message}</p> : null}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              maxLength: 10,
              minLength: 6
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInput
                  value={value}
                  onChange={onChange}
                  className={'outline-none pr-1'} type={`${eye ? 'password' : 'text'}`}
                  label={'Password :'} onRightIconClick={toggleEye} rightIcon={!eye ? <FiEye /> : <FiEyeOff />} />
                {errors.password ? <p className="text-red-600">{errors.password.message}</p> : null}
              </>
            )}
          />
          <div className="flex justify-center mt-3">
            <button onClick={handleSubmit(onSubmit)}
             className="w-full py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-600">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
