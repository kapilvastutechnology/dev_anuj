"use server";

import { Employee } from "@/models/model";
import axios from "axios";

export async function addEmployee(employee:Employee){
    try {
      await axios.post('https://68e33fad8e14f4523dacdbdb.mockapi.io/employee',employee);
        return {success:true,
            message:'Employee added successfully'
        }
    } catch (err) {
      return {success:false,
        message:'failed to added employee'
      }  
    }
}