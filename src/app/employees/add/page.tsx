"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner";
import { addEmployee } from "@/lib/actions";
import { Formik } from "formik";
import {  useTransition } from "react";
import toast from "react-hot-toast";

export default function EmployeeAdd() {
const [loading,startTransition] = useTransition();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Employee</CardTitle>
        <CardDescription>
          Enter your details
        </CardDescription>
        
      </CardHeader>
      <CardContent>

        <Formik
        initialValues={{
          name:"",
          position: "",
          age:0
        }}

        onSubmit={async(val)=>{
          startTransition(async()=>{
            try {
            const res = await addEmployee(val);
            toast.success(res.message);
          } catch (err) {
            toast.error('Something went wrong');
          }
          });
          
        }}
        >
          {({handleSubmit, handleChange,values})=>(
             <form
             onSubmit={handleSubmit}
             > 
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
              onChange={handleChange}
                id="name"
                name="name"
                value={values.name}
                placeholder="Jhone Doe"
       
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="position">Position</Label>
              <Input
              onChange={handleChange}
              value={values.position}
                id="position"
                name="position"
                placeholder="Developer"
    
              />
            </div>


            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>

              <Input
              onChange={handleChange}
                id="age"
                name="name"
                type="number"
                placeholder="55"
    
              />
            </div>

            {loading ? <Button disabled  className="w-full">
           <Spinner/> Submit
        </Button> : <Button type="submit" className="w-full">
           Submit 
        </Button>
          }
           
          </div>
        </form>
          )}

        </Formik>
  
      </CardContent>
    </Card>
  )
}
