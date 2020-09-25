import http from "../http-common";

class PlantDataService {
  getAll() {
    return http.get("/plant/list");
  }

  get(id) {
    return http.get(`/plant/findOne/${id}`);
  }

  create(data) {
    return http.post("/plant/add", data);
  }

  updatePlant(id, data) {
    return http.put(`/plant/update/${id}`, data);
  }

  deletePlant(id) {
    return http.delete(`/plant/delete/${id}`);
  }

  deleteAllPlant() {
    return http.delete(`/`);
  }

  findByTitlePlant(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new PlantDataService();