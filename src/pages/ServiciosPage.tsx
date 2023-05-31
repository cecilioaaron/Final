import React, { useState } from 'react'
import { useEffect } from 'react'
import './poke.css'
export const ServiciosPage = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
      .then(res => res.json())
      .then(res => res.results)
      .then(res => setPokemons(res))
  }, [])

  return (
    <>
      <h1 className='tittle'>Pokemons</h1>
      <ul>
        <div className="cajapoke">

          {
            pokemons.map(({ name, url }) => (
              <div className='item'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" className='pokefoto' alt="" />
                <h3>{name}</h3>
              </div>
            ))
          }
        </div>
      </ul>
    </>
  )
}
