import React, { FC } from 'react';
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = (props) => {
    const { children, icon, iconAlt, onClick, classes, ...restProps } = props;

    return (
        <button
            onClick={onClick}
            className={`flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${classes}`}
            {...restProps}
        >
            {icon && (
                <img
                    src={icon}
                    alt={iconAlt}
                    width={25}
                    height={25}
                    className="mr-2"
                />
            )}
            <span>{children}</span>
        </button>
    );
}

export default Button;
