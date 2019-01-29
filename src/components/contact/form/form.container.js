import React from 'react';
import { reduxForm } from 'redux-form'

import FormComponent from './form.component.js'

export const FormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting form: ', formValues);
  }

  return (
    <FormComponent
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  )
}

const formConfiguration = {
  form: 'contact-form'
}

export default reduxForm(formConfiguration)(FormContainer)
