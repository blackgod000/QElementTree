/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { uid } from 'quasar';
import { Store } from 'vuex';

export default class {
  private store: Store<unknown>;

  namespaceKey: string = 'eb-' + uid();

  constructor(store: Store<unknown>) {
    this.store = store;
  }

  private namespace(name: string): string {
    return `${this.namespaceKey}/${name}`;
  }

  dispatch(action: string, payload: unknown) {
    return this.store.dispatch(this.namespace(action), payload);
  }

  commit(commit: string, payload: unknown) {
    return this.store.commit(this.namespace(commit), payload);
  }

  getter(property: string): any {
    return this.store.getters[this.namespace(property)];
  }
}
