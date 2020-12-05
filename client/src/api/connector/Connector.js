import axios from 'axios';

class Connector {
  constructor(baseURL, config = {}) {
    this.axios = axios.create({ ...config, baseURL });
  }

  async query(path, method, data, config = {}) {
    try {
      const response = await this.axios.request({
        url: path,
        method,
        data,
        ...config,
      });
      return response.data.result;
    } catch (error) {
      throw error.response.error;
    }
  }

  async get(path, data, config) {
    return this.query(path, 'GET', data, config);
  }

  async post(path, data, config) {
    return this.query(path, 'POST', data, config);
  }

  async postWithTimestamp(path, data, config) {
    return this.query(path, 'POST', { ...data, timestamp: Date.now() }, config);
  }
}

export default Connector;
