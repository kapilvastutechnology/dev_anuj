
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between gap-5 p-5 bg-gray-500 " >
      <h1 className="text-lg font-bold" >Logo</h1>
      <nav>
        <Link  href={'/posts/add'}>Add News</Link>
      </nav>
     
    </div>
  )
}
