import React from 'react';
import { InputProps, FormikCheckbox } from '../../../models/formik';
import css from './Checkbox.module.scss';

export interface FormikCheckboxProps extends FormikCheckbox<InputProps> {
  type: 'checkbox';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const Checkbox = ({ label, error, ...props }: FormikCheckboxProps) => {
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
