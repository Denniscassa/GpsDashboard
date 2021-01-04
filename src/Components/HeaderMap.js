import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Theme from "./Theme/Theme.json";

const useStyles = makeStyles((theme) => ({
    form: {
      width:'100%', // Fix IE 11 issue.
    },
    paper: {
      display: 'flex',
      border: `1px solid ${theme.palette.divider}`,
      flexWrap: 'wrap',
      border: 'none', 
      
    },
    divider: {
      margin: theme.spacing(1, 0.5),
    },    
    spacing:{
      direction:'column',
      alignItems:'center',
      justify:'center',          
    },
    checkBoxStyle:{
      "&.MuiCheckbox-colorSecondary":{
        color:Theme.primaryColor
      }
    }
  }));
  const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(0.5),           
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
        color:Theme.primaryColor, 
        '&:hover': {
          backgroundColor: Theme.primaryColor,
          color: Theme.secondaryColor,
        },   
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
        color:Theme.primaryColor,

        '&:hover': {
          backgroundColor:Theme.primaryColor,
          color: Theme.secondaryColor,
        },    
      },
    },
  }))(ToggleButtonGroup);

export default function SignIn() {
  
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    const classes = useStyles();  
    return (
      <Container component="main" maxWidth="lg">        
        <div >
          <Grid container className={classes.spacing} >
            {/* Mapeo */}
            <Grid item xs={12} md={4} lg={3} >                
              <Typography  variant="body2" color="textSecondary"  align="center" >
                  MONITOREO TIEMPO REAL
              </Typography>
            </Grid>
            {/* Recent Deposits */}
            <Grid className={classes.paper} item xs={12} md={8} lg={9}> 
                <Button color="primary">Filtrar</Button>                
                <div>
                  <Paper elevation={0} className={classes.paper}>
                    <StyledToggleButtonGroup
                      size="small"
                      value={alignment}
                      exclusive
                      onChange={handleAlignment}
                      aria-label="text alignment"
                    >
                      <ToggleButton value="" >
                        AB:45                         
                      </ToggleButton>
                      <ToggleButton value="center" >
                        BA:46
                      </ToggleButton>

                    </StyledToggleButtonGroup>
                    <Divider flexItem orientation="vertical" className={classes.divider} />
                    <StyledToggleButtonGroup
                      size="small"
                      value={formats}
                      onChange={handleFormat}
                      aria-label="text formatting"
                    >
                      <ToggleButton value="bold" >
                        Flota:125
                      </ToggleButton>
                      <ToggleButton value="" >
                        Term A:5
                      </ToggleButton>
                      <ToggleButton value="underlined" >                        
                        Term B:6
                      </ToggleButton>                     
                    </StyledToggleButtonGroup>

                    <FormControlLabel
                    control={<Checkbox value="remember" className={classes.checkBoxStyle}/>}                    
                    />
                    <Button onClick={() => window.print()}>
                      P                            
                    </Button>                      
                  </Paper>
                </div>
            </Grid>

          </Grid>
        </div>          
      </Container>
        );
    }