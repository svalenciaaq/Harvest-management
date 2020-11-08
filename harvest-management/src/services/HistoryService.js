import http from "../http-common";

class HistoryService {
  getAll() {
    return http.get("/plant/history/list");
  }

  get(id) {
    return http.get(`/history/findOne/${id}`);
  }

  create(data) {
    return http.post("history/add", data);
  }

  updatePlant(id, data) {
    return http.put(`/plant/history/edit/${id}`, data);
  }

  deletePlant(id) {
    return http.delete(`/plant/history/delete/${id}`);
  }

  deleteAllPlant() {
    return http.delete(`/`);
  }

  findByTitlePlant(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new HistoryService();