import { nanoid } from 'nanoid';

class QueryResult {
  constructor({ id = nanoid(), speed, delay, queue, load }) {
    this.id = id;
    this.speed = speed;
    this.delay = delay ?? speed;
    this.queue = queue;
    this.load = load;
  }

  setValue({ id, speed, delay, queue, load }) {
    return new QueryResult({
      id: id ?? this.id,
      speed: speed ?? this.speed,
      delay: delay ?? this.delay,
      queue: queue ?? this.queue,
      load: load ?? this.load,
    });
  }
}

export default QueryResult;
