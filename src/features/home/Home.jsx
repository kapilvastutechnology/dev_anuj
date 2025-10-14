import CardSkeleton from "../../components/CardSkeleton";
import { useGetPostsQuery } from "../posts/postApi"
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
export default function Home() {
    const {isLoading, error,data} = useGetPostsQuery();
    console.log(data);
    if(isLoading) return <div className="p-5 grid grid-cols-4 gap-5" >
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
    </div>
    if(error) return <h1 className="text-red-500" >{error.data}</h1>
  return (
    <>
    <div className="p-5 grid grid-cols-4 gap-5" >
      {data.map((post)=>{
        return <Card key={post.id} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{post.title}</p>
        <small className="text-default-500">{post.detail}</small>
        <h4 className="font-bold text-large">{post.author}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
      })}
    </div>



    </>
  )
}
