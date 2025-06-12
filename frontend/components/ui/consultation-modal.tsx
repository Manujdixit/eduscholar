"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({
  open,
  onOpenChange,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Consultation request submitted:", formData);
    onOpenChange(false);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full mx-4 p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-bold text-blue-800 mb-2">
            Request a Free <span className="text-orange-500">Consultation</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
              required
            />
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
              required
            />
          </div>

          <Input
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
            required
          />

          <Input
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
            required
          />

          <textarea
            placeholder="How may help you"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full h-24 px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 flex items-center space-x-2 rounded-md"
            >
              <span>Send</span>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
