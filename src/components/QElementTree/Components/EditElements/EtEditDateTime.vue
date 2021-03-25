<template>
  <div>
    <div class="q-pa-sm">
      <div class="text-h7 text-uppercase text-center">Date Time</div>
    </div>
    <q-separator size="2px" />
    <q-list bordered>
      <q-expansion-item
        class="bg-grey-3"
        icon="settings"
        label="General"
        expand-separator
        default-opened
        dense
      >
        <div class="q-pa-sm bg-white">
          <div class="q-gutter-sm">
            <et-edit-inputs-general />
          </div>
        </div>
      </q-expansion-item>
      <q-expansion-item
        class="bg-grey-3"
        expand-separator
        icon="view_carousel"
        label="Layout"
        dense
      >
        <div class="q-pa-sm bg-white">
          <et-edit-layout />
        </div>
      </q-expansion-item>
      <q-expansion-item
        class="bg-grey-3"
        expand-separator
        icon="format_color_fill"
        label="Style"
        default-opened
        dense
      >
        <div class="q-pa-sm bg-white">
          <et-edit-inputs-style />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import EtEditLayout from './Common/EtEditLayout.vue';
import EtEditInputsGeneral from './Common/EtEditInputsGeneral.vue';
import EtEditInputsStyle from './Common/EtEditInputsStyle.vue';

import { EtEditElementMixin } from './Common/EtEditElementMixin';

@Component({
  components: { EtEditLayout, EtEditInputsGeneral, EtEditInputsStyle }
})
export default class EtEditDateTime extends Mixins(EtEditElementMixin) {}
</script>

<style scoped></style>
