import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import { listItems } from "../../../Data/list.data";
import { infoItems } from "../../data/data";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const TableCard = () => {
  return (
    <Grid xs={12} px={3}  sx={{background: 'linear-gradient(180deg, #000000 89.7%,#90AEA7 0%)'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ><Typography variant="subtitle2"># TITLE</Typography></TableCell>
            <TableCell><Typography variant="subtitle2">ALBUM</Typography></TableCell>
            <TableCell><Typography variant="subtitle2">DATE ADDED</Typography></TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              <InfoOutlinedIcon sx={{color:'white'}}/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infoItems.map((item) => (
            <TableRow  sx={{cursor:'pointer','&:hover':{backgroundColor:'#222524'}}} >
              <TableCell sx={{ borderBottom: "none"}} >
                <Grid display={"flex"} alignItems={"center"}>
                  <Grid display={"flex"} alignItems={"center"}>
                    <Grid><Typography variant="subtitle1">{item.id}</Typography></Grid>
                    <Grid p={1}>
                      <Image style={{width:40,height:30}} src={item.pic} alt=''/>
                    </Grid>
                  </Grid>
                  <Grid
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle1" component={"div"}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" component={"div"}>
                      {item.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell  sx={{ borderBottom: "none" }}><Typography variant="subtitle2">{item.album}</Typography></TableCell>
              <TableCell sx={{ borderBottom: "none" }}><Typography variant="subtitle2">{item.date}</Typography></TableCell>
              <TableCell sx={{ borderBottom: "none",textAlign:'center'}}>
                <Grid display={"flex"} justifyContent={'center'}>
                  <Grid>
                  
                    <FavoriteBorderOutlinedIcon sx={{color:'white'}} fontSize="small" />
                  </Grid>
                  <Grid  px={1}><Typography variant="subtitle2"> {item.time}</Typography></Grid>
                  <Grid>
                    <MoreHorizOutlinedIcon sx={{color:'white'}} fontSize="small"/>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default TableCard;