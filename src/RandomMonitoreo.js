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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'auto',
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
}));
export default function Dashboard() {
  const classes = useStyles();  
  return (
    <div >
      <CssBaseline />
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {/* Mapeo */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paperHeader}>
                <HeaderMap />
              </Paper>
              <Paper className={classes.paperMap}>
                <Mapeo />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paperPathsBus}>
                <PathsBus />
              </Paper>
              <Paper className={classes.paperMonitorear}>
                <MonitorVehicle />
              </Paper>
            </Grid>
          </Grid>
        </Container>      
    </div>
  );
}