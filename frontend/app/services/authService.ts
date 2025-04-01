import { apiRequest } from "../lib/apiHelper";

// Login Function
export const loginUser = async (email: string, password: string) => {
  const response = await apiRequest<{ token: string }>(
    "POST",
    "/sign-in", // Use the correct login endpoint
    { email, password },
    false,
    {}
  );
  if (response.success && response.data) {
    localStorage.setItem("token", response.data.token); // Store token in localStorage
    console.log(response)
  } else {
    throw new Error(response.error || "Login failed"); // Handle errors properly
  }

  return response;
};

// Logout Function
export const logoutUser = () => {
  localStorage.removeItem("token");
};
