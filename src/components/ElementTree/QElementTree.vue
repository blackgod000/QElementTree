<template>
  <q-et-store-provider>
    <element-tree v-bind="$attrs" v-on="$listeners" />
  </q-et-store-provider>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ElementTree from './ElementTree.vue';
import QEtStoreProvider from './Store/NamespacedStore/QEtStoreProvider.vue';

@Component({
  components: { QEtStoreProvider, ElementTree },
  inheritAttrs: false
})
export default class QElementTree extends Vue {}
</script>

<style></style>
