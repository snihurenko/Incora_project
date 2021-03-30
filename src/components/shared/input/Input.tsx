import React from 'react';
import { InputProps } from '../../../models/formik';
import css from './Input.module.scss';

export const Input = ({ label, error, ...props }: InputProps) => {
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
