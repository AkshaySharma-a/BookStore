"use client";

import CommonCard from "@/app/components/common/commonCard";
import Inputfield from "@/app/components/common/formfields/inputFields";
import ProfilePic from "@/app/components/common/profilPic";
import { loginUser } from "@/app/services/authService";
import { useState } from "react";

export default function Login() {
  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
  });
  console.log(initialValue);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(
        initialValue.email,
        initialValue.password
      );
      console.log("Login successful:", response);
    } catch (error: any) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <CommonCard extraClass="">
        <div className="flex flex-col items-center space-y-4">
          <ProfilePic src="" alt="User 3" size={155} isLoading={false} />
          <form onSubmit={handleLogin}>
            <Inputfield
              type="email"
              name="email"
              value={initialValue.email}
              id="email"
              floatingLabel={true}
              labelText="Email*"
              fieldClass=""
              onChange={(e) =>
                setInitialValue((value) => ({
                  ...value,
                  email: e.target.value,
                }))
              }
              required={true}
            />

            <Inputfield
              type="password"
              name="password"
              value={initialValue.password}
              id="password"
              floatingLabel={true}
              labelText="Password*"
              fieldClass=""
              onChange={(e) =>
                setInitialValue((value) => ({
                  ...value,
                  password: e.target.value,
                }))
              }
              required={true}
            />

            <button type="submit" className="btn">
              Signin
            </button>
          </form>
        </div>
      </CommonCard>
    </div>
  );
}
