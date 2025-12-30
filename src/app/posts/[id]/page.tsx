interface PostPageProps {
    id: string
}
export default async function PostPage({params} : Promise<PostPageProps>) {

    console.log(await params);
  return (
    <div>
      
    </div>
  )
}
 