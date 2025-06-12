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
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContact } from "@/hooks/useContact";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({
  open,
  onOpenChange,
}: ConsultationModalProps) {
  const { submitContactForm, isLoading, error, success, resetState } =
    useContact();

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

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    resetState();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitContactForm(formData);
      // Success - form will show success state
      setTimeout(() => {
        onOpenChange(false);
        resetForm();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      // Error state will be handled by the hook
      console.error("Failed to submit contact form:", error);
    }
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      resetForm();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleModalChange}>
      <DialogContent className="max-w-lg w-full mx-4 p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-bold text-blue-800 mb-2">
            Request a Free <span className="text-orange-500">Consultation</span>
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Thank you for your submission!
            </h3>
            <p className="text-gray-600">
              We'll get back to you shortly to schedule your free consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center space-x-2 text-red-700">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
                required
                disabled={isLoading}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
                required
                disabled={isLoading}
              />
            </div>

            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
              required
              disabled={isLoading}
            />

            <Input
              placeholder="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
              required
              disabled={isLoading}
            />

            <textarea
              placeholder="How may help you"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full h-24 px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={isLoading}
            />

            <div className="flex justify-end mt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 flex items-center space-x-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
