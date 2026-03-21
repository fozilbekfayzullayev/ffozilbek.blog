import axios from "axios";

const API_BASE = "https://683d8dd8199a0039e9e5f0ae.mockapi.io/posts";

export const fetchBlogs = async () => {
  const { data } = await axios.get(API_BASE);
  return data;
};

export const fetchBlogById = async (id) => {
  const { data } = await axios.get(`${API_BASE}/${id}`);
  return data;
};
