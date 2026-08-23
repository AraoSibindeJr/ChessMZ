import { useApi } from "./useApi";

interface HealthData {
  success: boolean;
  data: {
    status: string;
    timestamp: string;
    uptime: number;
  };
}

export function useHealth() {
  return useApi<HealthData>("/api/health");
}
