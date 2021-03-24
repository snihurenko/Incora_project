import { useField } from 'formik';
import React from 'react';
import { RadioButton } from '../radio';
import { FormikRadioProps } from '../../shared/radio';

export const FormikRadioButton = (props: FormikRadioProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <RadioButton {...field} {...props} error={error} />;
};
