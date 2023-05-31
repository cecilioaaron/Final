import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./login.css"


export const login = () => {
  return (
<form>
      <Grid container spacing={2} style={{
        width: "95%",
        padding: "3rem"
      }}>
        <div className="cajacss">
        <Grid item xs={12}>
          <TextField
            label="usuario"
            variant="outlined"
            fullWidth
            sx={{background: 'white', borderRadius: '10px', overflow:'hidden'}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            sx={{background: 'white', borderRadius: '10px', overflow:'hidden'}}

          />
        </Grid>
        <Grid item xs={12}>
        <NavLink to='/categorias'>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            
          >
            
              Iniciar Sesión
            
          </Button>
        </NavLink>
        </Grid>
        
        </div>
      </Grid>
    </form>
    )
}