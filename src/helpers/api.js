const API = {
  async getTasks() {
    const response = await fetch("./db.json");
    const data = await response.json();
    debugger;
    return data;
  },
};

export default API;
