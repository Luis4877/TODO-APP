import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = async (user) => await axios.post(`/login`, user);

export const verifyToken = () => axios.get("/verify-token");
