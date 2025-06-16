import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Send } from "lucide-react";

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string | null;
}

function ContactForm({
  formData,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
}: ContactFormProps) {
  return (
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
  );
}

export default ContactForm;
