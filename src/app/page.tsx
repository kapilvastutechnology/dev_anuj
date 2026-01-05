<<<<<<< HEAD
import DeleteEmployee from "@/components/DeleteEmployee";
import { Button } from "@/components/ui/button";
import { Employee } from "@/models/model";
import axios from "axios";
import { Edit2Icon} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const res = await axios.get('https://68e33fad8e14f4523dacdbdb.mockapi.io/employee');
  const employees = res.data;
  
  return (
    <div>
      {employees.map((employee:Employee)=>{
        return <div key={employee.id} className="border mb-5 p-5" >  
        <h1>{employee.name}</h1>
        <p>{employee.position}</p>
        <p>{employee.age}</p>

        <div className="mt-5 flex gap-5">
          <Link href={`/employees/${employee.id}`}>
          <Button variant={'ghost'}>
            <Edit2Icon/>
            </Button>
          </Link>
          <DeleteEmployee id={employee.id ?? '' } />
        </div>

=======
import axios from "axios"

export default async function Home() {
  const res = await axios.get('https://dummyjson.com/products');
  const products = res.data.products;
  return (
    <div className="grid gap-5 p-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {products.map((product: any) => (
        <div key={product.id} >
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
>>>>>>> 95909d63cceb9a0a92a5262051610015c50af37d
        </div>
      ))}
    </div>
  )
}
