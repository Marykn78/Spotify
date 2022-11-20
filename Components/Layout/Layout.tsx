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
      <Grid container item xs={10} bgcolor={'pink'} height={'90vh'} p={2}>
        {/* <main>{children}</main> */}
        <Home/>
      </Grid>
      <Grid xs={12} bgcolor={'black'} height={'10vh'}>
        <Footer />
      </Grid>
    </Grid>
  )
}