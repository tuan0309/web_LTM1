import { AxiosResponse } from "axios";
import { axiosInstance } from "../shared/axios";

const baseUrl = "/api/product";

class BookService {
  async getAllBooks(body: any) {
    const res: AxiosResponse = await axiosInstance.post(baseUrl, body);
    return res.data.data;
  }

  async getBookById(id: string) {
    const res: AxiosResponse = await axiosInstance.get(baseUrl + "/" + id);
    return res.data;
  }
}

export const bookService = new BookService();
