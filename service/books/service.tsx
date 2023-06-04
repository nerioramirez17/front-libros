import axios from './axiosConfig';

export async function getBooks(paramSearch: string, currentPage: number) {
  const formatSearch = paramSearch.split(" ").join("+")
  debugger
    try {
      const response = await axios.get(`/search.json?q=${formatSearch}&limit=10&offset=${currentPage}`); 
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }