import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ob184NOOjdfv7Oyr7cTbSmR5fuX9co_7iqhqPxj-5Y_wCtU6OOFsxsJmUdVGWTB3W6Vh5eP8hpbGgEG0WMejyIUrrLUs4FPsZ8OvUwym0E9fpVpohKwgvJDSYGaNZXYx",
  },
});
