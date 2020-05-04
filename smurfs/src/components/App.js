import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Context from '../context/context';
import Form from './Form';
import Card from './Card';

const fam = require('../images/SmurfFam.png');

export default function App() {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response.data)
        setSmurf(response.data)
      })
      .catch(err => console.log('error'))
  }, []);

  const Add = smurf => {
    axios.post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      console.log('post', res);
      setSmurf(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

    return (
      <div className="App">
        <Context.Provider value={{smurf}}>
          <h1>Create Your Smurf Family!</h1>
          <img src= {fam} alt='The Smurfs' />
          <br /><br />
          <Form add={Add} />
          <Card />
        </Context.Provider>
      </div>
    );
  
}


