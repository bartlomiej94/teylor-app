import axios from "axios";

const accessKey = "7dd708e7d2fa02cd135815adf1ad5ecb";

const client = axios.create({
  baseURL: "http://api.exchangeratesapi.io/v1/",
  params: {
    access_key: accessKey,
  },
});

const request = (options) => {
  const onSuccess = (response) => {
    return Promise.resolve(response.data);
  };

  const onError = (error) => {
    console.error("Request Failed:", error.config);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
