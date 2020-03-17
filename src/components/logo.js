import React , {Fragment} from 'react';
import { Container, Grid } from '@material-ui/core';


const Imagen = () => {
    return ( 
        <Fragment>
            <Container maxWidth="sm" >
                <Grid container justify='center'>
                    <img className='logo' src='https://actotal.com/wp-content/uploads/2013/10/ACTotal-logo.png' alt='Logo de ACTotal'/>
                </Grid>
            </Container>
        </Fragment>
     );
}
 
export default Imagen;