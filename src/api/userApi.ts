import axios from "axios";

export async function getUsersList() {
  const res = axios.get("https://dummyjson.com/users");
  return res;
}
