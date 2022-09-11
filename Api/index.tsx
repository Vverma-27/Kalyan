import axios from "axios";
const route = (baseURL: string) => {
  console.log(`${window.location.origin}${baseURL}`);
  return axios.create({
    baseURL: `${window.location.origin}${baseURL}`,
  });
};

export default route;
