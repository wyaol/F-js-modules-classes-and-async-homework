import { ADDRESS, PORT, PATH, REGION } from "./constant";

const getURL = (address, port, path) => {
  return `${address}:${port}${path}`;
};

export const url = getURL(ADDRESS, PORT, PATH);

export const region = REGION;

export default getURL;
