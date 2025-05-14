import { useState, useEffect } from "react";

interface University {
  name: string;
  stream: string;
  location: string;
  fees: number;
  affordabilityScore: number;
}

export const useUniversities = (stream: string = "All") => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      try {
        const endpoint =
          stream === "All"
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/universities/top-affordable`
            : `${
                process.env.NEXT_PUBLIC_API_URL
              }/api/universities/top-affordable?stream=${encodeURIComponent(
                stream
              )}`;

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch universities");
        }

        const data = await response.json();
        setUniversities(data.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setUniversities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [stream]);

  return { universities, loading, error };
};
