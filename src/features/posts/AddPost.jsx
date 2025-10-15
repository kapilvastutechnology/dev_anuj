// import { Form } from "@heroui/form";
// import { Button, Input } from "@heroui/react";
// import { Formik } from "formik";
// import * as Yup from 'Yup';
// import { useCreatePostMutation } from "./postApi";
// import toast from 'react-hot-toast';

// const valSchema = Yup.object({
//     title:Yup.string().required(),
//     details:Yup.string().required(),
//     author:Yup.string().required(),
//     image:Yup.string().url().required()
// })

// export default function AddPost() {

//     const [addPost,{isLoading}] =  useCreatePostMutation();

//   return (
//     <div>
//       <Formik
//       initialValues={{
//         title:'',
//         details:'',
//         author:'',
//         image:''
//       }}

//       onSubmit={async(val)=>{
//         try{
//             await addPost(val).unwrap();
//             toast.success('Post Added SuccessFully')
//         }catch(err){
//             toast.error(err.data);
//         }
//       }}

//       validationSchema={valSchema}
      

//       >
//         {({handleChange, handleSubmit, touched, errors,values})=>(
//             <Form
//             className="p-5 space-y-5 "
//             onSubmit={handleSubmit}
//             >
//                 <div>
//                     <Input
//                     onChange={handleChange}
//                     label="Title"
//                     labelPlacement="outside"
//                     name="title"
//                     placeholder="Enter Title"
//                     value={values.title}
//                     type="text"
//                 />
//                 {errors.title && touched.title ? <div>{errors.title}</div> : null}
//                 </div>
                
//                 <div>
//                     <Input
//                     onChange={handleChange}
//                     label="Details"
//                     labelPlacement="outside"
//                     name="details"
//                     placeholder="Enter Details"
//                     value={values.details}
//                     type="text"
//                 />
//                 {errors.details && touched.details ? <div>{errors.details}</div> : null}
//                 </div>

//                 <div>
//                     <Input
//                     onChange={handleChange}
//                     label="Author"
//                     labelPlacement="outside"
//                     name="author"
//                     placeholder="Enter Author"
//                     value={values.author}
//                     type="text"
//                 />
//                 {errors.author && touched.author ? <div>{errors.author}</div> : null}
//                 </div>

//                 <div>
//                     <Input
//                     onChange={handleChange}
//                     label="Image"
//                     labelPlacement="outside"
//                     name="image"
//                     placeholder="Enter Image"
//                     value={values.image}
//                     type="text"
//                 />
//                 {errors.image && touched.image ? <div>{errors.image}</div> : null}
//                 </div>

               

//                 <Button 
//                 isLoading={isLoading}
//                 color="primary" type="submit" >Submit</Button>

//             </Form>
//         )}
//       </Formik>
//     </div>
//   )
// }



import { Form } from "@heroui/form";
import { Button, Input } from "@heroui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useCreatePostMutation } from "./postApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

 const valSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  details: Yup.string().required("Details are required"),
  author: Yup.string().required("Author is required"),
  image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
});

export default function AddPost() {
  const [addPost, { isLoading }] = useCreatePostMutation();
  const nav = useNavigate();
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Post</h2>

      <Formik
        initialValues={{
          title: "",
          details: "",
          author: "",
          image: "",
        }}
        validationSchema={valSchema}
        onSubmit={async(val)=>{
        try{
            await addPost(val).unwrap();
            toast.success('Post Added SuccessFully');
            nav(-1);
        }catch(err){
            toast.error(err.data);
        }
      }}
      >
        {({ handleChange, handleSubmit, touched, errors, values }) => (
          <Form className="space-y-6" onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <Input
                onChange={handleChange}
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Enter Title"
                value={values.title}
                type="text"
                fullWidth
              />
              {errors.title && touched.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Details */}
            <div>
              <Input
                onChange={handleChange}
                label="Details"
                labelPlacement="outside"
                name="details"
                placeholder="Enter Details"
                value={values.details}
                type="text"
                fullWidth
              />
              {errors.details && touched.details && (
                <p className="text-red-500 text-sm mt-1">{errors.details}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <Input
                onChange={handleChange}
                label="Author"
                labelPlacement="outside"
                name="author"
                placeholder="Enter Author Name"
                value={values.author}
                type="text"
                fullWidth
              />
              {errors.author && touched.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>

            {/* Image */}
            <div>
              <Input
                onChange={handleChange}
                label="Image URL"
                labelPlacement="outside"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={values.image}
                type="text"
                fullWidth
              />
              {errors.image && touched.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                isLoading={isLoading}
                color="primary"
                type="submit"
                className="w-full"
              >
                Submit Post
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
