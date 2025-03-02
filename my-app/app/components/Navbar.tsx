// App/Components/Navbar.tsx
"use client";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { handleSignOut, handleSignIn } from "../../actions"; // Import the functions
import React, { useState, useEffect } from "react";
// import { useSession } from "next-auth/react"; 

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <header className="px-5 py-3 bg-slate-500 shadow-sm font-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="text-white">Create Startup</span>
              </Link>

              <form action={handleSignOut}>
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit">Login with GitHub</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
