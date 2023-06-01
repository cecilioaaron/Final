import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
import { cargarprod, getDatos } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import { newCategoria } from '../firebase/FBcategorias';
import './poke.css'

export const CategoriasPage = () => {
  const { register, handleSubmit } = useForm<ICategoria>();
  const onAddCategoria = async (dataCategoria: ICategoria) => {
    console.log(dataCategoria)
    await newCategoria(dataCategoria)
    window.location.reload();
  }
  const [categorias, setCategorias] = useState<ICategoria[]>([])
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
            <th>Nivel</th>
            <th>Tipo</th>
            <th>Habilidad</th>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <tr>
              <td key={categoria.name}>{categoria.name}</td>
              <td>{categoria.valor}</td>
              <td>{categoria.tipo}</td>
              <td>{categoria.habilidad}</td>
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
              {...register('valor')}
              // id='Nivel'
              label='Nivel'
              type='Number'
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
              {...register('habilidad')}
              // id='habilidad'
              label='Habilidad'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>


            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
          <Button variant='contained' onClick={cargarprod}>Cargar Datos</Button>
        </Grid>
      </Grid>


    </section>
  );
    
}