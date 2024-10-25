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
        password: HashedPassword});


    return NextResponse.json({message: "Success"});
    // const res = await fetch("/api/register/hacker", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ fullName, username, email, password, agreeToTermsAndConditions, agreeToCodeOfEthics }),
    // });
    // const data = await res.json();
    // return data;
}