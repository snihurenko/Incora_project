import { useField } from 'formik';
import React from 'react';
import { Input } from '../input';
import { FormikTextInputProps } from '../../shared/input/Input';

export const FormikInput = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Input {...field} {...props} error={error} />;
};
