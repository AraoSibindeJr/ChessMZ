import { useState, useCallback } from "react";
import api from "../services/api";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useApi<T>(url: string) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetch = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await api.get<T>(url);
      setState({
        data: response.data as T,
        loading: false,
        error: null,
      });
      return response.data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setState({
        data: null,
        loading: false,
        error,
      });
      throw error;
    }
  }, [url]);

  return { ...state, fetch };
}
