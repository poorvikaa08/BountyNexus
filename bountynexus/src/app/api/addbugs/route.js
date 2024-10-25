
import Bugs from "../../models/bugsmodel";
//import { connect } from "http2";
import {NextResponse} from "next/server";
import { connectMongoDB } from "../../lib/mongodb"; // Import your connectMongoDB from "../../lib/mongodb"; 
//import bcrypt from "bcryptjs";              
await connectMongoDB();

export async function POST(request) {
    const { email,title,description,severity } = await request.json();
    //await connectMongoDB();
    await Bugs.create({
        email,
        title,
        description,
        severity
    });

//console.log(email,title,description,severity);
    return NextResponse.json({message: "Success"});  
}

export async function GET(request) {
    //await connectMongoDB();
    const bugs = await Bugs.find({});
    console.log(bugs);
    return NextResponse.json({ bugs });
}

