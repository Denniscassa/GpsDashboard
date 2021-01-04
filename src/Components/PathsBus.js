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
import Theme from "./Theme/Theme.json";

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.            
    },
    boxbackground:{
        margin: theme.spacing(0.3, 0, 0),
        backgroundColor:Theme.primaryColor,        
        color:Theme.secondaryColor,      
    },
    submit: {      
        margin: theme.spacing(0, 0, 0.5),
        width:'auto',
        backgroundColor: Theme.primaryColor,    
        '&:hover': {
          backgroundColor: Theme.buttonSelectColor,
        },
        '&:focus': {backgroundColor: Theme.buttonSelectColor},
    },
    GridCheck:{
      overflow:'visible',
    },
    checkBoxStyle:{
      "&.MuiCheckbox-colorSecondary":{
        color:Theme.primaryColor
      }
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
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Flota total vehicular"              
            />
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Unidades en direccion AB"
            />
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Unidades en direccion BA"
            />
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Puntos de control AB"
            />  
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Puntos de control BA"
            />  
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Trayecto AB"
            />   
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
              label="Trayecto BA"
            />    
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.checkBoxStyle} />}
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