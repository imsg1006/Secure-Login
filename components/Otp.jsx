"use client";
import React from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/SignUp"; // Assuming you're using this Input component
import { cn } from "../lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function VerifyOtpForm() {
  const [email, setEmail] = useState(localStorage.getItem("loginEmail") || "");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-login-otp", {
        email,
        otp,
      });
      console.log("OTP verified:", response.data);
      const name = response.data.name;
      navigate("/welcome", { state: { name } });
    } catch (error) {
      console.error("OTP verification failed:", error.response?.data || error.message);
    }
  };
  return (
    <div className="shadow-input border-white border-2 bg-[#1c1c1c] mt-20 mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">
          Verify OTP
        </h2>
        <p className="mt-2 max-w-sm text-sm text-white dark:text-neutral-300 mx-auto">
          Enter the 6-digit code sent to your email
        </p>
      </div>

      <form className="my-8" onSubmit={handleVerify}>
        <LabelInputContainer className="mb-8 text-left">
          <Label className="text-white" htmlFor="otp">OTP</Label>
          <Input
            id="otp"
            placeholder="Enter your OTP"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Verify OTP &rarr;
          <BottomGradient />
        </button>

        {/* Optional: resend OTP */}
        {/* <p className="mt-4 text-sm text-center text-neutral-400">
          Didn't receive the code?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Resend OTP
          </a>
        </p> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
