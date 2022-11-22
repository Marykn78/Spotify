import Footer from './Footer'
import React from 'react'
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Home from '../../pages';

interface AuxProps{
  // children: ReactChild | ReactChildren;
  children: JSX.Element[] | JSX.Element;
}
export default function Layout({ children }:AuxProps) {
  return (
    <Grid container justifyContent={'space-between'} xs={12} flexWrap={'wrap'}>
      <Grid container item xs={2} bgcolor={'primary.main'}>
        <Sidebar />
      </Grid>
      {/* justifyContent={'center'} */}
      <Grid container item xs={10} sx={{background: 'linear-gradient(180deg, #3C3F41 0%, #000000 100%)'}} height={'90vh'} >
        {/* <main>{children}</main> */}
        <Home/>
      </Grid>
      <Grid container item xs={12} bgcolor={'#181818'} height={'10vh'}>
        <Footer />
      </Grid>
    </Grid>
  )
}