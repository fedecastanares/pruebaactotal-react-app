import React , {Fragment} from 'react';
import Imagen from './components/logo.js';
import Formulario from './components/formulario.js';
import ListadeDatos from './components/listaDatos.js'
import UsuariosProvider from './context/UsuariosContext.js'

import {Grid , Container} from '@material-ui/core';

function App() {
  return (
    <Fragment>
      <Container>
      <Imagen/>
      <div className='margen'>
      <UsuariosProvider>
        <Grid container 
          justify='space-between'>
            <Formulario/>
            <ListadeDatos/>
        </Grid>
        </UsuariosProvider>
      </div>
      </Container>
    </Fragment>
  );
}

export default App;
