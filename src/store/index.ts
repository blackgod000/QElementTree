import { store } from 'quasar/wrappers';
import Vuex, { Store } from 'vuex';

// import { ElementBuilderModule } from 'src/infrastructure/ElementTree/store';

export let $store: Store<unknown>;

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const store = new Store<unknown>({
    modules: {},

    strict: !!process.env.DEBUGGING
  });

  $store = store;

  return store;
});
