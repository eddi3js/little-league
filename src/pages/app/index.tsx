import AppLayout from "@/components/layout";
import { AuthContext, authPage } from "@/utils/authPage";

export default function App() {
  return (
    <AppLayout>
      <p>APP</p>
    </AppLayout>
  );
}

export async function getServerSideProps(context: AuthContext) {
  return await authPage(context);
}
