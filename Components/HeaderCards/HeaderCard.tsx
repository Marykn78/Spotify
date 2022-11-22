import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface Cardprops{
    id:number,
    name:string,
    img:HTMLImageElement,
    // HTMLImageElement
}

function HeaderCard({img,name}:Cardprops){
    return(
        // <>
        <Grid container item xs={2.5} height={'60px'} bgcolor={'#343536'} justifyContent={'space-between'}  alignItems={'center'}  m={'2px'} borderRadius={1}>
            <Grid item>
                <Image style={{height: 60, objectFit: 'contain',width:'auto'}} src={img} alt='' />
            </Grid>
            <Grid item xs={6} mr={2}>
                <Typography variant='subtitle1'>{name}</Typography>
            </Grid>
        </Grid>
        
        // </>
    )
}

export default HeaderCard;