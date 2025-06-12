import { useState } from "react";
import axios from "axios";

interface ApplicationLeadData {
  first_name: string;
  last_name: string;
  email: string;
  phn_no: string;
  course_preference: string;
  gender: string;
  dob: string;
  preffered_intake: string;
  preffered_state: string;
  english_test: string;
  visa: string;
}

export const useApplicationLead = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitApplication = async (data: ApplicationLeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/leads`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to submit application";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => {
    setError(null);
  };

  return {
    submitApplication,
    isLoading,
    error,
    resetError,
  };
};
