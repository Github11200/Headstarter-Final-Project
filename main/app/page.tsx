"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-12 h-12 overflow-hidden border-2 border-gray-600">
              <Image
                src="/logofile/logo.png"
                alt="Logo"
                width={48}
                height={48}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* Text */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">NotifyHub</h1>
          </div>
          <nav className="flex items-center space-x-4 md:space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition text-lg font-medium">
              Features
            </a>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 transition text-lg font-medium"
              >
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-32 md:py-44 text-center">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            One Unified Notification Platform
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
            Streamline your notifications and stay focused. Get updates from Gmail, Twitter, Github, and more, all in one place.
          </p>
          <div className="mt-8 md:mt-12">
            <Button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 hover:bg-blue-700 transition text-lg font-medium">
              <Link href="/learnmore">Learn More</Link>
            </Button>
          </div>
          {/* Demo */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-xl" style={{ paddingBottom: '25%' }}>
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





