import axios from "axios";

const instance = axios.create({
  baseURL: "http://85.143.175.133:5000/api/",
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
    return instance.post(`users/`, user);
  },
};
