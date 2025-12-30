'use server';

import { News } from "@/models/News";
import { connectDb } from "./db";


export async function getNews() {
  await connectDb();
  try {
    const news = await News.find({});
    return { success: true, data: news };
  } catch (err) {
    return {
      success: false,
      message: 'Failed to get news'
    }
  }
}

export async function addNews() {
  await connectDb();
  try {
    await News.create({
      title: 'title',
      description: 'description',
      image: 'image'
    });

    return {
      success: true,
      message: 'News added successfully'
    }
  } catch (err) {
    return {
      success: false,
      message: 'Failed to add news'
    }
  }



}