const getRandomResult = (id) => ({
  id,
  speed: Math.round(Math.random() * 40),
  delay: Math.round(Math.random() * 70),
  queue: Math.round(Math.random() * 23),
  load: Math.round(Math.random() * 250),
});

class QueryService {
  constructor(algorithmId, environmentId) {
    this.timeout = null;
  }

  start(callback, delay = 50) {
    this.timeout = setInterval(() => {
      callback(getRandomResult());
    }, delay);
  }

  stop() {
    clearInterval(this.timeout);
  }
}

export default QueryService;
