import { $store } from 'src/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

@Module({
  dynamic: true,
  store: $store,
  namespaced: true,
  name: 'LayoutStoreModule'
})
class LayoutStoreModule extends VuexModule {
  isLeftDrawerOpen = false;

  @Action
  openLeftDrawer() {
    this.SetLeftDrawer(true);
  }

  @Action
  closeLeftDrawer() {
    this.SetLeftDrawer(false);
  }

  @Mutation
  SetLeftDrawer(toOpen: boolean) {
    this.isLeftDrawerOpen = toOpen;
  }
}

export const LayoutStore = getModule(LayoutStoreModule);
