'client';
import { FiEye } from "react-icons/fi";
import CustomInput from "./components/CustomInput";


export default function Home() {
  return (
    <div className="w-full flex justify-evenly items-center bg-yellow-100">

      <img
        src="https://frontends.udemycdn.com/components/auth/desktop-illustration-x1.webp" alt="learning" width={500} />


      <div className=" w-96 h-96 flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold">Sign Up And Start Learning</h1>
        <div className="flex flex-col gap-4 w-full py-2">
          <CustomInput className={'outline-none'}
            label={'First Name :'} />
          <CustomInput className={'outline-none'}
            label={'Last Name :'} />
          <CustomInput className={'outline-none'}
            label={'Email :'} />
          <CustomInput className={'outline-none'}
            label={'Address :'} />
            <label htmlFor="">Category</label>
        </div>
      </div>
    </div>
  )
}
