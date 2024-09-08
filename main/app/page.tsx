// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { CardHeader } from "@/components/ui/card";
// import { CardContent } from "@/components/ui/card";
// import Link from "next/link";

// import Image from "next/image";

// export default function Home() {
  
//   return (
//     <div className="bg-gray-900 text-white font-sans">
//       {/* Header */}
//       <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             {/* Profile Picture */}
//             <div className="w-12 h-12 overflow-hidden border-2 border-gray-600 rounded-lg">
//               <Image
//                 src="/notify.png" // Update with the correct path to your profile picture
//                 alt="Profile Picture"
//                 width={48}
//                 height={48}
//                 layout="intrinsic"
//                 className="object-cover"
//               />
//             </div>
//             {/* Text */}
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
//               NotifyHub
//             </h1>
//           </div>
//           <nav className="flex items-center space-x-6">
//             <ul className="flex items-center space-x-6">
//               <li>
//                 <a
//                   href="#features"
//                   className="text-gray-300 hover:text-white transition text-lg font-medium"
//                 >
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <Link href="/dashboard">
//                   <Button
//                     variant="outline"
//                     className="text-white border-white hover:bg-white hover:text-gray-900 transition text-lg font-medium"
//                   >
//                     Get Started
//                   </Button>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-32 md:py-44 text-center">
//         <div className="container mx-auto px-6 md:px-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//             One Unified Social Media Platform
//           </h2>
//           <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
//             Streamline your notifications and stay focused. Get updates from
//             Gmail, Twitter, Github, and more, all in one place.
//           </p>
//           <div className="mt-8 md:mt-12">
//             <Button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 hover:bg-blue-700 transition text-lg font-medium">
//               <Link href="/learnmore">Learn More</Link>
//             </Button>
//           </div>
//           {/* Demo */}
//           <div className="mt-12 flex justify-center">
//             <div
//               className="relative w-full max-w-xl"
//               style={{ paddingBottom: "25%" }}
//             >
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full border-2 border-gray-600"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Demo"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-12 md:py-14 bg-gray-800">
//         <div className="container mx-auto px-6 md:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
//             Why Choose Us?
//           </h2>
//           <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             <Card className="bg-gray-700 hover:bg-gray-600 transition">
//               <CardHeader>
//                 <h3 className="text-lg md:text-xl font-semibold text-white">
//                   Unified Notifications
//                 </h3>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-300">
//                   Get all your notifications from multiple platforms in one
//                   place, so you never miss an update.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="bg-gray-700 hover:bg-gray-600 transition">
//               <CardHeader>
//                 <h3 className="text-lg md:text-xl font-semibold text-white">
//                   Focused Summary
//                 </h3>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-300">
//                   See a summary of notifications at a glance without the
//                   distractions.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="bg-gray-700 hover:bg-gray-600 transition">
//               <CardHeader>
//                 <h3 className="text-lg md:text-xl font-semibold text-white">
//                   Smart Queries
//                 </h3>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-300">
//                   Use our intelligent query system to interact with your
//                   notifications efficiently.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-400 py-8 md:py-12">
//         <div className="container mx-auto px-6 md:px-8 text-center">
//           <p className="text-sm md:text-base">
//             &copy; 2024 NotifyHub. All rights reserved.
//           </p>
//           <div className="mt-4">
//             <a
//               href="#"
//               className="mx-2 hover:text-white transition text-sm md:text-base"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="#"
//               className="mx-2 hover:text-white transition text-sm md:text-base"
//             >
//               Twitter
//             </a>
//             <a
//               href="#"
//               className="mx-2 hover:text-white transition text-sm md:text-base"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Header */}
      <header className=" bg-white dark:bg-black text-black dark:text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <Image
              src="/notify.png"
              width={48}
              height={48}
              alt="NotifyHub Logo"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              NotifyHub
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6">
            <a
              href="#features"
              className="text-sm sm:text-lg text-gray-300 hover:text-white transition font-medium"
            >
              Features
            </a>
            <div className="flex gap-1 sm:gap-2">
              <Button>
                <RegisterLink>Sign Up</RegisterLink>
              </Button>
              <Button>
                <LoginLink>Sign In</LoginLink>
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="sm:hidden bg-gray-800 bg-opacity-90">
            <div className="px-4 pb-4 flex flex-col space-y-2">
              <a
                href="#features"
                className="text-lg text-gray-300 hover:text-white transition font-medium"
              >
                Features
              </a>
              <Button>
                <RegisterLink>Sign Up</RegisterLink>
              </Button>
              <Button>
                <LoginLink>Sign In</LoginLink>
              </Button>
            </div>
          </nav>
        )}
      </header>



      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-44 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-center">
        {/* Spline Component */}
        <div className="hidden lg:block absolute inset-y-15 right-[5%]">
          <Spline scene="https://prod.spline.design/y5kDXIQzIsB7g8UE/scene.splinecode" />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            One Unified Social Media Platform
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300">
            Streamline your notifications and stay focused. Get updates from
            Gmail, Twitter, Github, and more, all in one place.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-12">
            <Link href="/learnmore" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-lg font-medium px-5 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4">
                Learn More
              </Button>
            </Link>
          </div>
          {/* Demo Video */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full border-2 border-gray-600"
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
        className="relative py-12 md:py-14 bg-gray-800 bg-opacity-90"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Why Choose Us?
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Unified Notifications",
                description:
                  "Get all your notifications from multiple platforms in one place, so you never miss an update.",
                icon: "/bell.svg",
              },
              {
                title: "Focused Summary",
                description:
                  "See a summary of notifications at a glance without the distractions.",
                icon: "/book.svg",
              },
              {
                title: "Smart Queries",
                description:
                  "Use our intelligent query system to interact with your notifications efficiently.",
                icon: "/query.svg",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-700 hover:bg-gray-600 transition flex items-center p-4"
              >
                <Image
                  src={feature.icon}
                  width={40}
                  height={40}
                  alt={`${feature.title} Icon`}
                  className="object-contain flex-shrink-0 w-10 h-10"
                />
                <div className="ml-4">
                  <CardHeader>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-800 bg-opacity-90 text-gray-400 py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-xs sm:text-sm md:text-base">
            &copy; 2024 NotifyHub. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-3 sm:space-x-4">
            {["LinkedIn", "Twitter", "GitHub"].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition text-xs sm:text-sm md:text-base"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}



