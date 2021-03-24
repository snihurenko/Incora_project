import React from 'react';
import { InputProps, FormikRadio } from '../../../models/formik';
import css from './Radio.module.scss';

export interface FormikRadioProps extends FormikRadio<InputProps> {
  type: 'radio';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const RadioButton = ({ label, error, ...props }: FormikRadioProps) => {
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
