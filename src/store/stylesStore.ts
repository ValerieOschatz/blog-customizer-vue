import { defineStore } from 'pinia';
import { reactive } from 'vue';

import {
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  contentWidthArr,
  backgroundColors
} from '../utils/data/articleProps';

export const useStylesStore = defineStore('styles', () => {
  const fontFamily = reactive(fontFamilyOptions[0]);
  const fontSize = reactive(fontSizeOptions[0]);
  const fontColor = reactive(fontColors[0]);
  const containerWidth = reactive(contentWidthArr[0]);
  const bgColor = reactive(backgroundColors[0]);

  return {
    fontFamily,
    fontSize,
    fontColor,
    containerWidth,
    bgColor
  }
})
