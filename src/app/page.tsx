import DeleteNews from "@/components/DeleteNews";
import { getNews } from "@/lib/actions"
import { NewsModel } from "@/models/model";

export default async function Home() {
  const res = await getNews();
  const news : NewsModel[] = res.data ?? [];
  return (
    <div>
      {news.map((news:any) => (
        <div key={news._id}>
          <h1>{news.title}</h1>
          <p>{news.description}</p>
          <DeleteNews id={news._id.toString()}/>
        </div>
        
      ))}
    </div>
  )
}
