<template>
  <q-input
    debounce="100"
    :readonly="isBuilderMode"
    v-bind="element.attributes"
    :value="value"
    @input="changeValue"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date
            :readonly="isBuilderMode"
            :value="value"
            @input="changeValue"
            mask="YYYY-MM-DD HH:mm"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :readonly="isBuilderMode"
            :value="value"
            @input="changeValue"
            mask="YYYY-MM-DD HH:mm"
            format24h
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { QInput } from 'quasar';

import { EtElementValueMixin } from './Common/EtElementValueMixin';

@Component({ components: { QInput } })
export default class EtDateTime extends Mixins(EtElementValueMixin) {}
</script>
