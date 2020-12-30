import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.            
    },
    boxbackground:{
        margin: theme.spacing(0.3, 0, 0),
        backgroundColor:'#17a2b8',        
        color:'#ffffff',      
    },
    submit: {      
        margin: theme.spacing(0, 0, 0.5),
        width:'auto',
        backgroundColor: '#17a2b8',    
        '&:hover': {
          backgroundColor: '#047085',
        },
        '&:focus': {backgroundColor: '#047085'},
    },
    GridCheck:{
      overflow:'visible'
    }
  }));

export default function SignIn() {
    const classes = useStyles();
  
    return (
      <Container component="main" xs={12} sm={9} md={10} lg={12}>  
      <CssBaseline/>      
          
        <Grid item className={classes.boxbackground}>
          <Box p={2}>
          BUSES,TRAYECTOS
          </Box>
        </Grid>          
        <Grid className={classes.GridCheck}  >
        <form className={classes.form} >
            <FormControlLabel 
              control={<Checkbox value="remember" color="primary" />}
              label="Flota total vehicular"              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Unidades en direccion AB"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Unidades en direccion BA"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Puntos de control AB"
            />  
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Puntos de control BA"
            />  
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Trayecto AB"
            />   
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Trayecto BA"
            />    
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Paraderos AB"
            />             
          </form>
                    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </Grid>              
        
      </Container>
        );
    }