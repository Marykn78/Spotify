import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import MusicInfo from "../../Components/MusicInfoCard/MusicInfoCard";
import TableCard from "../../Components/MusicInfoCard/Table";

function Playlist (){
    return(
        <Grid container item xs={12} height={450} sx={{background: 'linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)'}}>
            <Grid height={'50%'}>
                <MusicInfo/>
            </Grid>
            
            <TableCard/>
        </Grid>
    )
}

export default Playlist;


{/* <Grid container item xs={12} bgcolor={'pink'} height={300} mt={4}> */}
                {/* <TableContainer sx={{bgcolor:'red',display:'flex',justifyContent:'space-between'}}>
                    <Grid xs={10} sx={{bgcolor:'yellow'}}>
                        {/* <Typography align="right"># TITLE</Typography> */}
                        // <TableCell align="right">ALBUM</TableCell>
                        // <TableCell align="right"># TITLE</TableCell> */}
            //         {/* </Grid>
            //     </TableContainer>
            // </Grid> */}