"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            NotifyHub
          </h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition text-lg font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition text-lg font-medium"
                >
                  How It Works
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
        <div className="container mx-auto px-6 py-20 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How NotifyHub Works
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
            Discover how our unified platform simplifies your notifications and
            enhances your productivity.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-12 md:py-14 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Our Simple 3-Step Process
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Step 1: Connect Your Accounts
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Easily connect your email, social media, and other
                  notification sources to NotifyHub.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Step 2: Customize Notifications
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Set your preferences for how and when you receive
                  notifications to stay organized and focused.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Step 3: Monitor and Manage
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  View and manage all your notifications from a single
                  dashboard, keeping everything at your fingertips.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-14 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Key Features
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Real-Time Updates
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Receive real-time notifications from all your connected
                  accounts without delay.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Advanced Filtering
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Use advanced filters to organize and prioritize notifications
                  based on your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 hover:bg-gray-600 transition">
              <CardHeader>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Detailed Analytics
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Analyze your notification patterns and get insights to improve
                  your productivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-14 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 md:mt-12 space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white">
                How do I connect my accounts?
              </h3>
              <p className="text-gray-300 mt-2">
                You can connect your accounts by going to the "Dashboard" page
                and selecting "Connect Accounts". Follow the prompts to link
                your accounts.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white">
                Can I customize the notifications?
              </h3>
              <p className="text-gray-300 mt-2">
                Yes, you can customize your notification preferences in the
                "Preferences" section of the dashboard.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white">
                Is my data secure?
              </h3>
              <p className="text-gray-300 mt-2">
                We use industry-standard encryption and security practices to
                ensure your data is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 md:py-12">
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
  );
}
