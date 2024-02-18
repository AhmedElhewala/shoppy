import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/apiUser";

function useUser() {
  const {isLoading, data: users, error} = useQuery({
    queryKey: ["usersList"],
    queryFn: () => fetchUsers(),
  })

  const count = users?.count;

  return {isLoading, users, error, count}
}

export default useUser