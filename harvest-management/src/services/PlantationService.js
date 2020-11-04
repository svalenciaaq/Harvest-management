import http from "../http-common";

class PlantationDataService {
  getAll() {
    return http.get("/plantation/list");
  }

  get(id) {
    return http.get(`/plantation/findOne/${id}`);
  }

  create(data) {
    return http.post("/plantation/add", data);
  }

  updatePlantation(id, data) {
    return http.put(`/plantation/edit/${id}`, data);
  }

  deletePlantation(id) {
    return http.delete(`/plantation/delete/${id}`);
  }

  deleteAllPlantation() {
    return http.delete(`/`);
  }

  findByTitlePlant(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new PlantationDataService();