<template>
  <q-et-store-provider>
    <element-tree-builder
      ref="elementTreeBuilder"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </q-et-store-provider>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import ElementTreeBuilder from './ElementTreeBuilder.vue';
import { EtElementModel } from './Models/EtElementModel';

import QEtStoreProvider from './Store/NamespacedStore/QEtStoreProvider.vue';

@Component({
  components: { QEtStoreProvider, ElementTreeBuilder },
  inheritAttrs: false
})
export default class QElementTreeBuilder extends Vue {
  getElements(): EtElementModel[] {
    return (<ElementTreeBuilder>this.$refs.elementTreeBuilder).getElements();
  }
}
</script>

<style></style>
