import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    margin :'2%',
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
    backgroundColor: '#17a2b8',
    color:'#ffffff',
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
      <Grid item xs={12} sm={7} md={9} lg={12}>
        <Box className={classes.boxbackground} p={2}>
            MONITOREAR VEHICULO
        </Box>
      </Grid>
        <form className={classes.form} noValidate>
        <Autocomplete
              noOptionsText={'sin opciones'}
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="vehiculo" variant="outlined"/>
              )}
            />
        </form>
      </div>
    </Container>
  );
}