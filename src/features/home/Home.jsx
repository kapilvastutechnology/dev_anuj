
import { Form, Input } from "@heroui/react";
import {Formik} from "formik";
import { useLazySearchRecipeQuery } from "../recipes/recipeApi";
import toast from "react-hot-toast";
export default function Home() {
  const [searchRecipe,{isLoading,data}] = useLazySearchRecipeQuery();
  console.log(data)
  return (
    <div className="p-5 space-y-5 " >
      <Formik
      initialValues={{
        search: ''
      }}

      onSubmit={async(val,{resetForm})=>{
        try{
          await searchRecipe(val.search)
          resetForm();
        }catch(err){
          toast.error(err.data);
        }
      }}

      >
        {({handleChange, handleSubmit, values})=>(
          <Form
          className="max-w-[400px]"
          onSubmit={handleSubmit}
          >
            <Input
            onChange={handleChange}
            name="search"
            placeholder="Search"
            value={values.search}
            />
          </Form>
        )}
      </Formik>


{/* {isLoading && <h1>Loading</h1>}
{data && data.recipes.length > 0 ? (
  data.recipes.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  ))
) : (
  <h1>No recipe found</h1>
)} */}


{isLoading && <h1>Loading...</h1>}

{/* Show recipes if they exist */}
{data && data.recipes && data.recipes.length > 0 && (
  data.recipes.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-[500px] h-[500px]" />
    </div>
  ))
)}

{/* Show "No recipe found" only when API call is done and result is empty */}
{data && data.recipes && data.recipes.length === 0 && (
  <h1>No recipe found</h1>
)}



    </div>
  )
}
