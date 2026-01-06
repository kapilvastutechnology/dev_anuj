import { db } from "@/utils/firebaseFirestore"

export default function Home() {
  console.log(db);
  return (
    <div>
      <h1>Home</h1>

    </div>
  )
}
