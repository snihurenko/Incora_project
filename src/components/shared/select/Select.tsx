import React from 'react';
import css from './Select.module.scss';

interface SelectProps {
  label?: string;
  selected?: boolean;
  value?: string;
  name: string;
  error?: string;
  options: string[];
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

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
