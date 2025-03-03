import axiosInstance from "../utils/axiosInstance";

export const getCategoriesFilms = async () => {
  try {
    const response = await axiosInstance.get("/the-loai");
    return response.data;
  } catch (error) {
    console.error(
      "Error occurred while fetching data from /the-loai endpoint: ",
      error
    );
    throw error;
  }
};
