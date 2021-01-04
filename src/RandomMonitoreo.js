import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Mapeo from './Components/Mapeo';
import PathsBus from './Components/PathsBus';
import MonitorVehicle from './Components/MonitorVehicle';
import HeaderMap from './Components/HeaderMap';

import { FullScreen, useFullScreenHandle } from "react-full-screen";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'auto',
    background: 'linear-gradient(to top, #30a7b5,#5BAAB3)',
    minHeight: '100vh'
  },
  toolbar: {    
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  paperHeader: {  
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',   
    height: 'auto', 
  },
  paperPathsBus: {  
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column', 
    height: 'auto',      
  },
  paperMap: {  
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',   
    height: 'auto',
  },
  paperMonitorear: {  
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',   
    height: 'auto',
  },
  spacynGrid:{
    margin: theme.spacing(0.5, 0,0),
  }

}));
export default function Dashboard() {
  
  const handle = useFullScreenHandle();

  const classes = useStyles();  
  return (    
    <div className={classes.root} >
      <CssBaseline />
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {/* Mapeo */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paperHeader}>                
                <Grid>
                  <HeaderMap />
              </Grid>
              <Grid>
              <button onClick={handle.enter}>
                full screem
              </button>
              </Grid>
              </Paper>
              <Paper className={classes.paperMap}  style={{  }}  >    
              <FullScreen handle={handle} >
                                                  
                    <Mapeo handle={handle} option={'100%'} />                
                
            </FullScreen>
            </Paper>

            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Grid>
                <Paper className={classes.paperPathsBus}>
                  <PathsBus />
                </Paper>
              </Grid>
              <CssBaseline />
              <Grid  className={classes.spacynGrid}>
                <Paper className={classes.paperMonitorear}>
                  <MonitorVehicle />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>      
    </div>
  );
}
