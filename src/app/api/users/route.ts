import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json({name:'anuj kumar'}, {status:200});
}


export async function POST(req:Request){
  const body = await req.json();
  console.log(body);
  
  return NextResponse.json({name:'afa'},{status:200});
}