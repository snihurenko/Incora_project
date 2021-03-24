import * as Yup from 'yup';

export const paymentFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('Valid first name is required.'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('Valid last name is required.'),
  userName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('VYour username is required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter valid email address for shipping updates'),
  address: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(64, 'Maximum 64 symbols')
    .required('Please enter your shipping address'),
  address2: Yup.string().min(5, 'Minimum 5 symbols').max(64, 'Maximum 64 symbols').optional(),
  state: Yup.string().min(3, 'Minimum 3 symbols').max(24, 'Maximum 24 symbols').optional(),
  zip: Yup.string().length(5, 'Should have 5 symbols').required('Zip code is required'),
  country: Yup.string().required('Please select a valid country.'),
  payment: Yup.string().required('Please choose payment method')
});
