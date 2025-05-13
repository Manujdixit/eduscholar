"use client";
import { useEffect, useState } from "react";

export default () => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/getUserDetails");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setUserDetails(data);
        console.log(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch user details:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return { userDetails, isLoading, error };
};
