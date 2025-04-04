import axios from "@/configs/axios";

export const fetcher = async (url: string, id?: number) => {
  let API_URL = process.env.NEXT_PUBLIC_BACKEND_URL + url

  if (id) {
    API_URL = API_URL + `/${id}`
  }

  const response = await axios.get(API_URL)
    .then((res) => {
      return res.data
    },
    (error) => {
      throw new Error(`Error fetching data from API: ${url}`, error)
    }
  );

  return response;
}