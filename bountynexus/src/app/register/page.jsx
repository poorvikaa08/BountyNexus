"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.css";
import DOMPurify from 'dompurify';

export default function HackerRegister() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!validateFullName(fullName)) {
      setError("Please enter a valid full name.");
      return;
    }

    if (!validateUsername(username)) {
      setError("Username must be alphanumeric and contain at least 3 characters.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and symbols.");
      return;
    }

    const formData = {
      fullName: sanitize(fullName), // Sanitize full name (optional)
      username: sanitize(username), // Sanitize username
      email: sanitize(email), // Sanitize email
      password: password, // Password is not sanitized for security reasons
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const form = e.target;
        form.reset(); // Clear form fields after successful registration
        router.push("/login");
      } else {
        //const data = await res.json();
        setError("Registration failed");
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const validateFullName = (name) => {
    // Implement validation logic for full name (e.g., check for non-empty)
    return name.trim().length > 0;
  };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]{3,}$/;
    return regex.test(username);
  };

  const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,4}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const sanitize = (input) => {
    // Use DOMPurify for more robust HTML sanitization
    return DOMPurify.sanitize(input);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-1/3">
        <h1 className="text-3xl font-bold mb-5" style={{ textAlign: "center" }}>Register</h1>

        {/* Full Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Username Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div style={{ marginBottom: "1rem" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <p>
              By clicking 'Create account', you agree to our <Link href="/terms">Terms and Conditions</Link>, <Link href="/code-of-ethics">Code of Ethics</Link>, <Link href="/privacy-policy">Privacy Policy</Link>, and <Link href="/disclosure-guidelines">Disclosure Guidelines</Link>.
            </p>
          </label>
        </div>

        {/* Submit Button */}
        <div className="button-container" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create account
          </button>
        </div>

        {/* Link to login */}
        <div className="button-container" style={{ textAlign: "center" }}>
          <Link href="/login">
            Already have an account?  Login
          </Link>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}