import React from 'react';
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = (props) => {
    const { placeholder, icon, iconAlt, classes, onChange, value, ...restProps } = props;

    return (
        <div className="relative">
            <input
                placeholder={placeholder}
                className={`border border-gray-300 focus:outline-none focus:border-primary rounded-full px-4 py-2 w-full ${classes}`}
                {...restProps}
                onChange={onChange}
                value={value}
            />
            {icon && 
                <img
                    src={icon}
                    alt={iconAlt}
                    width={25}
                    height={25}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                />
            }
        </div>
    );
}

export default Input;
