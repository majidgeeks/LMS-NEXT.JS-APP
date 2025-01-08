import { ReactNode } from "react";

interface CustomInput{
    label? : string;
    className? : string;
    rightIcon? : ReactNode;
    placeholder? : string;
    type? : string;
}

const CustomInput : React.FC<CustomInput> = ({ label, className, rightIcon, placeholder, type }) => {
    return (
        <div className="flex items-center w-full">
            <label htmlFor="" className="w-1/3 text-lg font-medium">{label}</label>
            <div className="flex items-center bg-slate-200 px-2 rounded">
                <input type={type} placeholder={placeholder} className={`bg-slate-200 flex-grow outline-none, ${className}`} />
                <button className="text-gray-500 cursor-pointer">{rightIcon}</button>

            </div>
        </div>
    )
};

export default CustomInput;