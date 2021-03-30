export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email';
  autoComplete?: 'off';
  error?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

export type FormikInput<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur'>;
export type FormikCheckbox<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
export type FormikRadio<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export interface FormikRadioProps extends FormikRadio<InputProps> {
  type: 'radio';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export interface FormikCheckboxProps extends FormikCheckbox<InputProps> {
  type: 'checkbox';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}
