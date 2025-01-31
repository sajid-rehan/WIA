import React from 'react';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import './App.css';

// npm install react react-dom formik yup

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters long'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Form initialValues={initialValues} validationSchema={validationSchema}>
      <label htmlFor="username">Username:</label>
      <Field type="text" name="username" id="username" />
      {/* ... */}

      <label htmlFor="password">Password:</label>
      <Field type="password" name="password" id="password" />

      <button type="submit">Login</button>
    </Form>
  );
};

export default LoginForm;