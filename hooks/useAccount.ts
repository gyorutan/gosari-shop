import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export const useAccount = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/accounts", fetcher);
  console.log("data", { data });

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
