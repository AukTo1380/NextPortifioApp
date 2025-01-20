import Link from "next/link"

function page() {
  return (
    <div className="text-red">
      <h1>User Dashboard </h1>
      <ul>
        <li>
          <Link href="/dashboard/user/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/user/2">User 2</Link>
          <li>
            <Link href="/dashboard/user/3">User 3</Link>
          </li>
          <li>
            <Link href="/dashboard/user/4">User 4</Link>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default page