import React from 'react';
import { SelectProps } from '../../../models/formik';
import css from './Select.module.scss';

export const Select = ({ label, error, options, ...props }: SelectProps) => {
  return (
    <div>
      <label>
        <div className={css.label}>{label}</div>
        <select {...props} className={css.select}>
          <option value='' label='Choose...' />
          {options!.map((option: string) => (
            <option key={option} value={option} label={option} />
          ))}
        </select>
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
