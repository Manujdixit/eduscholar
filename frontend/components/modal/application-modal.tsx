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
import { ChevronDown, Send } from "lucide-react";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicationModal({
  open,
  onOpenChange,
}: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coursePreference: "",
    gender: "",
    dateOfBirth: "",
    preferredIntake: "",
    preferredState: "",
    englishTest: "",
    visaStatus: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation functions
  const isStep1Complete = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.coursePreference.trim() !== ""
    );
  };

  const isStep2Complete = () => {
    return (
      formData.gender.trim() !== "" &&
      formData.dateOfBirth.trim() !== "" &&
      formData.preferredIntake.trim() !== "" &&
      formData.preferredState.trim() !== "" &&
      formData.englishTest.trim() !== "" &&
      formData.visaStatus.trim() !== ""
    );
  };

  const isFormComplete = () => {
    return isStep1Complete() && isStep2Complete();
  };

  const handleNext = () => {
    if (isStep1Complete()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    if (isFormComplete()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      onOpenChange(false);
      setStep(1);
    }
  };

  const SelectField = ({
    placeholder,
    value,
    onChange,
    options = [],
  }: {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    options?: string[];
  }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 bg-gray-100 border-0 rounded-md text-gray-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full mx-4 p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-bold text-blue-800 mb-4">
            Apply Now
          </DialogTitle>

          {/* Step Indicators */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div
              onClick={handleBack}
              className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium ${
                step === 1
                  ? "bg-orange-500 text-white"
                  : "bg-blue-800 text-white"
              }`}
            >
              STEP 1
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                step === 2
                  ? "bg-orange-500 text-white"
                  : "bg-orange-200 text-orange-600"
              }`}
            >
              STEP 2
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
              />
            </div>

            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
            />

            <Input
              placeholder="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
            />

            <SelectField
              placeholder="Course preference"
              value={formData.coursePreference}
              onChange={(value) => handleInputChange("coursePreference", value)}
              options={[
                "Computer Science",
                "Business Administration",
                "Engineering",
                "Medicine",
                "Arts & Humanities",
                "Other",
              ]}
            />

            <div className="flex justify-end mt-6">
              <Button
                onClick={handleNext}
                disabled={!isStep1Complete()}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <SelectField
                placeholder="Select Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange("gender", value)}
                options={["Male", "Female", "Other", "Prefer not to say"]}
              />
              <SelectField
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={(value) => handleInputChange("dateOfBirth", value)}
                options={Array.from({ length: 50 }, (_, i) =>
                  (new Date().getFullYear() - 16 - i).toString()
                )}
              />
            </div>

            <SelectField
              placeholder="Preferred Intake"
              value={formData.preferredIntake}
              onChange={(value) => handleInputChange("preferredIntake", value)}
              options={["Fall 2025", "Spring 2026", "Summer 2026", "Fall 2026"]}
            />

            <SelectField
              placeholder="Preferred State"
              value={formData.preferredState}
              onChange={(value) => handleInputChange("preferredState", value)}
              options={[
                "California",
                "New York",
                "Texas",
                "Florida",
                "Illinois",
                "Pennsylvania",
                "Ohio",
                "Georgia",
                "North Carolina",
                "Michigan",
              ]}
            />

            <SelectField
              placeholder="English Test"
              value={formData.englishTest}
              onChange={(value) => handleInputChange("englishTest", value)}
              options={["IELTS", "TOEFL", "PTE", "Duolingo", "Not taken yet"]}
            />

            <SelectField
              placeholder="Do you hold any Visa"
              value={formData.visaStatus}
              onChange={(value) => handleInputChange("visaStatus", value)}
              options={["Yes", "No", "Applied", "Planning to apply"]}
            />

            <div className="flex justify-end mt-6">
              <Button
                onClick={handleSubmit}
                disabled={!isFormComplete()}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2 flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
