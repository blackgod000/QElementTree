<template>
  <q-page>
    <q-element-tree-builder
      :rootElementId="applicationRootElementId"
      :elements="applicationElements"
      @save="save"
    />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { ApplicationStore } from 'src/store/modules/ApplicationStoreModule';

import QElementTreeBuilder from 'src/infrastructure/ElementTree/QElementTreeBuilder.vue';

@Component({
  components: { QElementTreeBuilder }
})
export default class ElementTreeBuilderPage extends Vue {
  get applicationRootElementId() {
    return ApplicationStore.rootElementId;
  }

  get applicationElements() {
    return ApplicationStore.elements;
  }

  save(elements: any[]) {
    ApplicationStore.saveElements(elements);
  }
}
</script>
