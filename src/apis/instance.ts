import axios from "axios";
import { BASE_URL } from "@utils/constants/api/api";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}
