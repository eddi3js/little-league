import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const { pathname } = useRouter();

  return (
    <ul className="menu menu-horizontal flex w-full justify-evenly overflow-y-auto bg-base-200 text-sm text-base-content md:menu-vertical md:w-56 md:justify-start">
      {playerSidebar.map((sidebarItem) => (
        <li
          key={sidebarItem.name}
          className={`flex flex-1 justify-center md:flex-none ${
            sidebarItem.href === pathname ? "bordered bg-base-300" : ""
          }`}
        >
          <Link href={sidebarItem.href}>
            <a className="flex w-full flex-row justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <Icon name={sidebarItem.icon} />
              </svg>
              <span className="hidden md:flex">{sidebarItem.name}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const playerSidebar = [
  {
    name: "Player Profile",
    icon: "profile",
    href: "/app",
  },
  {
    name: "Schedule",
    icon: "schedule",
    href: "/schedule",
  },
  {
    name: "Messages",
    icon: "message",
    href: "/messages",
  },
];

const Icon = ({ name }: { name: string }) => {
  let icon;

  switch (name) {
    case "schedule":
      icon = (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      );
      break;
    case "message":
      icon = (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      );
      break;
    case "profile":
      icon = (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      );
      break;
    default:
      return null;
  }
  return icon;
};
