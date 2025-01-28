"use client";
import { signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="px-5 py-3 bg-slate-500 shadow-sm font-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="startup/create">
                <span className="text-white">Create Startup</span>
              </Link>
              <button onClick={() => signOut()}>
                <span>Logout</span>
              </button>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn({ provider: "github" })}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
