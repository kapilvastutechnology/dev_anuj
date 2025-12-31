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

        </div>
      })}
    </div>
  )
}
