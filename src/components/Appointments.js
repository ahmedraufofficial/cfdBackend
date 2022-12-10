import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Charts';
import Deposits from './Deposits';
import Orders from './Orders';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReactVirtualizedTable from './table';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import BasicModal from './aptform';
import WithMaterialUI from './formikform';

function Appointments() {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={8} lg={9} style={{fontSize: '25px'}}>
                <CalendarMonthIcon />
                    Appointments
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
              <WithMaterialUI />
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <ReactVirtualizedTable/>
              </Grid>
            </Grid>
          </Container>
    );
  }

  export default Appointments;