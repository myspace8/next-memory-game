/**Purpose: This is the main landing page of the app. It might contain basic information about the game, a sign-up button, and a call-to-action to start playing.
Relevance: The first point of interaction for users, providing an introduction to the game, and guiding users to create an account or start playing. */

// /app/page.tsx
"use client"
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Assuming you've set up AuthContext

export default function HomePage() {
  const { user } = useAuth(); // Get user information from context

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Memory Master!</h1>
        <p className="text-sm mb-8">
          A fun and engaging way to test your memory skills!
        </p>

        {/* Call-to-Action */}
        {user ? (
          <div>
            <Link href="/game">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                Continue Playing
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/sign-up">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg mb-4">
                Sign Up Now
              </button>
            </Link>
            <p className="text-sm text-gray-200">Already have an account?</p>
            <Link href="/sign-in">
              <button className="bg-transparent border border-white hover:bg-white hover:text-purple-700 text-white font-bold py-2 px-6 rounded-lg mt-2">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
