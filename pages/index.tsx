import  Typography  from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
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
    // <div>
      <Grid container item xs={11} bgcolor={'blue'} >
        <Grid container item xs={12} bgcolor={'green'} height={'150px'}>
          <Typography>header</Typography>
        </Grid>
        <Grid container item xs={12} height={'80%'}>
          <Typography>ffff</Typography>
        </Grid>
      </Grid>
    // </div>
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