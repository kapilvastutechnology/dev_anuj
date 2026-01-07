'use client'

import { db } from "@/utils/firebaseFirestore";
import { deleteDoc, doc } from "@firebase/firestore";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

export default function DeletePost({id}:{id:string}) {
    const [isPending, startTransition] = useTransition();
    const handleDelete = ()=>{
        startTransition(async()=>{
            try {
                await deleteDoc(doc(db,'posts',id));
                toast.success('Post deleted successfully');
            } catch (err:any) {
                toast.error(err.message);
            }
        })
    }
  return (
    <div>
      <Button onClick={handleDelete} disabled={isPending} >{isPending && <Spinner/>}Delete</Button>
    </div>
  )
}
