import React, { FC, useState } from 'react';
import { ISelectProps } from "./types";
import CloseIcon from '../../assets/icons/close.svg';

const Select: FC<ISelectProps> = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        onChange && onChange(event.target.value as any);
    };

    const handleClearSelection = () => {
        setSelectedOption(null);
        onChange && onChange('' as any);
    };

    return (
        <div className="relative">
            <select
                className="p-2 border border-gray-300 text-gray-800 focus:outline-none rounded-full"
                onChange={handleSelectChange}
                value={selectedOption || ''}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {selectedOption && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <button
                        className="text-gray-500 hover:text-red-500 focus:outline-none"
                        onClick={handleClearSelection}
                    >
                        <img src={CloseIcon} width={10} height={10} alt="Close" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Select;
