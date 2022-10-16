import AppLayout from "@/components/layout";
import { useRouter } from "next/router";

export default function Messages() {
  const r = useRouter();
  console.log(r, "R");
  return <AppLayout>Messages</AppLayout>;
}
