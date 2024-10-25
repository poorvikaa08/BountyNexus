// import Hacker from "../../models/hackermodels";
// import { connect } from "http2";
// import {NextResponse} from "next/server";
// import { connectMongoDB } from "../../lib/mongodb"; // Import your connectMongoDB from "../../lib/mongodb"; 
// //import bcrypt from "bcryptjs";              

// export async function POST(req) {
//     await connectMongoDB();
//     const { email } = await req.json();
//     const user = await Hacker.findOne({ email }).select("_id");
//     console.log(user);
//     return NextResponse.json({ user });
//     //console.log(fullName, username, email, password);
//     //const HashedPassword = await bcrypt.hash(password, 12);
    
   


//     //return NextResponse.json({message: "Success"});
//     // const res = await fetch("/api/register/hacker", {
//     //     method: "POST",
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({ fullName, username, email, password, agreeToTermsAndConditions, agreeToCodeOfEthics }),
//     // });
//     // const data = await res.json();
//     // return data;
// }

import Hacker from "../../models/hackermodels";
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb"; // Import your MongoDB connection logic
import bcrypt from "bcryptjs";  // Make sure bcrypt is imported

export async function POST(req) {
    await connectMongoDB();

    try {
        // Parse the email and password from the request body
        const { email, password } = await req.json();
        console.log("Request email:", email);
        console.log("Request password:", password);

        // Find the user by email
        const user = await Hacker.findOne({ email });

        // If the user is not found, return an error response
        if (!user) {
            console.log("User not found");
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }

        console.log("Stored password hash:", user.password);

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Is password valid:", isPasswordValid);

        // If the password does not match, return an error response
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }

        // If the email and password match, return a success response
        return NextResponse.json({ message: "Login successful", userId: user._id });

    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ message: "An error occurred during login" }, { status: 500 });
    }
}

