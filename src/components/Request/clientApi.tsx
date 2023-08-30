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

// export const SendRequest = async (arg: requestProps) => {
//   const res = await fetch("https://dummyjson.com/products");
//   console.log(res);
// };
