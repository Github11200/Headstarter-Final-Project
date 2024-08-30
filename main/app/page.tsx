'use client';

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Home() {
  type Notifications = {
    linkedin: { message: string }[];
    gmail: { subject: string }[];
    twitter: { text: string }[];
  };
  
  const [notifications, setNotifications] = useState<Notifications>({
    linkedin: [],
    gmail: [{ subject: "Gmail Notification 1" }],
    twitter: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    const fetchNotifications = async () => {
      setLoading(true);
      // Simulated delay for API response
      setTimeout(() => {
        // Replace with actual API data
        setNotifications({
          linkedin: [{ message: "LinkedIn Notification 1" }],
          gmail: [{ subject: "Gmail Notification 1" }],
          twitter: [{ text: "Twitter Notification 1" }],
        });
        setLoading(false);
      }, 2000);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">Notifications Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LinkedIn Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton count={3} as="div" />
              ) : notifications.linkedin.length > 0 ? (
                notifications.linkedin.map((notification, index) => (
                  <div key={index}>
                    {notification.message}
                  </div>
                ))
              ) : (
                <p>No notifications available.</p>
              )}
            </CardContent>
          </Card>

          {/* Gmail Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Gmail</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton count={3} />
              ) : notifications.gmail.length > 0 ? (
                notifications.gmail.map((notification, index) => (
                  <div key={index}>
                    {notification.subject}
                  </div>
                ))
              ) : (
                <p>No notifications available.</p>
              )}
            </CardContent>
          </Card>

          {/* Twitter Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Twitter</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton count={3} />
              ) : notifications.twitter.length > 0 ? (
                notifications.twitter.map((notification, index) => (
                  <div key={index}>
                    {notification.text}
                  </div>
                ))
              ) : (
                <p>No notifications available.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-end">
          <Button onClick={() => window.location.reload()}>
            Refresh Notifications
          </Button>
        </div>
      </div>
    </div>
  );
}
