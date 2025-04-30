"use client";
import React from "react";

export function DashboardPage() {
  return (
    <div className="shadow-input border-white border-2 bg-[#1c1c1c] mt-20 mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-400">
          🧑‍💻 Welcome to Your Dashboard
        </h2>
        <p className="mt-4 text-white text-sm">
          Here's a quick overview of your account and settings.
        </p>

        <div className="mt-8 text-left space-y-4 text-white text-sm">
           

          <div className="border border-gray-600 p-3 rounded-md bg-[#2a2a2a]">
            <h3 className="font-semibold text-green-300">🔐 Security Status</h3>
            <p>2FA: Enabled</p>
            <p>Last OTP Verification: 5 mins ago</p>
          </div>
        </div>

        <button 
          className="mt-8 group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-red-600 to-rose-500 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] hover:from-red-700 hover:to-rose-600 transition"
        >
            <a href="/login">Logout</a>
          
          <BottomGradient />
        </button>
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
