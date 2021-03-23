<template>
  <drag :key="type" :data="type" @cut="copy">
    <q-chip clickable dense square :icon="icon">
      {{ label }}
    </q-chip>
  </drag>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Drag } from 'vue-easy-dnd';

@Component({ components: { Drag } })
export default class EtAddElement extends Vue {
  @Prop() readonly type!: string | number;
  @Prop() readonly icon!: string;
  @Prop() readonly label!: string;

  copy() {
    console.log('copy');
  }
}
</script>

<style scoped></style>
