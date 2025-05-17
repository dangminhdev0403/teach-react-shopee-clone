// react-query/queries/useProducts.ts
import { apiGetUsers } from "@services/api.service";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: apiGetUsers,
  });
};
