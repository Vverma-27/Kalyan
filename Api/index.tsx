import axios from "axios";
const route = (baseURL: string) => {
  console.log(
    `${
      process.env.NODE_ENV === "production"
        ? "kalyantrust.org"
        : window.location.origin
    }${baseURL}`
  );
  return axios.create({
    baseURL: `${
      process.env.NODE_ENV === "production"
        ? "kalyantrust.org"
        : window.location.origin
    }${baseURL}`,
  });
};

export default route;
