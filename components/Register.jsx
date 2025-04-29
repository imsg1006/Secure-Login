"use client";
import React from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/SignUp"
import { cn } from "../lib/utils";
 

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (<div
    className="shadow-input border-white border-2 bg-[#1c1c1c] mt-20 mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black"
  >
    {/* Center only the header and paragraph */}
    <div className="text-center">
      <h2 className="text-xl font-bold text-white">
        Welcome to Secure Login 
      </h2>
      <p className="mt-2 max-w-sm text-sm text-white dark:text-neutral-300 mx-auto">
        A demo application which implements 2-Factor Authentication
      </p>
    </div>
  
    <form className="my-8">
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <LabelInputContainer className="w-full text-left">
          <Label className="text-white" htmlFor="firstname">Your Name</Label>
          <Input id="firstname" placeholder="name" type="text" />
        </LabelInputContainer>
      </div>
  
      <LabelInputContainer className="mb-4 text-left">
        <Label className="text-white" htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="your email" type="email" />
      </LabelInputContainer>
  
      <LabelInputContainer className="mb-4 text-left">
        <Label className="text-white" htmlFor="password">Password</Label>
        <Input id="password" placeholder="your password" type="password" />
      </LabelInputContainer>
  
      <LabelInputContainer className="mb-8 text-left">
        <Label className="text-white" htmlFor="twitterpassword">Confirm password</Label>
        <Input id="twitterpassword" placeholder="re-enter your password" type="password" />
      </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>

        <h1 className="text-white mt-4 text-center">
            Already have an Account?{" "}
  <a className="text-blue-200 hover:text-blue-400" href="">Login</a>
</h1>

         </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
