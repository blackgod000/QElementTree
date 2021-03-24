<template>
  <div class="q-gutter-sm">
    <div class="row items-baseline">
      <div class="col">
        <q-checkbox
          dense
          label="Filled"
          :value="attributes.filled"
          @input="changeAttribute('filled', $event)"
        />
      </div>
      <div class="col">
        <q-checkbox
          dense
          label="Outlined"
          :value="attributes.outlined"
          @input="changeAttribute('outlined', $event)"
        />
      </div>
    </div>

    <div class="row items-baseline">
      <div class="col">
        <q-checkbox
          dense
          label="Square"
          :value="attributes.square"
          @input="changeAttribute('square', $event)"
        />
      </div>
      <div class="col">
        <q-checkbox
          dense
          label="Rounded"
          :value="attributes.rounded"
          @input="changeAttribute('rounded', $event)"
        />
      </div>
    </div>

    <q-checkbox
      dense
      label="Dense"
      :value="attributes.dense"
      @input="changeAttribute('dense', $event)"
    />

    <q-input
      dense
      clearable
      label="Focus color"
      :value="attributes.color"
      @input="changeAttribute('color', $event)"
    >
      <template v-slot:append>
        <q-icon name="colorize" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-color
              default-view="palette"
              :palette="[
                'red',
                '#D9B801',
                '#E8045A',
                '#B2028A',
                '#2A0449',
                '#019A9D'
              ]"
              :value="attributes.color"
              @input="changeAttribute('color', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input
      dense
      clearable
      label="Label color"
      :value="attributes.labelColor"
      @input="changeAttribute('labelColor', $event)"
    >
      <template v-slot:append>
        <q-icon name="colorize" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-color
              :value="attributes.labelColor"
              @input="changeAttribute('labelColor', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input
      dense
      clearable
      label="Background color"
      :value="attributes.bgColor"
      @input="changeAttribute('bgColor', $event)"
    >
      <template v-slot:append>
        <q-icon name="colorize" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-color
              default-view="palette"
              :palette="[
                'red',
                '#D9B801',
                '#E8045A',
                '#B2028A',
                '#2A0449',
                '#019A9D'
              ]"
              :value="attributes.bgColor"
              @input="changeAttribute('bgColor', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtEditElementMixin } from './EtEditElementMixin';

@Component
export default class EtEditInputsStyle extends Mixins(EtEditElementMixin) {}
</script>

<style scoped></style>
