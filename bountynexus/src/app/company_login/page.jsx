// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./company_login.css";
// import { signIn } from "next-auth/react";
// import DOMPurify from 'dompurify';

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic client-side validation
//     if (!isEmailValid(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     if (password.trim().length === 0) {
//       setError("Password cannot be empty.");
//       return;
//     }

//     const res = await signIn("credentials", { email: DOMPurify.sanitize(email), password });

//     if (res.error) {
//       setError("Invalid email or password");
//       return;
//     }

//     router.replace("/dashboard"); // Redirect to dashboard on successful login
//   };

//   const isEmailValid = (email) => {
//     const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,4}$/;
//     return regex.test(email);
//   };

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-1/2">
//         <h1 className="text-3xl font-bold mb-5">Login</h1>

//         <div className="mb-5">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Email
//           </label>
//           <input
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               error && !isEmailValid(email) ? "border-red-500" : ""
//             }`}
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))} // Sanitize email input
//             required
//           />
//           {error && !isEmailValid(email) && (
//             <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
//           )}
//         </div>

//         <div className="mb-5">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Password
//           </label>
//           <input
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               error && password.trim().length === 0 ? "border-red-500" : ""
//             }`}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && password.trim().length === 0 && (
//             <p className="text-red-500 text-sm mt-1">Password cannot be empty.</p>
//           )}
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             type="submit" onClick={() => window.location.href = "/"}
//           >
//             Login
//           </button>
//         </div>

//         {/* <div className="flex items-center justify-between" style={{ textAlign: "center" }}>
//           <Link href="/forgot-password">Forgot Password</Link>
//         </div> */}

//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </form>
//     </div>
//   );
// }



'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import DOMPurify from 'dompurify';
import styles from "./company_login.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    if (password.trim().length === 0) {
      setError("Password cannot be empty.");
      return;
    }
console.log(email, password);
    // Attempt to sign in
     if(email === "admin@gmail.com" && password === "admin") {
      console.log("Login successful");
      router.push("/company_dashboard2"); // Redirect to dashboard on successful login
    } else {
      console.log("Login failed");
      setError("Invalid email or password");
      return;
    }

    // Only redirect to dashboard if login is successful
    if (res.ok) {
      router.replace("/company_dashboard2"); // Redirect to dashboard
    }
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
              error ? "border-red-500" : ""
            }`}
            type="text"
            value={email}
            onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))} // Sanitize email input
            required
          />
          {error && (
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

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}

