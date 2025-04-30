"use client";
import React from "react";
import { useLocation } from "react-router-dom";

export function Welcome() {
    const location = useLocation();
    const name = location.state?.name || "";
  
    return (
      <div className="shadow-input border-white border-2 bg-[#1c1c1c] mt-20 mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-400">
            ✅ OTP Verified, {name}!
          </h2>
          <p className="mt-4 text-white text-sm">
            Welcome aboard, <span className="text-green-300 font-semibold">{name}</span>! Your identity has been successfully verified.
            You can now access your dashboard and explore all the features.
          </p>
  
          <a href="/dashboard">
            <button
              className="mt-6 group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-green-600 to-emerald-500 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] hover:from-green-700 hover:to-emerald-600 transition"
            >
              Go to Dashboard →
              <BottomGradient />
            </button>
          </a>
        </div>
      </div>
    );
  }

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};