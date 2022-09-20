import axios from "axios";

const instance = axios.create({
  baseURL: "https://297349.simplecloud.ru/api/",
});

export const wheelAPI = {
  getUser(id) {
    return instance.get(`users/${id}`);
  },
  createUser(user) {
    return instance.post(`users/`, user);
  },
  getUsers() {
    return instance.get(`users/`);
  },
  updateUser(user) {
    return instance.put(`users/`, user);
  },
};
