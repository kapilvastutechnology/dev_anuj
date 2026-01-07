'use client'

import { Post } from "@/models/post";
import { db } from "@/utils/firebaseFirestore";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react"
import DeletePost from "./DeletePost";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PostList() {
    const [posts, setPosts]  = useState<Post[]>([]);

    useEffect(()=>{
        const subs = onSnapshot(collection(db,'posts'),(snapshot)=>{
            const posts = snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[];
            setPosts(posts);
        })
    },[]);
  return (
    <div className="p-5" >
      {posts.map((post)=>(
        <div key={post.id} className="mb-4 space-y-5" >{post.title}
        <h1>{post.detail}</h1>
        <img src={post.image} alt="" />
        <div className="flex gap-5 mt-5" >
          <Link href={`/posts/edit/${post.id}`} >
              <Button className="bg-green-700" >Edit</Button>
          </Link>
          
          <DeletePost id={post.id}/>
        </div>
        <hr/>
        </div>
      ))}
    </div>
  )
}
