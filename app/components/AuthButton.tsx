"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => signIn("google")}
    >
      Sign in with Google
    </button>
  );
}
