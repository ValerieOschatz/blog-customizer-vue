<script setup lang="ts">
import { useStylesStore } from './store/stylesStore';
import ArticleParamsForm from './components/article-params-form/ArticleParamsForm.vue';
import Article from './components/article/Article.vue';

const store = useStylesStore();
</script>

<template>
  <div>
    <main
      class="main"
      :style="{
        '--font-family': store.fontFamily.value,
        '--font-size': store.fontSize.value,
        '--font-color': store.fontColor.value,
        '--container-width': store.containerWidth.value,
        '--bg-color': store.bgColor.value
      }"
    >
      <ArticleParamsForm />
      <Article />
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
	--bg-color: #ffffff;
	background-color: var(--bg-color, #ffffff);
}
</style>
