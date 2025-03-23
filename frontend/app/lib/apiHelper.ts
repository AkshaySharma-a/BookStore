import api from "./api";
import { AxiosRequestConfig } from "axios";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const apiRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
  useAuth: boolean = false // If true, require auth token
): Promise<ApiResponse<T>> => {
  try {
    const headers = { ...config?.headers };

    // 🔹 Only add token when useAuth is true
    if (useAuth && typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login"; // Redirect if not authenticated
        return { success: false, error: "Authentication required" };
      }
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await api.request<T>({
      method,
      url,
      data,
      ...config,
      headers, // ✅ Pass modified headers
    });

    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.message || "Something went wrong",
    };
  }
};
