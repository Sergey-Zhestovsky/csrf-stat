import axios from 'axios';

const getRandomResult = () => {
  const sp = Math.round(Math.random() * 40);

  return {
    speed: sp,
    timestamp: Date.now() - sp - Math.round(Math.random() * 80),
    queue: Math.round(Math.random() * 23),
    load: Math.round(Math.random() * 250),
  };
};

class Connector {
  constructor(baseURL, config = {}) {
    this.axios = axios.create({ ...config, baseURL });
  }

  async query(path, method, data, config = {}) {
    return { data: getRandomResult() }; // TODO: remove
    return this.axios.request({
      url: path,
      method,
      data,
      ...config,
    });
  }

  async get(path, data, config) {
    return this.query(path, 'GET', data, config);
  }

  async post(path, data, config) {
    return this.query(path, 'POST', data, config);
  }
}

export default Connector;
