import clsx from 'clsx';
import * as React from 'react';

interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary' | 'lightPrimary' | 'lightSecondary' | 'basic';
  title?: string;
  content?: string;
  action1?: string;
  action2?: string;
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
}

const baseStyles = 'z-100 drop-shadow-lg flex flex-col justify-between';

const colorStyles = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-secondary-500 text-white',
  lightPrimary: 'bg-primary-50 text-black',
  lightSecondary: 'bg-secondary-50 text-black',
  basic: 'bg-white text-black',
};

const sizeStyles = {
  small: 'min-w-[250px] w-fit h-24 py-3 px-5 ',
  medium: 'min-w-[350px] w-fit h-36 p-6',
  large: 'min-w-[450px] w-fit h-44 p-8',
};

const titleStyles = {
  small: 'text-lg font-bold',
  medium: 'text-xl font-bold',
  large: 'text-2xl font-bold',
};

const textStyles = {
  small: 'text-base',
  medium: 'text-lg',
  large: 'text-xl',
};

const actionBaseStyles = {
  small: 'cursor-pointer text-base',
  medium: 'cursor-pointer text-lg',
  large: 'cursor-pointer text-xl',
};

const action1Styles = {
  primary: '',
  secondary: '',
  lightPrimary: 'text-green-800',
  lightSecondary: 'text-green-800',
  basic: 'text-green-800',
};

const action2Styles = {
  primary: '',
  secondary: '',
  lightPrimary: 'text-red-600',
  lightSecondary: 'text-red-600',
  basic: 'text-red-600',
};

export function Dialog({
  className,
  color = 'primary',
  title,
  content,
  action1,
  action2,
  size = 'medium',
  open = true,
  ...props
}: DialogProps) {
  const dialogClass = clsx(
    className,
    baseStyles,
    colorStyles[color],
    sizeStyles[size]
  );

  return (
    <div className={dialogClass} {...props}>
      <div className={clsx(titleStyles[size])}>{title}</div>
      <div className={clsx(textStyles[size])}>{content}</div>
      <div className="flex justify-end gap-4">
        <div className={clsx(action1Styles[color], actionBaseStyles[size])}>
          {action1}
        </div>
        <div className={clsx(action2Styles[color], actionBaseStyles[size])}>
          {action2}
        </div>
      </div>
    </div>
  );
}