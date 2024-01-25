import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    icon?: string;
    classes?: string;
    iconAlt?: string;
  }