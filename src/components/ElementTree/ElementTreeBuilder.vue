<template>
  <q-layout
    style="min-height: 90vh; width: 100%; height: 100%;"
    view="hHh Lpr fff"
  >
    <q-drawer
      v-model="drawer"
      show-if-above
      bordered
      side="right"
      :overlay="false"
    >
      <q-scroll-area class="fit">
        <q-tabs
          v-model="tab"
          class="bg-grey-3"
          align="justify"
          dense
          narrow-indicator
        >
          <q-tab name="add" label="Add Element" />
          <q-tab
            name="edit"
            label="Edit Element"
            :disable="!selectedElementId"
          />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="add" class="q-pa-none">
            <et-add-elements />
          </q-tab-panel>
          <q-tab-panel name="edit" class="q-pa-none">
            <et-edit-elements />
          </q-tab-panel>
        </q-tab-panels>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-toolbar
        :style="{ 'min-height': '36px', height: '36px' }"
        class="bg-grey-3"
      >
        <q-btn flat dense icon="save" @click="save" />
        <q-separator vertical />
        <q-btn disabled flat dense icon="undo" />
        <q-btn disabled flat dense icon="redo" />
        <q-separator vertical />
        <q-space />
        <q-btn flat dense icon="menu" @click="drawer = !drawer" />
      </q-toolbar>
      <element-tree
        :builderMode="true"
        :rootElementId="rootElementId"
        :elements="elements"
      />
    </q-page-container>
    <q-inner-loading :showing="false">
      <q-spinner-cube size="5.5em" />
    </q-inner-loading>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, Watch } from 'vue-property-decorator';

import QEtStoreProvider from './Store/NamespacedStore/QEtStoreProvider.vue';
import DynamicNamespacedStore from './Store/NamespacedStore/Service/DynamicNamespacedStore';

import ElementTree from './ElementTree.vue';
import EtAddElements from './Components/EtAddElements.vue';
import EtEditElements from './Components/EtEditElements.vue';

import { EtElementModel, IEtElementModel } from './Models/EtElementModel';

@Component({
  components: { QEtStoreProvider, ElementTree, EtAddElements, EtEditElements }
})
export default class ElementTreeBuilder extends Vue {
  @Inject('store') private store!: DynamicNamespacedStore;

  @Prop() readonly rootElementId!: ElementId;
  @Prop() readonly elements!: IEtElementModel[];

  drawer = true;
  tab = 'add';

  get selectedElementId(): ElementId {
    return this.store.getter('getSelectedElementId');
  }

  getElements(): EtElementModel[] {
    return this.store.getter('getOutputElements');
  }

  save() {
    this.$emit('save', this.getElements());
  }

  @Watch('selectedElementId')
  onSelectedElementIdChange(elementId: ElementId) {
    if (!elementId) {
      this.tab = 'add';
    } else {
      this.tab = 'edit';
    }
  }
}
</script>

<style></style>
