import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-4 py-2" >
      <h1 className="text-xl font-bold" >Logo</h1>
      <nav className="space-x-5" >
        <Link href={'/employees/add'} >Add Employee</Link>
        <Link href={'/posts'} >Post</Link>
       <Link href={'/about'}>About</Link>
      <Link href={'/contact'} >Contact</Link>
      </nav>
      
    </div>
  )
}
