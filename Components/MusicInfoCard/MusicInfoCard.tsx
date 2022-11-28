import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import whitegirl from '../../public/Assets/Images/playlist/whitegirl.png'

const MusicInfo =()=>{
    return(
        <Grid container  item width={'100%'} height={'100%'} alignItems={'center'} >
            <Image style={{height:'100%'}} src={whitegirl} alt=''/>
            <Grid item>
                <Typography variant="subtitle2">playlist</Typography>
                <Typography variant="h1" fontWeight={900}>Pop Right Now</Typography>
                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus</Typography>
                <Typography variant="subtitle1" fontWeight={200}>spotify.860,305 likes.100 songs, 5 hr 5 min</Typography>
            </Grid>
            
        </Grid>
    )
}

export default MusicInfo;