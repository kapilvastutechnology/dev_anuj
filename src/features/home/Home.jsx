
import { Button, Form, Input } from "@heroui/react";
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
            <div>
                <Input
            onChange={handleChange}
            name="search"
            placeholder="Search Recipes..."
            value={values.search}
            />
            </div>
            <Button
            type="submit"
            color="primary"
            >Submit</Button>
          </Form>

        )}
      </Formik>


{isLoading && <h1>Loading...</h1>}
{/* Show recipes if they exist */}
{data && data.recipes && data.recipes.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data.recipes.map((recipe) => (
      <div key={recipe.id} className="border p-3 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">{recipe.name}</h2>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-60 object-cover rounded"
        />
      </div>
    ))}
  </div>
)}

{/* Show "No recipe found" only when API call is done and result is empty */}
{data && data.recipes && data.recipes.length === 0 && (
  <h1>No recipe found</h1>
)}



    </div>
  )
}



// import { Button } from "@heroui/button";
// import { useFilterByCategoryQuery, useGetCategoriesQuery } from "../meals/mealApi"


// export default function Home() {
//   const { isLoading, error, data, refetch } = useFilterByCategoryQuery('Beef');
//   if (isLoading) return <h1>Loading....</h1>
//   if (error) return <h1>{error.data}</h1>
//   console.log(data);
//   return (
//     <div>
//       <Button onPress={refetch}>Refetch</Button>

//     </div>
//   )
// }





