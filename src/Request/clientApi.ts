import axios from "axios";

interface requestProps {
  method: string;
  url: string;
  data?: any;
  params?: any;
}
const baseURL = "https://dummyjson.com";
// const baseURL = "https://fakestoreapi.com";

export const SendRequest = async (arg: requestProps) => {
  // return;
  try {
    const response = await axios({
      method: arg.method,
      url: baseURL + arg.url,
      data: arg.data,
      params: { ...arg.params },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: null,
      message: "Something went wrong",
    };
  }
};

export const handleCheckout = async (data: { items: any[]; email: string }) => {
  const url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`
      : "http://localhost:8000/create-checkout-session";

  const res = await axios({
    url,
    method: "POST",
    data,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  return res.data.url;
};
