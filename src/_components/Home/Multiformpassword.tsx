// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { FaAngleLeft } from "react-icons/fa6";
// import { useState } from "react";

// const formSchema = z.object({
//   Password: z.minLength(5),
//   Comfirmpassword: z.minLength(5),
// });

// export function ProfileForm() {
//   const [multi, setMulti] = useState("gmail");
//   const [password, setPassword] = useState("password");
//   function handleoneye() {
//     if (password === "password") {
//       setPassword("text");
//     } else if (password === "text") {
//       setPassword("password");
//     }
//   }
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       Password: "",
//       Comfirmpassword: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     setMulti("password");
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }
//   return (
//     <div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="Password"
//               render={({ field }) => (
//                 <div className="mt-[246px] w-[416px] flex flex-col gap-2">
//                   <Button className="w-[36px] h-[36px] bg-white text-black border-2">
//                     <FaAngleLeft />
//                   </Button>
//                   <FormLabel className="font-bold text-[#09090B] text-[24px]">
//                     Create your account
//                   </FormLabel>
//                   <FormDescription className="text-[#71717A] text-[16px]">
//                     Sign up to explore your favorite dishes.
//                   </FormDescription>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="Enter your email address"
//                       className="mt-[24px]"
//                       {...field}
//                     />
//                   </FormControl>

//                   <Button
//                     className="w-full mt-[24px] bg-[#71717A]  "
//                     onClick={() => setMulti("password")}
//                   >
//                     Let's go
//                   </Button>
//                   <div className="text-[#71717A] text-[16px] mt-[24px] flex gap-4 items-center justify-center">
//                     Already have an account ?<p>Log in</p>
//                   </div>
//                 </div>
//               )}
//             />
//           </form>
//         </Form>
//       )}
//       {multi === "password" && (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="Password"
//               render={({ field }) => (
//                 <div className="mt-[246px] w-[416px] flex flex-col gap-2">
//                   <Button className="w-[36px] h-[36px] bg-white text-black border-2">
//                     <FaAngleLeft />
//                   </Button>
//                   <FormLabel className="font-bold text-[#09090B] text-[24px]">
//                     Create your account
//                   </FormLabel>
//                   <FormDescription className="text-[#71717A] text-[16px]">
//                     Sign up to explore your favorite dishes.
//                   </FormDescription>
//                   <FormControl>
//                     <Input
//                       type="Password"
//                       placeholder="Enter your email address"
//                       className="mt-[24px]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <Input></Input>

//                   <Button
//                     className="w-full mt-[24px] bg-[#71717A]  "
//                     onClick={() => setMulti("password")}
//                   >
//                     Let's go
//                   </Button>
//                   <div className="text-[#71717A] text-[16px] mt-[24px] flex gap-4 items-center justify-center">
//                     Already have an account ?<p>Log in</p>
//                   </div>
//                 </div>
//               )}
//             />
//           </form>
//         </Form>
//       )}
//     </div>
//   );
// }
