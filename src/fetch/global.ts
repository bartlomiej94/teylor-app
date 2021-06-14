import request from "./request";
import moment from "moment";

export const fetchLiveData = async () => {
  const data = await request({
    method: "get",
    url: "/latest",
  });

  return data.rates;
};

export const fetchPastData = async (startDate: string, endDate: string) => {
  const start = moment(startDate, "YYYY-MM-DD");
  const end = moment(endDate, "YYYY-MM-DD");
  const numberOfDays = end.diff(start, "days");

  // Initialize nextDay and promises.
  let nextDay = start.format("YYYY-MM-DD");
  let promises = [];

  for (let i = 0; i < numberOfDays + 1; i++) {
    promises.push(
      request({
        method: "get",
        url: `/${nextDay}`,
      })
    );
    nextDay = moment(nextDay).add(1, "days").format("YYYY-MM-DD");
  }

  const data = await Promise.all(promises);

  return data;
};
