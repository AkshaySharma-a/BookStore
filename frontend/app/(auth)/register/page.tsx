"use client";

import CommonCard from "@/app/components/common/commonCard";
import Inputfield from "@/app/components/common/formfields/inputFields";
import ProfilePic from "@/app/components/common/profilPic";
import { apiRequest } from "@/app/lib/apiHelper";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function Register() {
  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
    userName: "",
    address: "",
  });
  const errors = {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await apiRequest(
        "POST",
        "/sign-up",
        initialValue,
        false,
        {}
      );

      if (response.success && response.data) {
        toast("User created successfully!");
      } else {
        console.log(response);
        toast(response.error || "Please try Agane leater !");
      }

      setIsModalOpen(true); // Open modal
    } catch (error) {
      console.error("API Error:", error);
      // setModalMessage("Sarver Error. Please try again.");
      toast("Sarver Error. Please try again.");
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (isModalOpen && modalMessage) {
      alert(modalMessage);
      setIsModalOpen(false); // Reset state after alert
    }
  }, [isModalOpen, modalMessage]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ToastContainer position="bottom-center" />
      <CommonCard extraClass="">
        <div className="flex flex-col items-center space-y-4">
          <ProfilePic src="" alt="User 3" size={155} isLoading={false} />
          <form onSubmit={handleApi}>
            <Inputfield
              name="userName"
              type="text"
              value={initialValue.userName}
              id="userName"
              floatingLabel={true}
              labelText="User Name*"
              fieldClass=""
              // errors={errors?.userName?.message}
              onChange={(e) =>
                setInitialValue((value) => ({
                  ...value,
                  userName: e.target.value,
                }))
              }
              required={true}
            />

            <Inputfield
              type="email"
              name="email"
              value={initialValue.email}
              id="email"
              floatingLabel={true}
              labelText="Email*"
              // errors={errors?.userName?.message}
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
              name="password"
              type="password"
              value={initialValue.password}
              id="password"
              floatingLabel={true}
              labelText="Password*"
              fieldClass=""
              // errors={errors?.password?.message}
              onChange={(e) =>
                setInitialValue((value) => ({
                  ...value,
                  password: e.target.value,
                }))
              }
              required={true}
            />

            <Inputfield
              name="address"
              type="text"
              value={initialValue.address}
              id="address"
              floatingLabel={true}
              labelText="Address*"
              fieldClass=""
              // errors={errors?.address?.message}
              onChange={(e) =>
                setInitialValue((value) => ({
                  ...value,
                  address: e.target.value,
                }))
              }
              required={true}
            />

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </CommonCard>
      {/* Tailwind Modal
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <p className="text-lg text-center">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
