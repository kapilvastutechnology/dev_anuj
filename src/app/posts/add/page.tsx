'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { db } from "@/utils/firebaseFirestore"
import { addDoc, collection } from "@firebase/firestore"
import { Formik } from "formik"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import toast from "react-hot-toast"

export default function AddPost() {
  const  [isPending, startTransition] = useTransition();
 const router = useRouter();
  return (
    <div className="p-5" >
      <Formik
      initialValues={{
        title:'',
        detail: '',
        image: ''
      }}

      onSubmit={(val)=>{
        startTransition(async()=>{
        try {
          await addDoc(collection(db,'posts'),val);
          toast.success('Post added successfully');
          router.back();
        } catch (err:any) {
          toast.error(err.message);
        }
        })
       
      }}

      >

      {({handleChange, handleSubmit,values})=>(
        <form onSubmit={handleSubmit} action= "" className="max-w-lg space-y-5">
        <div>
        <Input 
        onChange={handleChange}
        name="title"
        value={values.title}
        placeholder="Title"
        type="text"
        />
        </div>

        <div>
        <Input 
        onChange={handleChange}
        value={values.detail}
        name="detail"
        placeholder="Details"
        />
        </div>


        <div>
        <Input 
        onChange={handleChange}
        value={values.image}
        name="image"
        placeholder="Image"
        />
        </div>

        <Button 
        disabled={isPending}
        type="submit">
          {isPending && <Spinner/>}
          Submit</Button>


      </form>
      )}        
        
      </Formik>
      
    </div>
  )
}
