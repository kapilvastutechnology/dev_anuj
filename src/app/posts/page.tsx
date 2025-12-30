import { Post } from "@/models/model";
import axios from "axios"

export default async function PostPage(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;
 
  return (
    <div>
      {posts.map((post:Post)=>{
        return <div key={post.id} className="space-y-5" >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      })}
    </div>
  )
}
