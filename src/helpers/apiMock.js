const API = {
  async getTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    debugger;
    return data;
  },
};

export default API;
