"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="relative">
      <div className="bg-gray-900 text-white font-sans">
        {/* Header */}
        <header className="bg-gray-800 bg-opacity-90 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Profile Picture */}
              <div className="w-12 h-12 overflow-hidden border-2 border-gray-600 rounded-lg">
                <Image
                  src="/notify.png"
                  width={25}
                  height={25}
                  alt="Logo"
                  className="ml-2"
                />
              </div>
              {/* Text */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                NotifyHub
              </h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition text-lg font-medium"
              >
                Features
              </a>

              <div className="flex gap-2">
                <Button>
                  <RegisterLink>Sign Up</RegisterLink>
                </Button>
                <Button>
                  <LoginLink>Sign In</LoginLink>
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section with Spline Integration */}
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black py-32 md:py-44 text-center overflow-hidden">
          {/* Spline component as background */}
          <div className="absolute inset-y-15 right-[5%] z-15">
            <Spline scene="https://prod.spline.design/y5kDXIQzIsB7g8UE/scene.splinecode" />
          </div>

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* Content overlay */}
          <div className="relative z-20 container mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              One Unified Social Media Platform
            </h2>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
              Streamline your notifications and stay focused. Get updates from
              Gmail, Twitter, Github, and more, all in one place.
            </p>
            <div className="mt-8 md:mt-12">
              <Button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 hover:bg-blue-700 transition text-lg font-medium">
                <Link href="/learnmore">Learn More</Link>
              </Button>
            </div>
            {/* Demo */}
            <div className="mt-12 flex justify-center">
              <div
                className="relative w-full max-w-xl"
                style={{ paddingBottom: "25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-2 border-gray-600"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Demo"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative py-12 md:py-14 bg-gray-800 bg-opacity-90 z-30"
        >
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Why Choose Us?
            </h2>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-gray-700 hover:bg-gray-600 transition flex items-center p-4">
                <div className="flex-shrink-0 w-10 h-10">
                  {/* Placeholder for logo */}
                  <Image
                    src="/bell.svg"
                    width={40}
                    height={40}
                    alt="Unified Notifications Logo"
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <CardHeader>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Unified Notifications
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Get all your notifications from multiple platforms in one
                      place, so you never miss an update.
                    </p>
                  </CardContent>
                </div>
              </Card>
              <Card className="bg-gray-700 hover:bg-gray-600 transition flex items-center p-4">
                <div className="flex-shrink-0 w-10 h-10">
                  {/* Placeholder for logo */}
                  <Image
                    src="/book.svg"
                    width={40}
                    height={40}
                    alt="Focused Summary Logo"
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <CardHeader>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Focused Summary
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      See a summary of notifications at a glance without the
                      distractions.
                    </p>
                  </CardContent>
                </div>
              </Card>
              <Card className="bg-gray-700 hover:bg-gray-600 transition flex items-center p-4">
                <div className="flex-shrink-0 w-10 h-10">
                  {/* Placeholder for logo */}
                  <Image
                    src="/query.svg"
                    width={40}
                    height={40}
                    alt="Smart Queries Logo"
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <CardHeader>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Smart Queries
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Use our intelligent query system to interact with your
                      notifications efficiently.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gray-800 bg-opacity-90 text-gray-400 py-8 md:py-12 z-30">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <p className="text-sm md:text-base">
              &copy; 2024 NotifyHub. All rights reserved.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="mx-2 hover:text-white transition text-sm md:text-base"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="mx-2 hover:text-white transition text-sm md:text-base"
              >
                Twitter
              </a>
              <a
                href="#"
                className="mx-2 hover:text-white transition text-sm md:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
