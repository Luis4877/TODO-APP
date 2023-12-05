import axios from "axios";

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
  withCredentials: true,
  //headers:{Authorization:`Bearer ${authToken}`},
});

instanceAxios.interceptors.request.use(async (req) => {
  const updateHeaders = {
    Authorization: `Bearer ${localStorage.getItem("token") || "no-token"}`,
    "Content-Type": "application/json",
    Accept: "/",
    mode: "cors",
  };
  req.mode = "cors";
  req.headers = updateHeaders;
  return req;
});
export default instanceAxios;
