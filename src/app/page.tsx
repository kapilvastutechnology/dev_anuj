import { Comment } from "@/models/model";
import axios from "axios"

export default async function Home() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
  const comments = response.data;
  return (
    <div>
      {comments.map((comment:Comment) => {
        return <div key={comment.id} className="space-y-5">
          <h1>name:{comment.name}</h1>
          <p>body:{comment.body}</p>
        </div>
      })}
    </div>
  )
}
