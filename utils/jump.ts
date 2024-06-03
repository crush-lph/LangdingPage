import { url } from "inspector";

const BASE_FM_URL = "https://m.fastmoss.com";

export const jump = (url: string = "") => {
  if (url.includes("https://")) {
    window.location.href = url;
    return;
  }
  window.location.href = BASE_FM_URL + url;
};
