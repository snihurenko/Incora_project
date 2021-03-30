import React from 'react';
import { Formik, Form } from 'formik';
import {
  FormikInput,
  FormikSelect,
  FormikCheckbox,
  FormikRadioButton
} from '../components/shared/formikAdapters';
import { paymentFormSchema } from '../utils/validation_schemas';
import css from './PaymentForm.module.scss';

interface UserFormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  zip: string;
  payment: string;
  same_address: boolean;
  save_info: boolean;
}

const defaultValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  address: '',
  address2: '',
  country: '',
  state: '',
  zip: '',
  payment: '',
  same_address: false,
  save_info: false
};

export function PaymentForm() {
  return (
    <div>
      <Formik<UserFormValues>
        initialValues={defaultValues}
        validationSchema={paymentFormSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form className={css.formWrapper}>
          <h2>Billing address</h2>
          <div className={css.wrapper}>
            <div className={css.column2}>
              <FormikInput name='firstName' label='First Name' />
            </div>
            <div className={css.column2}>
              <FormikInput name='lastName' label='Last Name' />
            </div>
          </div>

          <FormikInput name='username' label='Username' placeholder='Username' />
          <FormikInput name='email' label='Email' />
          <FormikInput name='address' label='Address' placeholder='1234 Main St' />
          <FormikInput name='address2' label='Address 2 (Optional)' placeholder='Apartment or suite' />

          <div className={css.wrapper}>
            <div className={css.column3}>
              <FormikSelect name='country' label='Country' />
            </div>
            <div className={css.column3}>
              <FormikInput name='state' label='State' />
            </div>
            <div className={css.column3}>
              <FormikInput name='zip' label='Zip' />
            </div>
          </div>

          <div className={css.wrapButtons}>
            <FormikCheckbox
              type='checkbox'
              name='same_address'
              label='Shipping address is the same as my billing address'
            />
            <FormikCheckbox type='checkbox' name='save_info' label='Save this information for next time' />
          </div>
          <div className={css.wrapButtons}>
            <h3 className={css.h3}>Payment</h3>
            <FormikRadioButton type='radio' name='payment' value='credit_card' label='Credit card' />
            <FormikRadioButton type='radio' name='payment' value='debit_card' label='Debit card' />
            <FormikRadioButton type='radio' name='payment' value='paypal' label='PayPal' />
          </div>
          <div className={css.wrapButtons}>
            <button type='submit' className={css.btnSubmit}>
              Continue to checkout
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
