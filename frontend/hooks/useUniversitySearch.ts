import { useState, useCallback } from "react";
import axios from "axios";

interface University {
  name: string;
  stream: string;
  location: string;
  fees: number;
  ranking: number;
  affordabilityScore: number;
}

interface SearchResponse {
  success: boolean;
  count: number;
  data: University[];
}

export const useUniversitySearch = () => {
  const [results, setResults] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const search = useCallback(
    async (query: string) => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<SearchResponse>(
          `${apiUrl}/api/universities/search?q=${encodeURIComponent(query)}`
        );
        setResults(response.data.data);
      } catch (err) {
        setError("Failed to search universities");
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [apiUrl]
  ); // Only recreate if apiUrl changes

  return { results, loading, error, search };
};
