import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import HeaderCard from './HeaderCard';
import { headercards } from '../../data/data';

function HeaderCards(){
    return(
        <Grid container item xs={12} height={'180px'} sx={{background: 'linear-gradient(180deg, #3C3F41 0%, #000000 100%)'}} p={2}>
            <Grid container item>
                <Typography variant='h1'>Good afternoon</Typography>
            </Grid>
            <Grid container item  height={'130px'} justifyContent={'space-evenly'}>
                {
                    headercards.map(card=>{
                        return(
                            <HeaderCard {...card}/>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default HeaderCards;
// sx={{background: 'linear-gradient(180deg, #3C3F41 0%, #000000 100%)'}}