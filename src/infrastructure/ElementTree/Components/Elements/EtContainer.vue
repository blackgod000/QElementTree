<template>
  <div>
    <drop-list
      v-if="isBuilderMode"
      :items="element.elementIds"
      class="et-drop-list"
      :style="{ flexDirection: direction }"
      @insert="insert"
      @reorder="reorder"
      mode="cut"
      :row="direction === 'row'"
      :column="direction === 'column'"
      :accepts-data="dropElementId => dropElementId !== elementId"
    >
      <template v-slot:item="{ item }">
        <drag
          :tag="EtElementComponent"
          :elementId="item"
          :key="item"
          :data="item"
          @cut="removeReplaced(item)"
        />
      </template>
      <template v-slot:feedback="{ data }">
        <div :key="data" class="et-feedback" />
      </template>
      <template v-slot:reordering-feedback>
        <div class="et-reordering-feedback" key="feedback" />
      </template>
    </drop-list>
    <div v-else class="et-list" :style="{ flexDirection: direction }">
      <component
        :is="EtElementComponent"
        v-for="id in element.elementIds"
        :key="id"
        :elementId="id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Drag, DropList, InsertEvent, ReorderEvent } from 'vue-easy-dnd';

import { EtElementMixin } from './Common/EtElementMixin';

import EtElement from '../EtElement.vue';
import {
  IDragRemovePayload,
  IDropInsertPayload,
  IDropReorderPayload
} from 'src/infrastructure/ElementTree/Store/types';
import { EtContainerElementModel } from '../../Models/EtElementModel';

@Component({
  components: { Drag, DropList, EtElement }
})
export default class EtContainer extends Mixins(EtElementMixin) {
  @Prop() readonly direction!: 'row' | 'column';

  get EtElementComponent(): any {
    return EtElement;
  }

  get element(): EtContainerElementModel {
    return this.store.getter('getElementById')(this.elementId);
  }

  async insert(event: InsertEvent) {
    await this.store.dispatch('[ElementBuilder] Drop Insert', <
      IDropInsertPayload
    >{
      parentId: this.elementId,
      dropEvent: event
    });
  }

  async reorder(event: ReorderEvent) {
    await this.store.dispatch('[ElementBuilder] Drop Reorder', <
      IDropReorderPayload
    >{
      parentId: this.elementId,
      dropEvent: event
    });
  }

  async removeReplaced(elementId: ElementId) {
    await this.store.dispatch('[ElementBuilder] Drag Remove', <
      IDragRemovePayload
    >{
      parentId: this.elementId,
      elementId: elementId
    });
  }
}
</script>

<style scoped>
.et-drop-list {
  border: 1px dashed black;
  display: flex;
  align-items: stretch;
  min-height: 40px;
}

.et-list {
  display: flex;
  align-items: stretch;
  min-height: 40px;
}

.et-reordering-feedback,
.et-feedback {
  flex: 0 0 0;
  outline: 1px solid blue;
  align-self: stretch;
}

.drag-source {
  outline: 2px dashed black;
}
</style>
