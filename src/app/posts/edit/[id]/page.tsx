import EditPost from "@/components/EditPost";
import { db } from "@/utils/firebaseFirestore";
import { doc, getDoc } from "@firebase/firestore";

interface PostProps {
    id:string
}

export default async function EditPage({params}: {params:Promise<PostProps>}) {
    const { id } = await params;
    const resposnse = await getDoc(doc(db,'posts',id));
    const post = resposnse.data() ?? {};
  return (
    <div>
      <EditPost post={{
        id:resposnse.id,
        title:post.title,
        detail: post.detail,
        image: post.image
      }} />
    </div>
  )
}
