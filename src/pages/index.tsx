import type { NextPage } from "next";
import Head from "next/head";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import { AuthContext } from "@/utils/authPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leagues.run</title>
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="card w-full bg-base-200 shadow md:w-80">
          <div className="card-content p-6 py-3">
            <h1 className="text-2xl font-bold">Leagues.run</h1>
            <p className="my-3 text-sm">Login to your free account.</p>
            <button
              onClick={() => signIn()}
              className="btn btn-outline btn-ghost w-full bg-white capitalize hover:bg-secondary hover:text-white"
            >
              Login with Discord
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: AuthContext) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: Routes.Home,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
