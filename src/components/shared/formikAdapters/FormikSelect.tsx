import { useField } from 'formik';
import React from 'react';
import { Select } from '../select';
import { FormikTextInputProps } from '../../shared/input/Input';

export const FormikSelect = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Select {...field} {...props} error={error} />;
};
