import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../public/Assets/Icon/logo.svg'
import Image from 'next/image';
import { sidebardata } from '../../data/data';
import Plus from '../../public/Assets/Icon/Frameplus.svg'
import Heart from '../../public/Assets/Icon/Frameheart.svg';
import Divider from '@mui/material/Divider';
import girl from '../../public/Assets/Images/girl.jpg'

function Sidebar (){
    return(
        <>
        <Grid container item justifyContent={'space-between'} flexDirection={'column'} xs={11} p={2} ml={2} height={'50%'}>
            <Grid container item>
                <Image src={Logo} alt=''/>
            </Grid>
            <Grid container item justifyContent={'space-evenly'} height={'90px'}>
                {sidebardata.map((item,index)=>(
                    <Grid container item alignItems={'center'} key={index}>
                        <Grid>
                            <Image src={item.img} alt=''/>
                        </Grid>
                        <Grid ml={'12px'}>
                            <Typography variant='subtitle1'>{item.title}</Typography>
                        </Grid>
                    </Grid>
                    ))}  
            </Grid>
            <Grid container item>
                <Typography variant='subtitle1'>PLAYLISTS</Typography>
            </Grid>
            <Grid container item justifyContent={'space-between'} height={'85px'}>
                <Grid container item alignItems={'center'}>
                    <Grid item>
                        <Image src={Plus} alt=''/>
                    </Grid>
                    <Grid item ml={'16px'}>
                        <Typography variant='subtitle1'>Create Playlist</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems={'center'}>
                    <Grid item>
                        <Image src={Heart} alt=''/>
                    </Grid>
                    <Grid item ml={'16px'}>
                        <Typography variant='subtitle1'>Liked Songs</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle"/>
            </Grid>
        </Grid>
        <Grid width={'130px'} height={'75px'}>
            <Image width={200} src={girl} alt=''/>
        </Grid>
    </>
    )
}

export default Sidebar;