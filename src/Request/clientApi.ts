import axios from "axios";
import { HTTP_METHOD } from "../type";

interface requestProps {
  method: string;
  url: string;
  data?: any;
  params?: any;
}
const baseURL = "https://dummyjson.com";
// const baseURL = "https://fakestoreapi.com";



interface RequestProps {
  method: HTTP_METHOD;
  url: string;
  data?: any;
  params?: Record<string, any>;
}
// Create discriminated union for type-safe responses
type ApiResponse<T> =
  | { success: true; data: T; error: null; message?: never }
  | { success: false; data: null; error: unknown; message: string };

// Generic function with proper typing
export const SendRequest = async <T = unknown>(
  arg: RequestProps
): Promise<ApiResponse<T>> => {
  try {
    const response = await axios({
      method: arg.method,
      url: baseURL + arg.url,
      data: arg.data,
      params: { ...arg.params },
    });

    return {
      success: true,
      data: response.data as T,
      error: null,
    };
  } catch (error) {
    console.error("API Error:", error);

    return {
      success: false,
      data: null,
      error: error,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
// export const SendRequest = async (arg: requestProps) => {
//   try {
//     const response = await axios({
//       method: arg.method,
//       url: baseURL + arg.url,
//       data: arg.data,
//       params: { ...arg.params },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return {
//       error: error,
//       data: null,
//       message: "Something went wrong",
//     };
//   }
// };

export const handleCheckout = async (data: { items: any[]; email: string }) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`
        : "https://e-commerce-app-ez57.onrender.com/create-checkout-session";

    const res = await axios({
      url,
      method: "POST",
      data,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    return { url: res.data.url, error: null };
  } catch (err: any) {
    return { url: null, error: err };
  }
};
