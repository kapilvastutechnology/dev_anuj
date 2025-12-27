"use server";

import { News } from "@/models/news";
import { connectDb } from "./db";
import { NewsModel } from "@/models/comment_model";

export async function getNews() {
    
    try {
        await connectDb();
        const news = await News.find({});
        return {success:true,data:news};
    } catch (err) {
        return {success:false,data: 'Failed to fetch news'};
    }
}


export async function addNews(news:NewsModel) {
    await connectDb();
   try {
    await News.create(news);
    return {success:true,data:'News added successfully'}
   } catch (err) {
    return {success:false,data:'Failed to add news'}
   }
}





// "use server";
// import { Employee } from "@/models/comment_model";
// import axios from "axios";
// import { revalidatePath } from "next/cache";

// export async function addEmployee(employee: Employee) {
//     try {
//         await axios.post('https://68e33fad8e14f4523dacdbdb.mockapi.io/employee',employee);
//         revalidatePath('/');
//         return {
//             success: true,
//             message: 'Employee added successfully'
//         }
//     } catch (err) {
//         return {
//             success:false,
//             message: err.message
//         }
//     }
// }

// export async function updateEmployee( employee: Employee) {
//     try {
//         await axios.patch(`https://68e33fad8e14f4523dacdbdb.mockapi.io/employee/${employee.id}`,employee);
//         revalidatePath('/');
//         return {
//             success: true,
//             message: 'Employee updated successfully'
//         }
//     } catch (err) {
//         return {
//             success:false,
//             message: err.message
//         }
//     }
// }


// export async function removeEmployee(id:string) {
//     try {
//         await axios.delete(`https://68e33fad8e14f4523dacdbdb.mockapi.io/employee/${id}`);
//         revalidatePath('/');
//         return {
//             success: true,
//             message: 'Employee remove successfully'
//         }
//     } catch (err) {
//         return {
//             success:false,
//             message: err.message
//         }
//     }
// }



