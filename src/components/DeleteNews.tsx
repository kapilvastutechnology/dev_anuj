'use client'

import { useTransition } from "react"
import { Button } from "./ui/button"
import { removeData } from "@/lib/actions";
import { Spinner } from "./ui/spinner";
import toast from "react-hot-toast";
export default function DeleteNews({id} : {id:string}) {
    const [isPending, startTransition ] = useTransition();
    const handleDelete = () => {
        startTransition( async () => {
           const res =  await removeData(id)
           if(res.success) {
            toast.success(res.message);
           }
        })
    }
  return (
    <div>
      <Button 
      onClick={handleDelete}
      disabled={isPending}
      >{isPending && <Spinner/>}Delete</Button>
    </div>
  )
}
