import axios from "axios";
import API from "./API";

async function doLogin(email, password) {
  return await axios.post(API.BASE_URL + API.LOGIN, { email, password });
}

export { doLogin };
