<template>
  <q-page>
    <q-element-tree
      :rootElementId="applicationRootElementId"
      :elements="applicationElements"
      :values.sync="values"
    />
    <q-separator />
    <div class="row">
      <div class="col-2">
        Values:
      </div>
      <div class="col">
        {{ valuesJSON }}
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { ApplicationStore } from 'src/store/modules/ApplicationStoreModule';

import QElementTree from 'components/ElementTree/QElementTree.vue';

@Component({
  components: { QElementTree }
})
export default class PageIndex extends Vue {
  values = {};

  get valuesJSON() {
    return JSON.stringify(this.values);
  }

  get applicationRootElementId() {
    return ApplicationStore.rootElementId;
  }

  get applicationElements() {
    return ApplicationStore.elements;
  }

  save(elements: any[]) {
    console.log(elements);
    ApplicationStore.saveElements(elements);
  }
}
</script>
