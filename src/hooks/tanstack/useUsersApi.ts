import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../api/userApi";

function useUsersApi() {
  const getUsersQuery = useQuery({
    queryKey: ["fetch-user-list"],
    queryFn: getUsersList,
  });

  return {
    //users list
    users: getUsersQuery.data,
    usersLoading: getUsersQuery.isLoading,
  };
}

export default useUsersApi;
