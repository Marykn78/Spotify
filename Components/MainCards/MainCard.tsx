import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import card1 from '../../public/Assets/Images/cardimg/card1.jpg'

interface cardprops{
    id:string,
    img:HTMLImageElement,
    title:string,
    desc:string
}
function MainCard ({img,id,title,desc}:cardprops){
    return(
        <Grid container item xs={1.5} bgcolor={'#181818'} height={'210px'}  flexDirection={'column'} alignItems={'center'} p={2}>
            <Image style={{height: 120, objectFit: 'cover',width:120,marginBottom:'10px'}} src={img} alt=''/>
            <Grid>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2">{desc}</Typography>
            </Grid>
        </Grid>
    )
}

export default MainCard;