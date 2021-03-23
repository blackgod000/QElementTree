<template>
  <div>
    <div class="q-pa-sm">
      <div class="text-h7 text-uppercase text-center">Column</div>
    </div>
    <q-separator size="2px" />
    <q-list bordered>
      <q-expansion-item
        class="bg-grey-3"
        expand-separator
        icon="create"
        label="Layout"
        default-opened
        dense
      >
        <div class="q-pa-sm bg-white">
          <et-edit-layout />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import EtEditLayout from './Common/EtEditLayout.vue';

import { EtEditElementMixin } from './Common/EtEditElementMixin';

@Component({ components: { EtEditLayout } })
export default class EtEditColumn extends Mixins(EtEditElementMixin) {}
</script>

<style scoped></style>
