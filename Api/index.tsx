import axios from "axios";
const route = (baseURL: string) => {
  console.log(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${baseURL}`);
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${baseURL}`,
  });
};

export default route;
