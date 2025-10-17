"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";

const formSchema = z.object({
  Email: z.email("Invalid email"),
  password: z.string(),
  confirmPassword: z.string(),
});

//     password: z
//       .string()
//       .min(8, { message: "Password must be at least 8 characters long." })
//       .max(32, { message: "Password cannot exceed 32 characters." })
//       .regex(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/,
//         {
//           message:
//             "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
//         }
//       ),

//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",

export function ProfileForm() {
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [multi, setMulti] = useState("gmail");
  const [password, setPassword] = useState("password");
  function handleoneye() {
    if (password === "password") {
      setPassword("text");
    } else if (password === "text") {
      setPassword("password");
    }
  }
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.Email);
    setUserpassword(values.password);
    setMulti("password");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  function onSubmit2(values: z.infer<typeof formSchema>) {
    setEmail(values.Email);
    setUserpassword(values.password);
    setMulti("Verified");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log({ email });
  console.log({ userpassword });
  console.log({ multi });
  return (
    <div>
      {multi === "gmail" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <div className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button className="w-[36px] h-[36px] bg-white text-black border-2">
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Create your account
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Sign up to explore your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>

                  <Button className="w-full mt-[24px] bg-[#71717A]">
                    Let's go
                  </Button>
                  <div className="text-[#71717A] text-[16px] mt-[24px] flex gap-4 items-center justify-center">
                    Already have an account ?{" "}
                    <p
                      className="text-blue-700"
                      onClick={() => setMulti("login")}
                    >
                      Log in
                    </p>
                  </div>
                </div>
              )}
            />
          </form>
        </Form>
      )}
      {multi === "password" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit2)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => setMulti("gmail")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Create a strong password
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Create a strong password with letters, numbers.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type={password}
                      placeholder="Password"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={password}
                      placeholder="Confirm password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-2 items-center mt-[24px]">
              <Input
                type="checkbox"
                className="w-[16px] h-[16px]"
                onClick={() => handleoneye()}
              />
              <div className="text-[#71717A]">Show password</div>
            </div>

            <Button className="w-full  bg-[#71717A] ">Let's go</Button>
            <div className="text-[#71717A] text-[16px]  flex gap-4 items-center justify-center">
              Already have an account ?
              <p className="text-blue-700" onClick={() => setMulti("login")}>
                Log in
              </p>
            </div>
          </form>
        </Form>
      )}
      {multi === "login" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit2)} className="space-y-8">
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="mt-[246px] w-[416px] flex flex-col gap-2">
                  <Button
                    className="w-[36px] h-[36px] bg-white text-black border-2"
                    onClick={() => setMulti("gmail")}
                  >
                    <FaAngleLeft />
                  </Button>
                  <FormLabel className="font-bold text-[#09090B] text-[24px]">
                    Log in
                  </FormLabel>
                  <FormDescription className="text-[#71717A] text-[16px]">
                    Log in to enjoy your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Password"
                      className="mt-[24px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={password}
                      placeholder="Password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-2 items-center mt-[24px]">
              <div className="text-[#71717A] underline">Forgot password ?</div>
            </div>

            <Button className="w-full  bg-[#71717A] ">Let's go</Button>
            <div className="text-[#71717A] text-[16px]  flex gap-4 items-center justify-center">
              Dont have an account ?
              <p className="text-blue-700" onClick={() => setMulti("gmail")}>
                Sign up
              </p>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
