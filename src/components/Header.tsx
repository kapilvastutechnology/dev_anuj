import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between p-5" >
      <h1 className="text-xl font-bold" >Logo</h1>
      <nav className="space-x-5" >
      {/* <Link href={'/employees/add'} >EmployeeAdd</Link>
      <Link href={'/about'} >About</Link>
      <Link href={'/contact'} >Contact</Link>
      <Link href={'/posts'} >Posts</Link> */}
      <SignedOut>
        <SignInButton>SignIn</SignInButton>
        <SignUpButton>SignUp</SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
        <Link href={'/news/add'}>Add News</Link>
      </SignedIn>
      </nav>
    </div>
  )
}
