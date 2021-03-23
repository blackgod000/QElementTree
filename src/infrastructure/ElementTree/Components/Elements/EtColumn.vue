<template>
  <et-container direction="column" :elementId="elementId" />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtElementMixin } from './Common/EtElementMixin';

import EtContainer from './EtContainer.vue';

@Component({ components: { EtContainer } })
export default class EtColumn extends Mixins(EtElementMixin) {}
</script>
