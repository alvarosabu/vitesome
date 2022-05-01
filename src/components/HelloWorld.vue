<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
  msg: {
    type: String,
    default: '',
  },

})

const { t } = useI18n();
</script>
<template>
  <div class="text-center text-md">
    <h1 class="font-serif font-bold font-bold text-4xl mb-8">{{ msg }}</h1>

    <p>
      {{t('recomended-ide')}}
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
      >
        Vetur
      </a>
      or
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      ({{t('if-using')}}
      <code>&lt;script setup&gt;</code>)
    </p>

    <p>{{t('See')}} <code>README.md</code> {{t('more-info')}}</p>
    <p class="mb-10">
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
  </div>
</template>

<style scoped>
a {
  @apply text-cyan-400 hover:text-cyan-500 transition-all ease-out duration-100;
}
</style>

<style scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  @apply text-xs font-mono bg-yellow-200 text-yellow-700 rounded px-0.5 py-0.5;
}
</style>
