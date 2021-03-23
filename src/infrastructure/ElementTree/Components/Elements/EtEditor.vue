<template>
  <q-editor
    dense
    min-height="5rem"
    :readonly="isBuilderMode"
    :value="value || ''"
    @input="changeValue"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { QInput } from 'quasar';

import { EtElementValueMixin } from './Common/EtElementValueMixin';

@Component({ components: { QInput } })
export default class EtEditor extends Mixins(EtElementValueMixin) {}
</script>
