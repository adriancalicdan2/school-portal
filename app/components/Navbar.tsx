"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs"; // Import useUser hook from Clerk

const Navbar: React.FC = () => {
  const { isSignedIn, user } = useUser(); // Get the user and isSignedIn state from Clerk
  const router = useRouter();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">My App</div>
        <div className="space-x-4">
          {/* Home Button */}
          <Link href="/" passHref>
            <Button
              variant="outline"
              className="text-blue-500 border-2 border-transparent hover:border-blue-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md transition-all duration-300"
            >
              Home
            </Button>
          </Link>

          {/* Portal Button */}
          {isSignedIn ? (
            <Button
              onClick={() => router.push("/dashboard")}
              variant="outline"
              className="text-green-500 border-2 border-transparent hover:border-green-500 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition-all duration-300"
            >
              Portal
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/sign-in")}
              variant="outline"
              className="text-green-500 border-2 border-transparent hover:border-green-500 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition-all duration-300"
            >
              Portal
            </Button>
          )}

          {/* Enroll Button */}
          <Link href="/enroll" passHref>
            <Button
              variant="outline"
              className="text-red-500 border-2 border-transparent hover:border-red-500 hover:bg-red-600 hover:text-white py-2 px-4 rounded-md transition-all duration-300"
            >
              Enroll
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
