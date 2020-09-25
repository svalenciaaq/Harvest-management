import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/user/list");
  }

  get(id) {
    return http.get(`/user/findOne/${id}`);
  }

  create(data) {
    return http.post("/user/add", data);
  }

  updateUser(id, data) {
    return http.put(`/user/update/${id}`, data);
  }

  deleteUser(id) {
    return http.delete(`/user/delete/${id}`);
  }

  deleteAlluser() {
    return http.delete(``);
  }

  findByTitleuser(title) {
    return http.get(``);
  }
}

export default new UserDataService();