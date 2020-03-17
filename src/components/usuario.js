import React , {Fragment} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core'

const Usuario = (usuario) => {


    return ( 
        <Fragment>
        <Paper>
        <Grid container justify="space-around">
            <Grid item>
                <Typography variant="body2" gutterBottom>
                   Nombre: {usuario.usuario.nombre}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2" gutterBottom>
                    Email: {usuario.usuario.email}
                </Typography>
            </Grid>
        </Grid>
        <Grid container justify="space-around">
            <Grid item>
                <Typography variant="body2" gutterBottom>
                    Telefono: {usuario.usuario.telefono}
                </Typography>
            </Grid>
        <Grid item>
            <Typography variant="body2" gutterBottom>
                Fecha: {usuario.usuario.fecha}
            </Typography>
        </Grid>
        </Grid>    
        </Paper>
        </Fragment> 
     );
}
 
export default Usuario;