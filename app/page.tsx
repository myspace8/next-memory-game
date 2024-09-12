/**Purpose: This is the main landing page of the app. It might contain basic information about the game, a sign-up button, and a call-to-action to start playing.
Relevance: The first point of interaction for users, providing an introduction to the game, and guiding users to create an account or start playing. */

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Main landing page (home)
      <a href="/profile">Profile</a>
      <a href="/sign-up">Sign up</a>
    </div>
  );
}
