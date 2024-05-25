import { AxiosResponse } from "axios";
import { axiosInstance } from "../shared/axios";

const baseUrl = "/api/auth/";

class UserService {
  async login(body: any) {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        baseUrl + "login",
        body
      );
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async register(body: any) {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        baseUrl + "signup",
        body
      );
      return 1;
    } catch (err) {
      return err;
    }
  }
}

export const userService = new UserService();
