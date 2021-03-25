<template>
  <q-list bordered>
    <q-expansion-item
      class="bg-grey-3"
      icon="view_quilt"
      label="Layout"
      expand-separator
      default-opened
      dense
    >
      <div class="q-pa-sm bg-white">
        <div class="row justify-start items-center">
          <et-add-element
            v-for="addElement in addElements.layout"
            :key="addElement.type"
            :type="addElement.type"
            :icon="addElement.icon"
            :label="addElement.label"
          />
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
      class="bg-grey-3"
      expand-separator
      icon="create"
      label="Inputs"
      default-opened
      dense
    >
      <div class="q-pa-sm bg-white">
        <div class="row justify-start items-center">
          <et-add-element
            v-for="addElement in addElements.inputs"
            :key="addElement.type"
            :type="addElement.type"
            :icon="addElement.icon"
            :label="addElement.label"
          />
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
      class="bg-grey-3"
      expand-separator
      icon="text_fields"
      label="Statics"
      default-opened
      dense
    >
      <div class="q-pa-sm bg-white">
        <div class="row justify-start items-center">
          <et-add-element
            v-for="addElement in addElements.statics"
            :key="addElement.type"
            :type="addElement.type"
            :icon="addElement.icon"
            :label="addElement.label"
          />
        </div>
      </div>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Drag } from 'vue-easy-dnd';

import EtAddElement from './AddElements/EtAddElement.vue';

import { createAddElements } from '../Factories/AddElementsFactory';

@Component({ components: { Drag, EtAddElement } })
export default class EtAddElements extends Vue {
  addElements = createAddElements();
}
</script>

<style scoped></style>
