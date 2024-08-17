import axios from "axios";
import { Image } from "./components/types";

axios.defaults.baseURL = 'https://api.unsplash.com';

interface APIdata {
  results: Image[];
  total_pages: number;
}

export const fetchGallery = async (search: string, currentPage: number, perPage = 15): Promise<APIdata> => {
  const response = await axios.get('/search/photos', {
    headers: {
      'Authorization': 'Client-ID TMPNIX1S3Ts1RRLOPkjLPZT27lY3O1xPfwE4RAmVJp0',
      'Accept-Version': 'v1',
    },
    params: {
      'query': search,
      'page': currentPage,
      'per_page': perPage,
    }
  })

  return response.data;
}

    