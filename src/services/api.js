import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "TRN-Api-Key": process.env.REACT_APP_TRN_Api_Key,
    Accept: "application/json",
  },
});
