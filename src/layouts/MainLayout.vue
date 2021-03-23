<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="isLeftDrawerOpen = !isLeftDrawerOpen"
        />

        <q-toolbar-title>Quasar Element Tree</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isLeftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-h5 text-black"
          >Navigation</q-item-label
        >
        <q-item to="/documentation" exact>
          <q-item-section>
            <q-item-label>Documentation</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/element-tree-builder" exact>
          <q-item-section>
            <q-item-label>Element Tree Builder Demo</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/element-tree" exact>
          <q-item-section>
            <q-item-label>Element Tree Demo</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LayoutStore } from 'src/store/modules/LayoutStoreModule';

@Component
export default class MainLayout extends Vue {
  get isLeftDrawerOpen() {
    return LayoutStore.isLeftDrawerOpen;
  }

  set isLeftDrawerOpen(value) {
    if (!value) {
      LayoutStore.closeLeftDrawer();
      return;
    }

    LayoutStore.openLeftDrawer();
  }
}
</script>
