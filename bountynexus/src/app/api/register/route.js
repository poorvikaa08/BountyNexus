import Hacker from "../../models/hackermodels";
import { connect } from "http2";
import {NextResponse} from "next/server";
import { connectMongoDB } from "../../lib/mongodb"; // Import your connectMongoDB from "../../lib/mongodb"; 
import bcrypt from "bcryptjs";              

export async function POST(request) {
    const { fullName, username, email, password } = await request.json();
    //console.log(fullName, username, email, password);
    const HashedPassword = await bcrypt.hash(password, 12);
    await connectMongoDB();
    await Hacker.create({
        fullName,
        username,
        email,
        password: HashedPassword,
        score: 0
    });


    return NextResponse.json({message: "Success"});
}