

import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDb = async () =>{
    if(isConnected) return;

    try {
        await mongoose.connect('mongodb+srv://Anuj:Anuj@2005@anujapi.pcejgp8.mongodb.net/News');
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        
    }
}