import { Store } from '../Store';

export class LoadingStore extends Store<boolean> {
  private static instance: LoadingStore;

  private constructor() {
    super();
    this.hide();
  }

  static getInstance(): LoadingStore {
    if (!LoadingStore.instance) {
      LoadingStore.instance = new LoadingStore();
    }
    return LoadingStore.instance;
  }

  show() {
    this.store(true);
  }

  hide() {
    this.store(false);
  }
}
