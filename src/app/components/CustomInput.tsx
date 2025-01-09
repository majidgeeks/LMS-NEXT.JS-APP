import { ReactNode } from "react";

interface CustomInput{
    label? : string;
    className? : string;
    rightIcon? : ReactNode;
    placeholder? : string;
    type? : string;
    onRightIconClick? : () => void;
}

const CustomInput : React.FC<CustomInput> = ({ label, className, rightIcon, placeholder, type, onRightIconClick  }) => {
    return (
        <div className="flex items-center w-full">
            <label htmlFor="" className="w-1/3 text-lg font-medium">{label}</label>
            <div className="flex items-center bg-slate-200 px-2 rounded w-2/3">
                <input type={type} placeholder={placeholder} className={`bg-slate-200 flex-grow outline-none, ${className}`} />
                {rightIcon && (
                    <button className="cursor-pointer" onClick={onRightIconClick}>{rightIcon}</button>
                )}

            </div>
        </div>
    )
};

export default CustomInput;