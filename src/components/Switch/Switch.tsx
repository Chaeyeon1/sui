import clsx from 'clsx';
import * as React from 'react';
import { SwitchProps } from './Switch.type';
import {
  sizeStyles,
  variantStyles,
  colorStyles,
  buttonBaseStyles,
  buttonStyles,
  textSizeStyles,
} from './Switch.style';

export function Switch({
  className,
  variant = 'thin',
  color = 'primary',
  label,
  size = 'small',
  ...props
}: SwitchProps) {
  const SwitchClass = clsx(
    className,
    variantStyles[variant],
    colorStyles[variant][color],
    sizeStyles[size]
  );

  const [state, setState] = React.useState(true);

  const switching = () => {
    setState(!state);
  };

  return (
    <div className="flex items-center gap-2">
      <div className={SwitchClass} {...props} onClick={switching}>
        <div>
          {state && (
            <div
              className={clsx(
                buttonBaseStyles[size],
                buttonStyles[variant][color]
              )}
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
            ></div>
          )}
        </div>
      </div>
      {label && <div className={clsx(textSizeStyles[size])}>{label}</div>}
    </div>
  );
}
