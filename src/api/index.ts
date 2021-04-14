import axios from "axios";
import { ProfileType } from "../Type/Type";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f13c6464-ffc2-4463-bde6-cefac36f4c02",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  follow(id: number) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },

  getProfile(userId: number) {
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}
type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance
      .get<MeResponseType>(`auth/me`)
      .then((response) => response.data);
  },
  login(email: string, password: string, rememberMe = false) {
    return instance
    .post<LoginResponseType>(`auth/login`, { email, password, rememberMe })
    .then((response) => response.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId: number) {
    return instance
      .get(`profile/status/` + userId)
      .then((response) => response.data);
  },
  updateStatus(status: string) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data);
  },

  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile).then((response) => response.data);
  },
};
