import Head from "next/head";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Leagues.run</title>
      </Head>
      <Navbar />
      <div className="flex flex-1 flex-col-reverse items-stretch md:flex-row">
        <Sidebar />
        <div
          className={`} mx-auto mt-6 flex h-fit w-full max-w-2xl flex-1 rounded bg-base-100 p-4 px-6
          md:shadow`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
