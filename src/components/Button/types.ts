import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    icon?: string;
    iconAlt?: string;
    onClick: () => void;
    classes?: string;
}