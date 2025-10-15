
import { Form } from "@heroui/form";
import { Button, Input } from "@heroui/react";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { valSchema } from "./AddPost";
import { useGetPostQuery, useUpdatePostMutation } from "./postApi";
import { useNavigate } from "react-router";

export default function UpdatePost() {
    const {id} = useParams();
    const nav = useNavigate();
    const {isLoading, error,data} = useGetPostQuery(id);
    const [updatePost,{isUpdating}] = useUpdatePostMutation();
    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1 className="text-red-500" >{error.data}</h1>
    console.log(data)
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update New Post</h2>

      <Formik
        initialValues={{
          title: data.title,
          details: data.details,
          author: data.author,
          image: data.image,
        }}
        validationSchema={valSchema}
        onSubmit={async(val)=>{
        try{
            await updatePost({
                data: val,
                id
            }).unwrap();
            toast.success('Post Update SuccessFully');
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
                isLoading={isUpdating}
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
