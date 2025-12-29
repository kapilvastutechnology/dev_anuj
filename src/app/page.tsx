import { getNews } from "@/lib/actions";

export default async function page() {
  const res = await getNews();
  console.log(res);
  return (
    <div>
      
    </div>
  )
}
