import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Formik } from "formik";
import * as Yup from 'yup';

const valSchema = Yup.object({
    title:Yup.string().required(),
    detail:Yup.string().required(),
    author:Yup.string().required(),
    image:Yup.string().url().required()
})

export default function AddPost() {
  return (
    <div className="p-5 " >
      <Formik
      initialValues={{
        title: '',
        detail:'',
        author:'',
        image:''
      }}
      validationSchema={valSchema}
      onSubmit={(val)=>{
        console.log(val);
      }}
      >
        {({handleSubmit,handleChange, touched,errors,values})=>{
            <Form
            onSubmit={handleSubmit}
            className="max-w-500px space-y-5"
            >
            <Input
                onChange={handleChange}
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Enter Title"
                type="text"
            />

            <Button color="primary" type="submit" >Submit</Button>            </Form>
        }}
      </Formik>
    </div>
  )
}
