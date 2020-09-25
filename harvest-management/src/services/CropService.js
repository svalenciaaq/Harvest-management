import http from "../http-common";

class CropDataService {
  getAll() {
    return http.get("/crop/list");
  }

  get(id) {
    return http.get(`/crop/findOne/${id}`);
  }

  create(data) {
    return http.post("/crop/add", data);
  }

  updatePlant(id, data) {
    return http.put(`/crop/update/${id}`, data);
  }

  deletePlant(id) {
    return http.delete(`/crop/delete/${id}`);
  }

  deleteAllPlant() {
    return http.delete(`/`);
  }

  findByTitlePlant(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new CropDataService();