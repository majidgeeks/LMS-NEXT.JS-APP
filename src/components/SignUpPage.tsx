'use client';
import { FiEye, FiEyeOff } from "react-icons/fi";
import CustomInput from "./CustomInput";
import Image from 'next/image'
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';


export default function SignUpPage() {
  const [eye, setEye] = useState(true);

  interface FormInputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    category: string;
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      category: '',
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
      <div className=" w-full lg:w-1/2 flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold text-center">Sign Up And Start Learning</h1>
        <div className="flex flex-col gap-4 w-full py-2">
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value }, }) => (
              <>
                <CustomInput
                  value={value}
                  onChange={onChange}
                  className={'outline-none'}
                  label={'First Name :'} />
                {errors.firstName ? <p className="text-red-600">{errors.firstName.message}</p> : null}
              </>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInput className={'outline-none'}
                  label={'Last Name :'}
                  value={value}
                  onChange={onChange}
                />
                {errors.lastName ? <p className="text-red-600">{errors.lastName.message}</p> : null}
              </>
            )}
          />
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
                  label={'Password :'} onRightIconClick={toggleEye} rightIcon={!eye ? <FiEye /> : <FiEyeOff />} 
                  rightIconStyle="bg-red"
                  />
                {errors.password ? <p className="text-red-600">{errors.password.message}</p> : null}
              </>
            )}
          />
          <Controller
            name="address"
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInput
                  onChange={onChange}
                  value={value}
                  className={'outline-none'}
                  label={'Address :'} />
                {errors.address ? <p className="text-red-600">{errors.address.message}</p> : null}
              </>
            )}
          />
          <div className=" flex items-center gap-1">

            <label htmlFor="" className="w-1/3 text-lg font-medium">Category :</label>
            <Controller
              name="category"
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <select
                    onChange={onChange}
                    value={value}
                    name="" id=""
                    className=" px-2 py-1 border rounded bg-slate-200 w-52"
                  >
                    <option value="">Select</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Photography">Photography</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Design">Design</option>
                    <option value="Ui Ux">Ui Ux</option>
                  </select>
                  {errors.category ? <p>{errors.category.message}</p> : null}
                </>
              )}
            />
          </div>
          <div className="flex justify-center mt-3">
            <button onClick={handleSubmit(onSubmit)}
              className="w-full py-1 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-600">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
