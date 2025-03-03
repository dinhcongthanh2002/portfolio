import axiosInstance from "../utils/axiosInstance";

export const getHomeFilms = async () => {
  try {
    const response = await axiosInstance.get("/home");
    return response.data;
  } catch (error) {
    console.error(
      "Error occurred while fetching data from /home endpoint: ",
      error
    );
    throw error;
  }
};
