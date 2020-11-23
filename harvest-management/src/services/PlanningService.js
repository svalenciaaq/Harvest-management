import http from "../http-common";

class PlanningService {
  getAll(id) {
    return http.get(`/planning/list/${id}`);
  }

  get(id) {
    return http.get(`planning/findOne/${id}`);
  }

  create(data) {
    return http.post("/planning/add", data);
  }


  deletePlanning(id) {
    return http.delete(`/planning/delete/${id}`);
  }

  deleteAllPlant() {
    return http.delete(`/`);
  }

  findByTitlePlant(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new PlanningService();