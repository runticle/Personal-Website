import React from 'react';
import { Field } from 'redux-form'

export const FormComponent = ({ handleSubmit, onSubmit }) => {

    return (
      <div>
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name='name'
            component='input'
          />
          <Field
            name='email'
            component='input'
          />
          <Field
            name='message'
            component='input'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )

}

export default FormComponent;
