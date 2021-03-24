<template>
  <div class="q-gutter-sm">
    <q-input
      dense
      label="Size"
      debounce="100"
      type="number"
      min="1"
      :value="attributes.flexSize"
      @input="changeAttribute('flexSize', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtEditElementMixin } from './EtEditElementMixin';

@Component
export default class EtEditLayout extends Mixins(EtEditElementMixin) {}
</script>

<style scoped></style>
