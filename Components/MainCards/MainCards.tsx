import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { maincards } from "../../data/data";
import MainCard from "./MainCard";

function MainCards (){
    return(
        <Grid container item xs={12} p={2}>
            <Grid container item height={'45px'}>
                <Typography variant="h2">Recently added</Typography>
            </Grid>
            <Grid container justifyContent={'space-between'} height={'80%'}>
                {
                    maincards.map(item=>{
                        return(
                            <MainCard {...item}/>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default MainCards;