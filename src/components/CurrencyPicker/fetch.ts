import request from "../../fetch/request";

export const fetchAllCurrencyNames = async () => {
  const data = await request({
    method: "get",
    url: "/symbols",
  });

  return Object.keys(data.symbols);
};
