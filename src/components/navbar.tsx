import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data } = useSession();
  return (
    <div className="navbar min-h-fit justify-between bg-secondary p-0">
      <a className="pl-4 text-lg lowercase text-base-100">Leagues.run</a>

      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="avatar btn btn-ghost h-fit">
          <div className="flex flex-col rounded-full">
            <Image
              src={data?.user?.image ?? ""}
              alt={data?.user?.name ?? "profile"}
              className="rounded-full"
              width={32}
              height={32}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-2 w-52 bg-base-100 p-2 shadow"
        >
          <li className="p-4 pt-2 text-xs">
            Signed in as: {data?.user?.email}
          </li>
          <li>
            <button onClick={() => signOut()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
