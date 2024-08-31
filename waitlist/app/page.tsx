// "use client";

// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const waitlistFormSchema = z.object({
//   fullName: z.string().min(1, "Full Name is required"),
//   email: z.string().email("Invalid email address"),
// });


// const CombinedLayout = () => {
  
//   const form = useForm<z.infer<typeof waitlistFormSchema>>({
//     resolver: zodResolver(waitlistFormSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//     },
//   });


//   function onSubmit(values: z.infer<typeof waitlistFormSchema>) {
//     console.log(values);
  
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
//       {/* Form Section */}
//       <div className="flex items-center justify-center p-10 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-md w-full space-y-8 rounded-lg shadow-lg">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-white">
//               Join the waitlist for the Design System!
//             </h2>
//           </div>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="fullName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Full Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="John Doe" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       Please enter your full name.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email Address</FormLabel>
//                     <FormControl>
//                       <Input placeholder="you@example.com" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       Please enter a valid email address.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-md hover:bg-blue-700"
//               >
//                 Continue
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>

//       {/* Bento Grid Section */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:w-2/3">
//         {/* Card 1: Large main card */}
//         <Card className="md:col-span-4 row-span-2 bg-gradient-to-r from-black to-blue-900 p-8 rounded-lg">
//           <CardContent>
//             <CardTitle className="text-4xl font-extrabold text-white">
//               Blending Creativity with Practicality
//             </CardTitle>
//             <CardDescription className="mt-4 text-lg">
//               We combine artistic creativity with practical solutions to create designs that are both stunning and functional.
//             </CardDescription>
//           </CardContent>
//         </Card>

//         {/* Card 2: Vertical card */}
//         <Card className="md:col-span-2 row-span-3 bg-blue-900 p-6 rounded-lg flex items-center justify-center">
//           <CardContent>
//             <h2 className="text-6xl font-bold tracking-tight leading-none text-center">
//               Hype
//             </h2>
//             <p className="mt-2 text-lg text-center">Creative</p>
//           </CardContent>
//         </Card>

//         {/* Card 3: Logo card */}
//         <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg flex items-center justify-center">
//           <CardContent>
//             <img
//               src="/path/to/logo.png" // Replace with your logo path
//               alt="Hype Creative Logo"
//               className="h-12"
//             />
//             <CardTitle className="text-xl font-semibold mt-2">Hype Creative</CardTitle>
//           </CardContent>
//         </Card>

//         {/* Card 4: Small card with text */}
//         <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg">
//           <CardContent>
//             <CardTitle className="text-xl font-semibold">Graphic Design</CardTitle>
//             <CardDescription>
//               Creative and compelling graphic design services.
//             </CardDescription>
//           </CardContent>
//         </Card>

//         {/* Card 5: Small card with logo */}
//         <Card className="md:col-span-2 bg-gradient-to-t from-black to-blue-900 p-6 rounded-lg flex items-center justify-center">
//           <CardContent>
//             <img
//               src="/path/to/another-logo.png" // Replace with your logo path
//               alt="Another Logo"
//               className="h-8"
//             />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CombinedLayout;

"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the form schema
const waitlistFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
});

const CombinedLayout = () => {

  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof waitlistFormSchema>) {
    console.log(values);
  
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
      {/* Form Section */}
      <div className="flex items-center justify-center p-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-md w-full space-y-8 rounded-lg shadow-lg bg-[#1e1e1e] p-6">
          <h2 className="text-4xl font-extrabold mb-2">
            Join the <span className="bg-black text-white px-2 py-1 rounded-md">Future</span> of Social Media.
          </h2>
          <p className="text-gray-400 mb-4">
            Be part of one unified platform that brings all your favorite social
            media features into a single, seamless experience. Connect,
            communicate like never before.
          </p>

          <div className="bg-[#2c2c2c] p-4 rounded-md mb-6">
           
            <img
              src="/tech.png" 
              alt="Decorative Image"
              className="rounded-md"
            />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Join the waitlist"
                        {...field}
                        className="bg-[#333] border-none text-white rounded-md px-4 py-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-[#333] text-white rounded-md px-6 py-2 hover:bg-[#444]"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:w-2/3">
        {/* Card 1: Large main card */}
        <Card className="md:col-span-4 row-span-2 bg-gradient-to-r from-black to-blue-900 p-8 rounded-lg">
          <CardContent>
            <CardTitle className="text-4xl font-extrabold text-white">
              All Your Social Media in one Place
            </CardTitle>
            <CardDescription className="mt-4 text-lg">
              We combine artistic creativity with practical solutions to create designs that are both stunning and functional.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Card 2: Vertical card */}
        <Card className="md:col-span-2 row-span-3 bg-blue-900 p-6 rounded-lg flex items-center justify-center">
          <CardContent>
            <h2 className="text-6xl font-bold tracking-tight leading-none text-center">
              Hype
            </h2>
            <p className="mt-2 text-lg text-center">Creative</p>
          </CardContent>
        </Card>

        {/* Card 3: Logo card */}
        <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg flex items-center justify-center">
          <CardContent>
            <img
              src="/path/to/logo.png" 
              alt="Hype Creative Logo"
              className="h-12"
            />
            <CardTitle className="text-xl font-semibold mt-2">Hype Creative</CardTitle>
          </CardContent>
        </Card>

        {/* Card 4: Small card with text */}
        <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg">
          <CardContent>
            <CardTitle className="text-xl font-semibold">Graphic Design</CardTitle>
            <CardDescription>
              Creative and compelling graphic design services.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Card 5: Small card with logo */}
        <Card className="md:col-span-2 bg-gradient-to-t from-black to-blue-900 p-6 rounded-lg flex items-center justify-center">
          <CardContent>
            <img
              src="/path/to/another-logo.png" 
              alt="Another Logo"
              className="h-8"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CombinedLayout;


