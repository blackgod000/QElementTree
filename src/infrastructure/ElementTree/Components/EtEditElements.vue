<template>
  <div class="q-gutter-md">
    <component :is="component" />
    <div v-if="!isSelectedElementRoot" class="full-width row justify-center">
      <q-btn
        label="Delete"
        icon="delete_forever"
        color="red"
        @click="deleteElement"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';
import { ElementType } from '../Enums/ElementTypeEnum';

import { createEditElementComponent } from '../Factories/EditElementComponentFactory';

import DynamicNamespacedStore from '../Store/NamespacedStore/Service/DynamicNamespacedStore';

@Component
export default class EtEditElements extends Vue {
  @Inject('store') private store!: DynamicNamespacedStore;

  get selectedElementId(): ElementId {
    return this.store.getter('getSelectedElementId');
  }

  get selectedElementType(): ElementType {
    return this.store.getter('getSelectedElementType');
  }

  get isSelectedElementRoot(): boolean {
    return this.store.getter('isSelectedElementRoot');
  }

  get component(): any {
    try {
      return createEditElementComponent(this.selectedElementType);
    } catch {
      return null;
    }
  }

  async deleteElement() {
    await this.store.dispatch(
      '[ElementBuilder] Delete Element',
      this.selectedElementId
    );
  }
}
</script>

<style scoped></style>
