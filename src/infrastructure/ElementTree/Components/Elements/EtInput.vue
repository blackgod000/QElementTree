<template>
  <q-input
    debounce="100"
    :readonly="isBuilderMode"
    v-bind="element.attributes"
    :value="value"
    @input="changeValue"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { QInput } from 'quasar';

import { EtElementValueMixin } from './Common/EtElementValueMixin';

@Component({ components: { QInput } })
export default class EtInput extends Mixins(EtElementValueMixin) {}
</script>
