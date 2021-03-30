import { useField } from 'formik';
import React from 'react';
import { Select } from '../select';
import { FormikTextInputProps } from '../../../models/formik';

const countries: string[] = ['USA', 'Ukraine', 'Germany'];

export const FormikSelect = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  return <Select options={countries} {...field} {...props} error={error} />;
};
