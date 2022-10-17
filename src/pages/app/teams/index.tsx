// this is for the league administration panel

import AppLayout from "@/components/layout";
import { Routes } from "@/utils/constants";
import { Team } from "@prisma/client";
import Link from "next/link";

// TODO: check account permissions first
export default function Teams() {
  const teams = [] as Team[];

  return (
    <AppLayout>
      <div className="mt-4 flex w-full flex-col">
        <div className="mb-4 flex flex-row items-center justify-between">
          <h1 className="font-boldd text-2xl">Teams</h1>

          <Link href={`${Routes.Teams}/new`}>
            <button className="btn btn-secondary btn-sm gap-2">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create Team
            </button>
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Coach</th>
                <th align="center">Member Count</th>
              </tr>
            </thead>
            <tbody>
              {!teams.length && (
                <tr>
                  <td colSpan={3} className="text-center">
                    No teams found. Please add one
                  </td>
                </tr>
              )}
              {teams.map((team: Team, i) => (
                <tr key={team.id}>
                  <td>{team.name}</td>
                  <td>coaches name goes here</td>
                  <td align="center">7</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
