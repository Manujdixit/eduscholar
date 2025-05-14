"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeads } from "@/hooks/useLeads";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function Register() {
  const { captureLead, isLoading, error } = useLeads();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await captureLead(formData);
      setSuccess(true);
      setFormData({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      // Error is handled by the hook
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Register Your Interest
          </h1>

          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for your interest! We will contact you soon.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="fname" className="text-sm font-medium">
                  First Name *
                </label>
                <Input
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lname" className="text-sm font-medium">
                  Last Name
                </label>
                <Input
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number *
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full min-h-[100px] px-3 py-2 border rounded-md"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
