import apiClient from "./client";

export type User = {
  id: number;
  name: string;
  email: string;
};

export function fetchUsers() {
  return apiClient.get<User[]>("/users");
}