import { useField } from 'formik';
import React from 'react';
import { Checkbox } from '../checkbox';
import { FormikCheckboxProps } from '../../shared/checkbox';

export const FormikCheckbox = (props: FormikCheckboxProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Checkbox {...field} {...props} error={error} />;
};
