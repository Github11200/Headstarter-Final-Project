"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";


// Team profils import
import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">NotifyHub</h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition text-lg font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition text-lg font-medium">
                  Team
                </a>
              </li>
              <li>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900 transition text-lg font-medium"
                  >
                    Get Started
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-32 md:py-44 text-center">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            One Unified Social Media Platform
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
            Streamline your notifications and stay focused. Get updates from Gmail, Twitter, Github, and more, all in one place.
          </p>
          <div className="mt-8 md:mt-12">
            <Button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 hover:bg-blue-700 transition text-lg font-medium">
              <Link href="/learnmore">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-14 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Why Choose Us?
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">Unified Notifications</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Get all your notifications from multiple platforms in one place, so you never miss an update.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">Focused Summary</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  See a summary of notifications at a glance without the distractions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">Smart Queries</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Use our intelligent query system to interact with your notifications efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-14 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Meet the Team
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-800 hover:bg-gray-700 transition">
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src="/path/to/avatar1.jpg"
                  alt="Jinay Patel"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-700"
                />
                <h4 className="mt-4 text-lg sm:text-xl font-semibold text-white">Jinay Patel</h4>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  Full-Stack Web Developer | SWE @ Headstarter | Working on Viral Insight
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 hover:bg-gray-700 transition">
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src="/path/to/avatar1.jpg"
                  alt="Abdelghani Bensalih"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-700"
                />
                <h4 className="mt-4 text-lg sm:text-xl font-semibold text-white">Abdelghani Bensalih</h4>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  Computer Science Student | SWE @ Headstarter
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 hover:bg-gray-700 transition">
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src="/path/to/avatar3.jpg"
                  alt="Alice Brown"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-700"
                />
                <h4 className="mt-4 text-lg sm:text-xl font-semibold text-white">Nebila Wako</h4>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  UI/UX Designer | SWE @ Headstarter
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <p className="text-sm md:text-base">&copy; 2024 NotifyHub. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:text-white transition text-sm md:text-base">LinkedIn</a>
            <a href="#" className="mx-2 hover:text-white transition text-sm md:text-base">Twitter</a>
            <a href="#" className="mx-2 hover:text-white transition text-sm md:text-base">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
