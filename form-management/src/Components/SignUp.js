import React from 'react';
import MyForm from './MyForm';

const SignUp = props => {
  return(
    <>
    <h1>Sign Up</h1>
    <MyForm type='signup' setList={props.setList}/>
    </>
  );
}

export default SignUp;