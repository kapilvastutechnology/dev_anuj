
interface PostPageProps {
    id: string
}
export default async function PostPage({params} : Promise<PostPageProps>) {

    console.log(await params);
  return (
    <div>
      <h1>post page</h1>
    </div>
  )
}
 