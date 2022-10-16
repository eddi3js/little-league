import AppLayout from "@/components/layout";
import { useRouter } from "next/router";

export default function Messages() {
  const r = useRouter();
  return <AppLayout>Messages</AppLayout>;
}
