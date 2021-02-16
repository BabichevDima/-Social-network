import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f13c6464-ffc2-4463-bde6-cefac36f4c02",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  deleteUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  postUsers(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
};
