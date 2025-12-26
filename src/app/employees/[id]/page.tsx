import EditFrom from "@/components/EditFrom";
import axios from "axios";

interface UpdatePageProps {
id:string
}

export default async function UpdatePage({params} : {params:Promise<UpdatePageProps>}) {
  const {id} = await params;
  const res = await axios.get(`https://68e33fad8e14f4523dacdbdb.mockapi.io/employee/${id}`)
  return (
    <div>
       <EditFrom employee={res.data} />
    </div>
  )
}



