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
import playlist from '../../public/Assets/Icon/playlist.svg';
import line from '../../public/Assets/Icon/line.svg';
import sound from '../../public/Assets/Icon/sound.svg';
import speaker from '../../public/Assets/Icon/speaker.svg';


function Footer (){
    return(
        <Grid container item justifyContent={'space-between'} xs={12} >
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
            <Grid container item xs={7} justifyContent={'center'}>
                <Grid container xs={4} pt={'5px'} justifyContent={'space-between'} alignItems={'center'}>
                   <Image src={Shuffle} alt=''/>
                   <Image src={Back} alt=''/>
                   <Image src={Play} alt=''/>
                   <Image src={Forward} alt=''/>
                   <Image src={Repeat} alt=''/>
                </Grid>
                <Grid container xs={10} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant="subtitle2">0:00</Typography>
                   <Image  src={rectangle} alt=''/>
                   <Typography variant="subtitle2">2:50</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={1.5} mr={1} alignItems={'center'} justifyContent={'space-between'}>
                <Image src={playlist} alt=''/>
                <Image src={speaker} alt=''/>
                <Image src={sound} alt=''/>
                <Image src={line} alt=''/>

            </Grid>
        </Grid>
    )
}

export default Footer;