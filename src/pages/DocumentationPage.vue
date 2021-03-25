<template>
  <q-page class="doc-page">
    <div class="text-right">
      <a href="https://github.com/wranarobert/QElementTree" target="_blank"
        >QElementTree GitHub</a
      >
    </div>
    <h1 class="doc-heading doc-h1">Element Tree</h1>
    <p>
      The QElementTree component is ...
    </p>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DocumentationPage extends Vue {}
</script>

<style scoped>
.doc-page {
  padding: 16px 46px;
  font-weight: 300;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.doc-heading {
  color: #1976d2;
  cursor: pointer;
}

.doc-h1 {
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem 0;
  font-weight: 500;
  margin: 0 0 2rem;
}
</style>
