import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../public/Assets/Icon/logo.svg'
import Image from 'next/image';
// import HomeIcon from '@mui/icons-material/Home';
import Library from '../../public/Assets/Icon/Vector.svg'
import Search from '../../public/Assets/Icon/search.svg'
import Home from '../../public/Assets/Icon/home.svg'
function Sidebar (){
    return(
        <Grid container item justifyContent={'space-between'} flexDirection={'column'} xs={10} p={2} ml={2} height={'35%'}>
            <Grid container item>
                <Image src={Logo} alt=''/>
            </Grid>
            <Grid container item justifyContent={'space-evenly'} height={'90px'}>
                <Grid container item alignItems={'center'}>
                    <Grid>
                        {/* <HomeIcon sx={{color:'secondary.main',fontSize:'18px'}}/> */}
                        <Image src={Home} alt=''/>
                    </Grid>
                    <Grid ml={'12px'}>
                        <Typography variant='subtitle1'>Home</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems={'center'}>
                    <Grid>
                        <Image src={Search} alt=''/>
                    </Grid>
                    <Grid ml={'12px'}>
                        <Typography variant='subtitle1'>Search</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems={'center'} p={'2px'}>
                    <Grid>
                        <Image src={Library} alt=''/>
                    </Grid>
                    <Grid ml={'12px'}>
                        <Typography variant='subtitle1'>Library</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Typography variant='subtitle1'>PLAYLISTS</Typography>
            </Grid>
        </Grid>
    )
}

export default Sidebar;