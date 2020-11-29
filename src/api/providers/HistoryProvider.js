import * as localForage from 'localforage';
import { nanoid } from 'nanoid';

class HistoryProvider {
  constructor() {
    this.store = localForage.createInstance({
      name: 'history',
    });
  }

  async getById(id) {
    const result = await this.store.getItem(id);
    return { id, ...result };
  }

  async getAll() {
    return this.store.getItems();
  }

  async add(dataset) {
    const id = nanoid();
    await this.store.setItem(id, dataset);
    return id;
  }

  async removeById(id) {
    return this.store.removeItem(id);
  }

  async removeAll() {
    return this.store.clear();
  }
}

export default HistoryProvider;
