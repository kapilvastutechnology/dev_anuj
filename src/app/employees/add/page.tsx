"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmployeeAdd() {

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Employee</CardTitle>
        <CardDescription>
          Enter your details
        </CardDescription>
        
      </CardHeader>
      <CardContent>

        
        
        <form> 
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Jhone Doe"
       
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                name="position"
                placeholder="Developer"
    
              />
            </div>


            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="name"
                type="number"
                placeholder="98....."
    
              />
            </div>

        <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Submit
        </Button>
        
      </CardFooter>
           
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
