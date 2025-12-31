"use server";

import { Employee } from "@/models/model";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function addEmployee(employee:Employee){
    try {
      await axios.post('https://68e33fad8e14f4523dacdbdb.mockapi.io/employee',employee);
      revalidatePath('/');
        return {success:true,
            message:'Employee added successfully'
        }
    } catch (err) {
      return {success:false,
        message:err.message
      }  
    }
}


export async function removeEmployee(id:string){
    try {
      await axios.delete(`https://68e33fad8e14f4523dacdbdb.mockapi.io/employee/${id}`);
      revalidatePath('/');
        return { 
          success:true,
          message:'Employee delete successfully'
        }
    } catch (err) {
      return {
        success:false,
        message:err.message
      }  
    }
}


export async function updateEmployee(employee:Employee){
    try {
      await axios.patch(`https://68e33fad8e14f4523dacdbdb.mockapi.io/employee/${employee.id}`,employee);
      revalidatePath('/');
        return { 
          success:true,
          message:'Employee update successfully'
        }
    } catch (err) {
      return {
        success:false,
        message:err.message
      }  
    }
}