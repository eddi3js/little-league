import AppLayout from "@/components/layout";
import { Member } from "@prisma/client";
import { useRouter } from "next/router";

export default function TeamPage() {
  const { query } = useRouter();

  const isNew = query.teamId === "new";

  const members = [] as any;

  return (
    <AppLayout>
      <div className="flex w-full flex-col">
        <div className="mb-8 flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Team Details</h1>
          <button className="btn btn-secondary">Save Team</button>
        </div>

        <div className="mb-4 flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex w-full flex-col">
            <p className="mb-1 text-sm">Team Name</p>
            <input
              type="text"
              placeholder="Enter team name or leave blank to auto generate"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="dropdown">
            <div className="form-control w-full">
              <p className="mb-1 text-sm">Head Coach</p>
              <input
                tabIndex={0}
                type="text"
                placeholder="Select Coach"
                className="input input-bordered w-full"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box max-h-32 w-full overflow-y-auto bg-base-100 p-2 shadow"
            >
              <li className="p-3">Start typing an email to search</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-5 text-xl font-bold">Add New Member</h2>
        <div className="mt-4 flex w-full flex-col items-center gap-3 md:flex-row">
          <div className="dropdown w-full">
            <div className="form-control w-full">
              <p className="mb-1 text-sm">Add Member</p>
              <input
                tabIndex={0}
                type="text"
                placeholder="Select member"
                className="input input-bordered w-full"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box max-h-32 w-full overflow-y-auto bg-base-100 p-2 shadow"
            >
              <li className="p-3">Start typing an email to search</li>
            </ul>
          </div>

          <div className="flex w-full flex-col">
            <p className="mb-1 text-sm">Member Type</p>
            <select
              defaultValue="player"
              className="select select-bordered w-full"
            >
              <option value="staff">Staff</option>
              <option value="player">Player</option>
            </select>
          </div>
          <button className="btn btn-secondary btn-sm h-12 w-full md:mt-5 md:w-fit">
            Add
          </button>
        </div>

        <h2 className="mt-10 text-xl font-bold md:mt-7">Members</h2>
        <div className="mt-4 flex w-full flex-col">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact Email</th>
                  <th align="center">Active</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {!members.length && (
                  <tr>
                    <td colSpan={3} className="text-center">
                      No members found. Please add one
                    </td>
                  </tr>
                )}
                {members.map((m: Member) => (
                  <tr key={m.id}>
                    <td>Cy Ganderton</td>
                    <td>
                      <a
                        className="link text-secondary"
                        href="mailto:ehsanmarco@gmail.com"
                      >
                        ehsanmarco@gmail.com
                      </a>
                    </td>
                    <td align="center">
                      <input type="checkbox" className="toggle" />
                    </td>
                    <td align="center">
                      <button className="mr-2">
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
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                      <button>
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
