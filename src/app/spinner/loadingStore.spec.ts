import { LoadingStore } from './LoadingStore';

describe('Loading Store', () => {
  let loadingStore!: LoadingStore;

  beforeEach(() => {
    loadingStore = LoadingStore.getInstance();
  });

  it('loading show', () => {
    loadingStore.show();

    expect(loadingStore.get()).toBe(true);
  });

  it('loading hide', () => {
    loadingStore.hide();

    expect(loadingStore.get()).toBe(false);
  });
});
