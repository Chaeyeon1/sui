import clsx from 'clsx';
import * as React from 'react';

interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  variant?: 'thin' | 'normal' | 'bold';
  color?: 'primary' | 'secondary';
  state?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const variantStyles = {
  thin: 'h-[10px] flex items-center justify-between',
  normal: 'h-[20px] rounded-full flex items-center justify-between',
  bold: 'h-[45px] rounded-full flex items-center justify-between px-[3px] shadow-inner shadow-gray-700',
};

const colorStyles = {
  primary: {
    thin: 'bg-primary-500',
    normal: 'bg-primary-200',
    bold: 'bg-primary-500',
  },
  secondary: {
    thin: 'bg-secondary-500',
    normal: 'bg-secondary-200',
    bold: 'bg-secondary-500',
  },
};

const sizeStyles = {
  small: 'w-[60px]',
  medium: 'w-[70px]',
  large: 'w-[80px]',
};

const buttonBaseStyles = {
  small: 'rounded-full w-[30px] h-[30px] cursor-pointer',
  medium: 'rounded-full w-[35px] h-[35px] cursor-pointer',
  large: 'rounded-full w-[38px] h-[38px] cursor-pointer',
};

const buttonStyles = {
  thin: {
    primary: 'bg-white border-[3px] border-primary-500',
    secondary: 'bg-white border-[3px] border-secondary-500',
  },
  normal: {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
  },
  bold: {
    primary: 'bg-primary-500 border-white border-[2px]',
    secondary: 'bg-secondary-500 border-[2px] border-white',
  },
};

export function Switch({
  className,
  variant = 'thin',
  color = 'primary',
  // state = true,
  label = 'label',
  size = 'small',
  ...props
}: SwitchProps) {
  const SwitchClass = clsx(
    className,
    variantStyles[variant],
    colorStyles[color][variant],
    sizeStyles[size]
  );

  const [state, setState] = React.useState(true);

  const switching = () => {
    setState(!state);
  };

  return (
    <div className={SwitchClass} {...props}>
      <div>
        {state && (
          <div
            className={clsx(
              buttonBaseStyles[size],
              buttonStyles[variant][color]
            )}
            onClick={switching}
          ></div>
        )}
      </div>
      <div>
        {!state && (
          <div
            className={clsx(
              buttonBaseStyles[size],
              buttonStyles[variant][color]
            )}
            onClick={switching}
          ></div>
        )}
      </div>
    </div>
  );
}
