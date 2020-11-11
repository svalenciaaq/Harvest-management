import http from "../http-common";

class HistoryService {
  getAll(id) {
    return http.get(`/plant/history/list/${id}`);
  }

  get(id) {
    return http.get(`plant/history/findOne/${id}`);
  }

  create(data) {
    return http.post("/plant/history/add", data);
  }

  updateHistory(id, data) {
    return http.put(`/plant/history/edit/${id}`, data);
  }

  deleteHistory(id) {
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