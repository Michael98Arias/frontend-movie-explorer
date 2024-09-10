import { Movie } from '../../types/movie';


const API_URL = process.env.NEXT_PUBLIC_API_MOV;
const API_TOKEN = process.env.NEXT_PUBLIC_API_MOV_TOKEN;
export const fetchMovies = async (language: string, page: number): Promise<Movie> => {
  try {
    const response = await fetch(
      `${API_URL}/popular?language=${language}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies popular:", error);
    throw new Error("Error fetching movies. Please try again later.");
  }
};
