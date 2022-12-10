import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Hero.css'
import { Grid } from '@mui/material';

function Hero() {
  return (
    <div className='hero-container'>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <p className='para'>Parked to Profit in no Time</p>
            </Grid>
            <Grid item xs={4}>
                <h1>xs=4</h1>
            </Grid>
        </Grid>








        
        <h1 className='cc'>Lesssgooo</h1>
        <p>vroom vroom im in my mums car</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Gaddiyan de kafile ne
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Kaaliyan ne raatan
            </Button>
        </div>
    </div>
  )
}

export default Hero