import React from 'react';
import { InputProps } from '../../../models/formik';
import css from './Radio.module.scss';

type Radio<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
interface RadioProps extends Radio<InputProps> {
  type: 'radio';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const RadioButton = ({ label, error, ...props }: RadioProps) => {
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
