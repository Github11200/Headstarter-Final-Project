

"use client";

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import axios from "axios";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

// Define the form schema
const waitlistFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const CombinedLayout = () => {
  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
    },
  });

  // State management
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { theme, setTheme } = useTheme(); // Theme state

  async function onSubmit(values: z.infer<typeof waitlistFormSchema>) {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("/api/subscribe", { email: values.email });
      setSuccessMessage(response.data.message);
      form.reset(); // Reset form fields
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center">
      <div className="absolute top-4 right-4 z-10"><ModeToggle /></div>
      {/* Form Section */}
      <div className="flex items-center justify-center p-10 flex-1">
        <div className="max-w-md w-full space-y-8 rounded-lg shadow-lg bg-gray-100 dark:bg-[#1e1e1e] p-6">
          <h2 className="text-4xl font-extrabold mb-2">
            Join the <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-md">Future</span> of Social Media.
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Be part of one unified platform that brings all your favorite social media features into a single, seamless experience. Connect, communicate like never before.
          </p>

          <div className="bg-gray-200 dark:bg-[#2c2c2c] p-4 rounded-md mb-6">
            <img src="/tech.png" alt="Decorative Image" className="rounded-md" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-white dark:bg-[#333] border-none text-black dark:text-white rounded-md px-4 py-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-gray-200 dark:bg-[#333] text-black dark:text-white rounded-md px-6 py-2 hover:bg-gray-300 dark:hover:bg-[#444]"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : "Submit"}
                </Button>
              </div>
              {successMessage && (
                <Alert className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              {errorMessage && (
                <Alert variant="destructive" className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 mt-4">
                  <XCircle className="mr-2 h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </div>
      </div>
      
      {/* Grid Section */}
      <div className="w-full p-8 mt-6 md:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main Card */}
          <Card className="bg-gradient-to-r from-gray-200 dark:from-black to-gray-300 dark:to-gray-700 p-6 rounded-lg border-none col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between h-full">
            <CardContent>
              <CardTitle className="text-2xl font-extrabold text-center">
                All Your Social Media in One Place
              </CardTitle>
              <CardDescription className="mt-2 text-center text-lg">
                Our platform unifies chats, posts, stories, creating a seamless social experience where you can do it all without switching apps.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-200 dark:bg-white p-6 rounded-lg flex flex-col items-center justify-center col-span-1 row-span-1">
            <CardContent className="flex items-center justify-center h-full">
              <h2 className="text-2xl font-bold tracking-tight text-center dark:text-black">
                Stay Updated.
              </h2>
            </CardContent>
          </Card>

          <Card className="bg-gray-200 dark:bg-white text-black dark:text-black p-6 rounded-lg flex flex-col items-center justify-center col-span-1 row-span-3 overflow-hidden">
            <CardContent className="flex items-center justify-center h-full w-full">
              <img src="/notify.png" alt="Notify Logo" className="h-full w-full object-cover" />
            </CardContent>
          </Card>

          <Card className="bg-gray-200 dark:bg-white text-black dark:text-black p-6 rounded-lg flex flex-col items-center justify-center col-span-1 row-span-2">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <img src="/connect1.svg" alt="Connect Logo" className="h-24" />
              <CardTitle className="text-xl font-semibold mt-2">Connect</CardTitle>
              <p className="mt-1">Anytime, Anywhere</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-gray-200 dark:from-black to-gray-300 dark:to-gray-600 p-6 rounded-lg border-none col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center">
            <CardContent className="flex items-center justify-center h-full text-center">
              <CardTitle className="text-2xl font-semibold">
                Track all notifications, <br />
                <span className="inline-block mt-2">in one Dashboard.</span>
              </CardTitle>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CombinedLayout;

