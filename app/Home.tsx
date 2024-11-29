"use client"; // Ensure this is a client component

import { useUser } from "@clerk/clerk-react"; // Clerk hook to get user info
import Link from "next/link"; // Next.js link for navigation

export default function Home() {
  const { isSignedIn, user } = useUser(); // Get the user authentication status and info

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to the School Portal</h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center">
          {!isSignedIn ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                You are not signed in
              </h2>
              <p className="mb-6">
                Please sign in to access your portal and other features.
              </p>
              <Link href="/sign-in">
                <a className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
                  Sign In
                </a>
              </Link>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Hello, {user?.firstName}!
              </h2>
              <p className="mb-6">
                Welcome back to your school portal. Explore the features below.
              </p>
              <div className="flex justify-center space-x-8">
                <Link href="/portal">
                  <a className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
                    Go to Portal
                  </a>
                </Link>
                <Link href="/enroll">
                  <a className="inline-block bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
                    Enroll
                  </a>
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 School Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
