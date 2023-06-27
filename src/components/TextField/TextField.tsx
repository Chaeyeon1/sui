import * as React from 'react';
import clsx from 'clsx';
interface TextfieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'underline' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}
  
  const baseStyles = 'font-medium rounded  focus:outline-none ';
  
  const sizeStyles = {
    small: 'text-xs px-2.5 py-1.5',
    medium: 'text-sm leading-4 px-3 py-2',
    large: 'text-sm px-4 py-2',
  };
  
  const variantStyles = {
    underline: 'text-black focus:border-solid focus:border-2',
    outlined: 'text-black border border-gray-500 focus:border-solid focus:border-2',
  };
  
  const colorStyles = {
    underline: {
      primary: 'text-black focus:border-primary-500 bg-white border-b-4 border-primary-500',
      secondary: 'text-black focus:border-secondary-500 bg-white border-b-4 border-secondary-500',
    },
    outlined: {
        primary:'focus:border-primary-500',
        secondary: 'focus:border-secondary-500',
    },
  };
  
  const disabledSyles = 'cursor-default pointer-events-none';
  const disabledVariantSyles = {
    underline: 'text-gray-300 bg-gray-100 ',
    outlined: 'border-gray-300 bg-gray-200',
  };
  
  export function TextField({ //우리 컴포넌트 이름
    className,
    variant = 'outlined',
    color = 'primary',
    size = 'medium',
    label,
    disabled = false,
    children,
    ...props
  }:TextfieldProps) {
    const inputClass = disabled
      ? clsx(
          className,
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabledSyles,
          disabledVariantSyles[variant]
        )
      : clsx(
          className,
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          colorStyles[variant][color]
        );
  
    return (
      <div>
        {label&&<div>{label}</div>}
        <input className={inputClass} disabled={disabled} {...props}> 
        </input>
      </div>
    );
    //실제 html 이름
  }
  