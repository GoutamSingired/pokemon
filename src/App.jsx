import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [pokeNames, setPokeNames] = useState([])

        useEffect(() => {
          axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
              console.log(res.data)
              setPokeNames(res.data.results)
            })
            .catch(err => console.log(err))
          },[]
          )

        // useEffect( () => {
        //   fetch("https://pokeapi.co/api/v2/pokemon")
        //   .then(response => {
        //     return response.json();
        // }).then(response => {
        //     //console.log(response.results);
        //     setPokeNames(response.results)
        // }).catch(err=>{
        //     console.log(err);
        // });
        // })

  return (
    <>
      <h1 className='fetch'>Fetch Pokemon (Axios)</h1>
      {
        pokeNames.map((pname,idx) => (
          <ul key={idx} >
            <li>{pname.name}</li>
          </ul>
        ))
      }
    </>
  
  )
}
export default App
