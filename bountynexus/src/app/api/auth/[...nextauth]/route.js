import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../lib/mongodb"; // Ensure this points to your MongoDB connection file
import User from "../../../models/hackermodels"; // Import your user model
import bcrypt from "bcryptjs";
import { Router } from "express";

const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                await connectMongoDB(); // Ensure your MongoDB is connected
                
                // Find user in database
                const user = await User.findOne({ email: credentials.email });
                console.log(user);
                
                if (!user) {
                    throw new Error("User not found");
                }
                
                // Check password using bcrypt
                const isValid = await bcrypt.compare(credentials.password, user.password);
                
                if (!isValid) {
                    throw new Error("Invalid username or password");
                }
                if(isValid){
                    console.log("User is valid");
                }
                
                // If user is valid, return user object
                // return {
                //     id: user._id,
                //     name: user.username,
                //     email: user.email,
                // };
            },
        }),
    ],
    session: {
        strategy: "jwt",  // Use JWT for session management
    },
    secret: process.env.NEXTAUTH_SECRET,  // Ensure this is set in your environment variables
    pages: {
        signIn: "/login",  // Redirect to custom login page
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
