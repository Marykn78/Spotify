import Grid from "@mui/material/Grid";
import footerimg from '../../public/Assets/Images/footerimg.jpg'
import Image from "next/image";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Crop169Icon from '@mui/icons-material/Crop169';
import Shuffle from '../../public/Assets/Icon/Shuffle.svg'
import Back from '../../public/Assets/Icon/back.svg';
import Forward from '../../public/Assets/Icon/forward.svg';
import Play from '../../public/Assets/Icon/play.svg';
import rectangle from '../../public/Assets/Icon/Rectangle.svg';
import Repeat from '../../public/Assets/Icon/Repeat.svg';

function Footer (){
    return(
        <Grid container item justifyContent={'space-between'} bgcolor={'red'} xs={12} >
            <Grid container item xs={2} alignItems={'center'} justifyContent={'space-between'}>
                <Grid item mx={2} pt={'5px'}>
                    <Image src={footerimg} alt=''/>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" fontWeight={400}>Hold on</Typography>
                    <Typography variant="subtitle2">Justin Bieber</Typography>
                </Grid>
                <Grid item>
                    <FavoriteBorderIcon sx={{color:'white'}}/>
                </Grid>
                <Grid item>
                    <Crop169Icon sx={{color:'white'}}/>
                </Grid>
            </Grid>
            <Grid container item xs={6} bgcolor={'pink'} justifyContent={'center'}>
                <Grid container xs={10} bgcolor='green'>
                    
                </Grid>
                <Grid container xs={10} bgcolor={'yellow'}>

                </Grid>
            </Grid>
            <Grid container item xs={3} alignItems={'center'} justifyContent={'flex-end'}>
                aaa
            </Grid>
        </Grid>
    )
}

export default Footer;