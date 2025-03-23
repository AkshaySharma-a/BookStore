"use client";

import { useEffect } from "react";
import { loginUser } from "../services/authService";

export default function Page() {
  useEffect(() => {
    const handleLogin = async () => {
      console.log("//////////////////////////");
      try {
        const response = await loginUser(
          "Akshaysharma@gmail.com",
          "12345678A!"
        );
        console.log("Login successful:", response);
      } catch (error: any) {
        console.error("Login failed:", error.message);
      }
    };

    handleLogin();
  }, []);

  return <div>Dashboard</div>;
}
