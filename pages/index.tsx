import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface PostType{
  userId:number,
  id:number,
  title:string,
  body:string,

}
interface HomeProps{
  posts:Array<PostType>
}
export default function Home({posts}:HomeProps) {
  return (
    <div>
      {posts.map(post=>(
        <div key={post.id}>

        </div>
      ))}
    </div>
  )
}

export async function getStaticProps(context:GetStaticPropsContext) {
  const res=await fetch('http://jsonplaceholder.typicode.com/posts')
  const posts =await res.json();
  // .then(res=>res.json())
  return{
    props:{
      posts,
    }
  }
}