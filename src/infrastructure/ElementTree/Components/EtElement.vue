<template>
  <div
    class="et-element"
    :style="{
      flex: element.attributes.flexSize,
      border: isSelectedElement ? '2px solid blue' : 'none'
    }"
    v-touch-hold.mouse="selectElement"
  >
    <component :is="component" :elementId="elementId" />

    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtElementMixin } from './Elements/Common/EtElementMixin';

import { createElementComponent } from 'src/infrastructure/ElementTree/Factories/ElementComponentFactory';

@Component
export default class EtElement extends Mixins(EtElementMixin) {
  get isRootElementId(): boolean {
    return this.elementId === this.store.getter('rootElementId');
  }

  get isSelectedElement(): boolean {
    return this.elementId === this.store.getter('getSelectedElementId');
  }

  get component(): any {
    try {
      return createElementComponent(this.element);
    } catch {
      return null;
    }
  }

  async selectElement() {
    await this.store.dispatch(
      '[ElementBuilder] Select Element',
      this.elementId
    );
  }
}
</script>

<style scoped>
.et-element {
  border-radius: 4px;
  margin: 10px;
}
</style>
