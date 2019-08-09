import React, {useState, useEffect} from 'react';
import DataDisp from './Components/DataDisp';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Route } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [data,setData]= useState([]);

  useEffect(()=>{
    axios
        .get("http://localhost:5000/api/restricted/data")
        .then(res => {
          console.log('hi',res.data); // Data was created successfully and logs to console
          setData(res.data);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
        });
  },[]);

  return (
    <div className="App">

      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>

      <Route exact path='/' render={(props) => <DataDisp list={data}/> } />
      <Route path='/login' render={(props) => <Login setList={setUserList}/>} />
      <Route path='/signup' render={(props) => <SignUp setList={setUserList}/>} />

    </div>
  );
}

export default App;
