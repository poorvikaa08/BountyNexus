// "use client"; // Add this line to mark the component as a Client Component

// import Link from "next/link";
// import { useState } from "react";
// import styles from "./login.css";
// import { useRouter } from "next/navigation";

// // import "/login.css";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);

//     const router = useRouter();

//     const handleSubmit = async (e) => {
//       e.preventDefault();
    
//       // Basic client-side validation (optional but recommended)
//       if (!email || !password) {
//         setError("Please enter both username and password.");
//         return;
//       }
    
//       const formData = {
//         email,
//         password,
//       };
    
//       try {
//         const res = await fetch("/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
    
//         if (res.ok) {
//           // Login successful - handle authentication (e.g., store token in localStorage)
          
//           router.push("/hacker-dashboard"); // Redirect to the homepage or dashboard
//         }
        
//          else {
//           const data = await res.json();
//           setError(data.error || "Login failed. Please check your credentials.");
//         }

//       }

        
        
//       catch (error) {
//         console.error(error);
//         setError("An unexpected error occurred. Please try again later.");
//       }
//     }

//     return(
//         <div className="h-screen flex justify-center items-center">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-10 rounded shadow-md w-1/2"
//             >
//                 <h1 className="text-3xl font-bold mb-5">Login</h1>
//                 <div className="mb-5">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Email
//                     </label>
//                     <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="text"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-5">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Password
//                     </label>
//                     <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         type="submit">
//                         Login
//                     </button>

//                     <div className="flex items-center justify-between" style={{ textAlign: "center" }}>
//                         <Link href="/register">
//                             Not a User Yet? Register
//                         </Link>
//                     </div>


//                     <Link href="/forgot-password">
//                         Forgot Password
//                     </Link>
//                 </div>
//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </form>
//         </div>
//     );

//   }






'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import DOMPurify from 'dompurify';
import "./login.css";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!isEmailValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.trim().length === 0) {
      setError("Password cannot be empty.");
      return;
    }

    // Attempt to sign in
    const res = await signIn("credentials", {
      redirect: false, // Prevents automatic redirection
      email: DOMPurify.sanitize(email),
      password
    });

    if (res.error) {
      // Handle error if credentials are incorrect
      setError("Invalid email or password");
      return;
    }

    // Only redirect to dashboard if login is successful
    if (res.ok) {
      router.replace("/hacker-dashboard"); // Redirect to dashboard
    }
  };

  const isEmailValid = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,4}$/;
    return regex.test(email);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-1/2">
        <h1 className="text-3xl font-bold mb-5">Login</h1>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error && !isEmailValid(email) ? "border-red-500" : ""
            }`}
            type="text"
            value={email}
            onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))} // Sanitize email input
            required
          />
          {error && !isEmailValid(email) && (
            <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
          )}
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error && password.trim().length === 0 ? "border-red-500" : ""
            }`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && password.trim().length === 0 && (
            <p className="text-red-500 text-sm mt-1">Password cannot be empty.</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="flex items-center justify-between" style={{ textAlign: "center" }}>
          <Link href="/register">
            Not a User Yet? Register
          </Link>
        </div>

        <div className="flex items-center justify-between" style={{ textAlign: "center" }}>
          <Link href="/forgot-password">Forgot Password</Link>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}