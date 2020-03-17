import React , {Fragment} from 'react';

import { Grid , TextField, Button, Typography} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const Formulario = () => {
    return ( 
        <Fragment>
            <Grid item sm={4}>
                <Typography variant="h3" component="h2" gutterBottom align='center' color='primary'>
                    Ingreso de datos
                </Typography>
                <Grid item>
                    <TextField 
                    variant="outlined" 
                    label='Nombre' 
                    color='primary' 
                    fullWidth
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    variant="outlined" 
                    label='Email' 
                    color='primary' 
                    fullWidth
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    variant="outlined" 
                    label='Telefono' 
                    color='primary' 
                    fullWidth
                    />
                </Grid>
                <Grid item >
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                    >
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Formulario;