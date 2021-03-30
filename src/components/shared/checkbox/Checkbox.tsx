import React from 'react';
import { InputProps } from '../../../models/formik';
import css from './Checkbox.module.scss';

type Checkbox<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
interface CheckboxProps extends Checkbox<InputProps> {
  type: 'checkbox';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const Checkbox = ({ label, error, ...props }: CheckboxProps) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <input {...props} />
        {label}
      </label>
      {error && <div className={css.error}>{error}</div>}
    </div>
  );
};
