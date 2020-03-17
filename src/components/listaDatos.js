import React , { Fragment, useContext} from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { UsuariosContext } from '../context/UsuariosContext';
import Usuario from './usuario.js'

const ListadeDatos = () => {

    const {usuarios} = useContext(UsuariosContext);

    return ( 
        <Fragment>
            <Grid item sm={8}>
                    <Typography variant="h3" component="h2" gutterBottom align='center' color='primary'>
                        Lista de Datos
                    </Typography>
                    <Container >
                        {usuarios.map(usuario => (
                            <Usuario
                            key={usuario.id}
                            usuario={usuario}
                            >

                            </Usuario>
                            ))}
                    </Container>
            </Grid>
        </Fragment>
     );
}
 
export default ListadeDatos;