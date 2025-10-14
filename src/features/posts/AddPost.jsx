import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useCreatePostMutation } from "./postApi";
import toast from "react-hot-toast";

const valSchema = Yup.object({
    title:Yup.string().required(),
    detail:Yup.string().required(),
    author:Yup.string().required(),
    image:Yup.string().url().required()
})

export default function AddPost() {
  const [addPost,{isLoading}] = useCreatePostMutation();
  return (
    <div className="p-5 " >
      <Formik
      initialValues={{
        title: '',
        detail:'',
        author:'',
        image:''
      }}

      onSubmit={async(val)=>{
        try{
          await addPost(val).unwrap();
          toast.success('Post Added Successfully')
        }catch(err){
          toast.error(err.data)
        }
      }}

      validationSchema={valSchema}
     
      >
        {({handleSubmit,handleChange, touched,errors,values})=>{
            <Form
            onSubmit={handleSubmit}
            className="max-w-500px space-y-5"
            >
              <div className="w-full">
              <Input
              className="w-full"
                onChange={handleChange}
                label="Title"
                labelPlacement="outside"
                name="title"
                value={values.title}
                placeholder="Enter Title"
                type="text"
            />
            {touched.title && errors.title && <p
            className="text-red-500">{errors.title}</p>}
              </div>
            

            <div className="w-full">
              <Input
              className="w-full"
                onChange={handleChange}
                label="Detail"
                labelPlacement="outside"
                name="detail"
                value={values.detail}
                placeholder="Enter detail"
                type="text"
            />
            {touched.detail && errors.detail && <p
            className="text-red-500">{errors.detail}</p>}
              </div>


              <div className="w-full">
              <Input
              className="w-full"
                onChange={handleChange}
                label="Author"
                labelPlacement="outside"
                name="author"
                value={values.author}
                placeholder="Enter Author"
                type="text"
            />
            {touched.author && errors.author && <p
            className="text-red-500">{errors.author}</p>}
              </div>


              <div className="w-full">
              <Input
              className="w-full"
                onChange={handleChange}
                label="Image"
                labelPlacement="outside"
                name="image"
                value={values.image}
                placeholder="Enter Image"
                type="text"
            />
            {touched.image && errors.image && <p
            className="text-red-500">{errors.image}</p>}
              </div>

            <Button
            isLoading={isLoading}
            color="primary" type="submit" >Submit</Button>
            </Form>
        }}
      </Formik>
    </div>
  )
}
