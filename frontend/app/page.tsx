"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    router.push("/dashboard");
  } else {
    router.push("/login");
  }
  return (
    <>
      <h1>books</h1>
    </>
  );
}
