import  Typography  from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import HeaderCards from '../Components/HeaderCards/HeaderCards'
import MainCards from '../Components/MainCards/MainCards'
// import { GetStaticPropsContext } from 'next'


// interface PostType{
//   userId:number,
//   id:number,
//   title:string,
//   body:string,

// }
// interface HomeProps{
//   posts:Array<PostType>
// }
export default function Home() {
  return (
      <Grid container item xs={12} bgcolor={'black'}>
        {/* <Grid container item xs={12} bgcolor={'green'} height={'150px'}>
          <Typography>header</Typography>
        </Grid> */}
        <HeaderCards/>
        <Grid container item xs={12}  height={'70%'}>
          <MainCards/>
        </Grid>
      </Grid>
  )
}






// export async function getStaticProps(context:GetStaticPropsContext) {
//   const res=await fetch('http://jsonplaceholder.typicode.com/posts')
//   const posts =await res.json();
//   // .then(res=>res.json())
//   return{
//     props:{
//       posts,
//     }
//   }
// }