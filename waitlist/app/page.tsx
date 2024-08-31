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

  async function onSubmit(values: z.infer<typeof waitlistFormSchema>) {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Debugging: Log the values
    console.log("Form Values: ", values);

    try {
      const response = await axios.post("/api/subscribe", { email: values.email });
      setSuccessMessage(response.data.message);
      form.reset(); // Reset form fields
    } catch (error: any) {
      console.error("Error submitting form:", error); // Debugging: Log the error
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
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Form Section */}
      <div className="flex items-center justify-center p-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-md w-full space-y-8 rounded-lg shadow-lg bg-[#1e1e1e] p-6">
          <h2 className="text-4xl font-extrabold mb-2">
            Join the <span className="bg-black text-white px-2 py-1 rounded-md">Future</span> of Social Media.
          </h2>
          <p className="text-gray-400 mb-4">
            Be part of one unified platform that brings all your favorite social media features into a single, seamless experience. Connect, communicate like never before.
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-[#333] border-none text-white rounded-md px-4 py-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-[#333] text-white rounded-md px-6 py-2 hover:bg-[#444]"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : "Submit"}
                </Button>
              </div>
              {successMessage && (
                <Alert >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              {errorMessage && (
                <Alert variant="destructive" className="mt-4">
                  <XCircle className="mr-2 h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full p-8 pr-20">
        {/* Card 1: Large main card */}
        <Card className="md:col-span-4 row-span-2 bg-gradient-to-r from-black to-gray-700 p-8 rounded-lg border-none">
          <CardContent>
            <CardTitle className="text-4xl font-extrabold text-white">
              All Your Social Media in one Place
            </CardTitle>
            <CardDescription className="mt-4 text-lg">
              Out platform unifies chats, posts, stories, creating a seamless social experience where you can do it all without switching apps.
            </CardDescription>
          </CardContent>
        </Card>

          {/* Card 3: Logo card */}
          <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg flex items-center justify-center border-none">
          <CardContent>
            <img
              src="/notify.png"
              alt="Hype Creative Logo"
              className="h-30 w-30"
            />
          </CardContent>
        </Card>

        {/* Card 2: Vertical card */}
        <Card className="md:col-span-2 bg-white p-6 rounded-lg flex items-center justify-center border-none">
        <CardContent className="flex items-center justify-center h-full w-full">
          <h2 className="text-3xl font-bold tracking-tight leading-none text-center text-black">
            Stay Updated.
          </h2>
        </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-white text-black p-4 rounded-lg flex items-center justify-center">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <img
              src="/connect1.svg"
              alt="connect Logo"
              className="h-20"
            />
            <CardTitle className="text-xl font-semibold mt-2">Connect</CardTitle>
            <p className="mt-1 whitespace-nowrap">Anytime, Anywhere</p>
          </CardContent>
        </Card>

      
        {/* Card 4: Small card with text */}
        <Card className="md:col-span-4 bg-gradient-to-r text-white p-4 rounded-lg border-none items-center justify-center">
          <CardContent className="flex items-center justify-center h-full w-full">
            <CardTitle className="text-3xl font-semibold">Track all notificantions, <br/>
            <span className="inline-block ml-10"> in one Dashboard.</span>
            </CardTitle>
          </CardContent>
        </Card>

    
      </div>
    </div>
  );
};

export default CombinedLayout;

