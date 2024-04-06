import axios from "axios";
import { Buffer } from "buffer";
import { secureStore } from "../secure-store";

export const fetchNewToken = async () => {
 try {
  const refresh = await secureStore.getItem("refresh_token");
  const res = await axios.post(`/auth/token/refreshToken`, {
   refresh_token: refresh,
  });
  if (res.status === 200) {
   return res;
  } else {
   return null;
  }
 } catch (error) {
  return console.error(error.message);
 }
};

const axiosInstance = axios.create({
 baseURL: process.env.EXPO_PUBLIC_API_URL,
 timeout: 10000,
 headers: {
  "Content-Type": "application/json",
 },
});

axiosInstance.interceptors.request.use(async (config) => {
 try {
  const access = await secureStore.getItem("access_token");
  console.log("access : ", access);
  if (!access) {
   throw new Error("No token available.");
  } else {
   const isTokenExpired = (token) => {
    const parts = token
     .split(".")
     .map((part) =>
      Buffer.from(
       part.replace(/-/g, "+").replace(/_/g, "/"),
       "base64"
      ).toString()
     );
    if (parts[1]) {
    //  console.log("exp : ", parts[1]);
     const payload = JSON.parse(parts[1]);
     const currentTime = Math.floor(Date.now() / 1000);
     return payload.exp < currentTime;
    }
    if (parts.length !== 3) {
     return true;
    }
   };
   if (isTokenExpired(access)) {
    const res = await fetchNewToken();

    if (res) {
     const token = res.data.access_token;
     config.headers.Authorization = `Bearer ${token}`;
     await secureStore.setItem("access_token", token);
    } else {
     throw new Error("Failed to refresh token.");
    }
   } else {
    config.headers.Authorization = `Bearer ${access}`;
   }
  }
 } catch (error) {
  console.error("Error handling token:", error);
 }
 return config;
});

export default axiosInstance;
