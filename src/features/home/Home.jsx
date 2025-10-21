import { useGetPostQuery } from "../posts/dogApi"

export default function Home() {
  const {isLoading, error, data} = useGetPostQuery();
  if(isLoading) return <h1>Loading.......</h1>
  if(error) return <h1>{error}</h1>
  console.log(data)
  return (
    <div>
      {/* {data.map((post)=>{
        return <h1 key={post.id} >{post.title}</h1>
      })} */}
    </div>
  )
}

