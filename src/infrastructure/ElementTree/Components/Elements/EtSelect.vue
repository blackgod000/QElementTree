<template>
  <q-select
    :readonly="isBuilderMode"
    v-bind="element.attributes"
    :value="value"
    @input="changeValue"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { QSelect } from 'quasar';

import { EtElementValueMixin } from './Common/EtElementValueMixin';

@Component({ components: { QSelect } })
export default class EtSelect extends Mixins(EtElementValueMixin) {}
</script>
