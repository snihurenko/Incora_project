import React from 'react';
import { SelectProps } from '../../../models/formik';
import css from './Select.module.scss';

export const Select = ({ label, error, ...props }: SelectProps) => {
  return (
    <div>
      <label>
        <div className={css.label}>{label}</div>
        <select className={css.select} {...props}>
          <option value='' label='Choose...' />
          <option value='Ukraine' label='Ukraine' />
          <option value='Germany' label='Germany' />
          <option value='USA' label='USA' />
        </select>
        {error && <div className={css.error}>{error}</div>}
      </label>
    </div>
  );
};
