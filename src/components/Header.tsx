import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between px-5 py-3" >
      <h1 className="text-xl font-bold" >Logo</h1>
      <nav className= "space-x-5" >
        {/* <Link href={'/employees/add'} >Add Employee</Link>
        <Link href="/posts" >Post</Link>
        <Link href="/about" >About</Link>
        <Link href="/contact">Contact</Link>
       */}
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      </nav>
    </div>
  )
}
