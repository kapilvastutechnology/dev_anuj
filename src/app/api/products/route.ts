import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

    const params = req.nextUrl.searchParams;
    console.log(params.get('number'));


    return NextResponse.json({status: 'success'});
}

export async function POST(req:Request){
    const a = await req.json();
    console.log(a);
    return NextResponse.json({status:200});
}



