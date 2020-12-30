import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "auto", // Fix IE 11 issue.
    margin: theme.spacing(0.5, 0,0),
    '& .MuiFormLabel-root': {
      color:"#30a7b5"},
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#30a7b5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#30a7b5',
      },
    },    
    color:'#30a7b5'  
  },
  
  boxbackground:{
    margin: theme.spacing(0.3, 0, 0),
    backgroundColor:'#17a2b8',
    color:'#ffffff',               
  }, 
  submit: {
    margin: theme.spacing(0.6, 0, 0.5),
    justifyContent:"center",
    width:'auto',
    backgroundColor: '#17a2b8',    
    '&:hover': {
      backgroundColor: '#047085',
    },
    '&:focus': {backgroundColor: '#047085'},
  },  
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 }, 
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 }
];

export default function Dsipatch() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline/>
      <div>
      <Grid item className={classes.boxbackground} xs={12} md={4} lg={12}>
        <Box p={2}>
            MONITOREAR VEHICULO
        </Box>
      </Grid>
        <form className={classes.form} noValidate>
        <Autocomplete
              noOptionsText={'sin opciones'}
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}            
              renderInput={(params) => (  
                <TextField {...params} label="vehiculo" variant="outlined"/>
              )}
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
      </div>
    </Container>
  );
}