import React, { useState } from 'react';
import clsx from 'clsx';

interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  open?: boolean;
  title?: string;
}

const baseStyles =
  'flex align-middle justify-between cursor-pointer rounded-t font-medium shadow-gray-300 items-center';

const sizeStyles = {
  small: 'text-xs px-2.5 py-1.5',
  medium: 'text-sm leading-4 px-3 py-2',
  large: 'text-sm px-4 py-2',
};

const colorStyles = {
  primary:
    'text-black shadow-md shadow-gray-300 hover:bg-primary-50 active:bg-primary-100',
  secondary:
    'text-black bg-transparent hover:bg-secondary-50 active:bg-secondary-100',
};

const disabledSyles = 'cursor-default pointer-events-none';

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return <div {...props}>{children}</div>;
};

export const AccordionSummary = ({
  className,
  open = false,
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  title,
  ...props
}: AccordionProps) => {
  const [close, setClose] = useState(false);
  const accordionClass = disabled
    ? clsx(className, baseStyles, sizeStyles[size], disabledSyles)
    : clsx(className, baseStyles, sizeStyles[size], colorStyles[color]);

  return (
    <div onClick={() => setClose(!close)} className={accordionClass} {...props}>
      {title}
      {children}
      {close ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
            fill="#9099AE"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
            fill="#9099AE"
          />
        </svg>
      )}
    </div>
  );
};
