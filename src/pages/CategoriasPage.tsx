import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
import { cargarprod, getDatos } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import { newCategoria } from '../firebase/FBcategorias';
import './poke.css'
import { IPokemonPokedex } from '../interfaces/IPokedex';
import { IPokemon } from '../interfaces/IPokemon';
import { FBPokemon } from '../firebase/FBPokemon'

export const CategoriasPage = () => {
  const { register, handleSubmit } = useForm<IPokemon>();
  const onAddCategoria = async (dataPokemon: IPokemon) => {
    console.log(dataPokemon)
    // await newCategoria(dataCategoria)
    // window.location.reload();
  }
  const [Pokemons, setPokemons] = useState<IPokemon[]>([])
  useEffect(() => {
    getDatos()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <section>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={5} sx={{ backgroundColor: 'yellow', margin: '20px', padding: '15px', height: 'max-content', borderRadius: '30px' }}>
          <table border={2}>
            <th>Nombre</th>
            <th>especie</th>
            <th>Tipo</th>
            <th>Imagen</th>
          {
            Pokemon.slice(0, 100).map((Pokemon) => (
              <>
              <tr>
              <td key={Pokemon.name}>{Pokemon.name}</td>
              <td>{Pokemon.especie}</td>
              <td>{Pokemon.tipo}</td>
              <td>{Pokemon.imagen}</td>
              {/* <img src={categoria.logo} alt="" /> */}
              </tr>
              </>
            ))
          }
          </table>
        </Grid>

        <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '20px', padding: '15px', height: 'max-content', borderRadius: '30px' }}>
          <h2 id='NewCat'>Añadir nuevos datos</h2>
          <form onSubmit={handleSubmit(onAddCategoria)} noValidate >
            <TextField
              {...register('name')}
              // id='nombre'
              label='Nombre'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            
            <TextField
              {...register('especie')}
              // id='Nivel'
              label='especie'
              type='String'
              sx={{ width: '60%' }}
            >
            </TextField>

            <TextField
              {...register('tipo')}
              // id='tipo'
              label='Tipo'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('imagen')}
              // id='habilidad'
              label='imagen'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>


            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
          <Button  variant='contained' onClick={cargarprod}>Cargar Datos</Button>
        </Grid>
      </Grid>


    </section>
  );
    
}