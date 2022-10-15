import { AuthContext, authPage } from "@/utils/authPage";

export default function App() {
  return <div>This is the logged in page</div>;
}

export async function getServerSideProps(context: AuthContext) {
  return await authPage(context);
}
