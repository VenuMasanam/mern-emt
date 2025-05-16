import API from "./api";

export const login = async (credentials) => {
  const response = await API.post("/api/auth/login", credentials);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await API.post("/api/auth/signup", credentials);
  return response.data;
};