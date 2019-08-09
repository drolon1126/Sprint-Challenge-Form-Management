import React from 'react';
import MyForm from './MyForm';

const Login = props => {
  return(
    <>
    <h1>Login</h1>
    <MyForm type='login' setList={props.setList}/>
    </>
  );
}

export default Login;