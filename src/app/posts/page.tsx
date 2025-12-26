import { Post } from "@/models/comment_model";
import axios from "axios"

export default async function Post() {
    const re =  await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = re.data;
  return (
    <div>
      {posts.map((post:Post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}
