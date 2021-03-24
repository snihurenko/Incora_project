import React from 'react';
import { InputProps, FormikInput } from '../../../models/formik';
import css from './Input.module.scss';

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const Input = ({ label, error, ...props }: FormikTextInputProps) => {
  return (
    <div>
      <label>
        <div className={css.label}>{label}</div>
        <input {...props} className={css.input} />
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
