<template>
  <div class="q-gutter-y-sm">
    <q-input
      label="Field"
      debounce="100"
      dense
      clearable
      :value="field"
      @input="changeField"
    />

    <div class="row items-baseline">
      <div class="col-7">
        <q-input
          label="Label to display"
          debounce="100"
          dense
          :value="attributes.label"
          @input="changeAttribute('label', $event)"
        />
      </div>
      <div class="col-5">
        <q-checkbox
          dense
          label="Stack Label"
          :value="attributes.stackLabel"
          @input="changeAttribute('stackLabel', $event)"
        />
      </div>
    </div>

    <div class="row items-baseline">
      <div class="col-7">
        <q-input
          dense
          label="Hint"
          debounce="100"
          :value="attributes.hint"
          @input="changeAttribute('hint', $event === '' ? undefined : $event)"
        />
      </div>
      <div class="col-5">
        <q-checkbox
          dense
          label="Hide Hint"
          :value="attributes.hideHint"
          @input="changeAttribute('hideHint', $event)"
        />
      </div>
    </div>

    <div class="row q-gutter-sm items-baseline">
      <div class="col">
        <q-input
          dense
          label="Prefix"
          debounce="100"
          :value="attributes.prefix"
          @input="changeAttribute('prefix', $event)"
        />
      </div>
      <div class="col">
        <q-input
          dense
          label="Suffix"
          debounce="100"
          :value="attributes.suffix"
          @input="changeAttribute('suffix', $event)"
        />
      </div>
    </div>

    <q-checkbox
      dense
      label="Clearable"
      :value="attributes.clearable"
      @input="changeAttribute('clearable', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtEditElementMixin } from './EtEditElementMixin';
import { EtEditValueElementMixin } from './EtEditValueElementMixin';

@Component
export default class EtEditInputsGeneral extends Mixins(
  EtEditElementMixin,
  EtEditValueElementMixin
) {}
</script>

<style scoped></style>
