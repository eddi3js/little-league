import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 flex-col-reverse items-stretch md:flex-row">
        <Sidebar />
        <div className="flex flex-1 px-6 py-4">{children}</div>
      </div>
    </>
  );
}
