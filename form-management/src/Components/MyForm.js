import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

class MyForm extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <>
      <Form>
        <div>
          {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
          <Field
            type="text"
            name="username"
            placeholder='Username'
          />
        </div>
        <div>
          {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
          <Field
            type="password"
            name="password"
            placeholder='Password'
          />
        </div>
        <button disabled={this.props.isSubmitting}>Submit</button>
        </Form>
      </>
    );
  }
}

const MyFormikForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  }),

  handleSubmit: (values, {props, resetForm, setErrors, setSubmitting, setStatus }) => {
    if (props.type==='login') {
      //do login stuff
      resetForm();
      setSubmitting(false);
      
    } else {
      axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
          setStatus(res.data);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  },

  displayName: 'Form',
})(MyForm);

export default MyFormikForm;