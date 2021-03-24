<template>
  <et-container
    direction="row"
    :elementId="elementId"
    :style="{
      'background-color': element.attributes.backgroundColor
    }"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtElementMixin } from './Common/EtElementMixin';

import EtContainer from './EtContainer.vue';

@Component({ components: { EtContainer } })
export default class EtRow extends Mixins(EtElementMixin) {}
</script>
