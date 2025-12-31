import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between p-5" >
      <h1 className="text-xl font-bold" >Logo</h1>
      <nav className="space-x-5" >
      <Link href={'/employees/add'} >EmployeeAdd</Link>
      <Link href={'/about'} >About</Link>
      <Link href={'/contact'} >Contact</Link>
      <Link href={'/posts'} >Posts</Link>
      </nav>
    </div>
  )
}
