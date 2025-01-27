<script setup lang="ts">
import { reactive } from 'vue';
import { useStylesStore } from './store/stylesStore';
import ArticleParamsForm from './components/article-params-form/ArticleParamsForm.vue';
import Article from './components/article/Article.vue';

const store = useStylesStore();
const fontFamily = store.fontFamily;
const fontSize = store.fontSize;
const color = store.fontColor;
const width = store.containerWidth;
const backgroundColor = store.bgColor;

const styleObject = reactive({
  fontFamily: fontFamily.value,
  fontSize: fontSize.value,
  color: color.value,
  width: width.value,
  backgroundColor: backgroundColor.value
})
</script>

<template>
  <main>
    <div
      class="main"
      :style="styleObject"
    ></div>
    
    <ArticleParamsForm />
    <Article />
  </main>
</template>

<style scoped>
.main {
	--bg-color: #ffffff;
	background-color: var(--bg-color, #ffffff);
}
</style>
