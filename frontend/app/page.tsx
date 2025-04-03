"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return (
    <>
      <h1>books</h1>
    </>
  );
}
