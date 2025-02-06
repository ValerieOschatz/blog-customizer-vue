import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { OptionType } from '../utils/data/articleProps';

import {
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  contentWidthArr,
  backgroundColors
} from '../utils/data/articleProps';

export const useStylesStore = defineStore('styles', () => {
  const fontFamily = reactive({...fontFamilyOptions[0]});
  const fontSize = reactive({...fontSizeOptions[0]});
  const fontColor = reactive({...fontColors[0]});
  const containerWidth = reactive({...contentWidthArr[0]});
  const bgColor = reactive({...backgroundColors[0]});

  const setValue = (option: OptionType, newOption: OptionType) => {
    option.className = newOption.className;
    option.optionClassName = newOption.optionClassName;
    option.title = newOption.title;
    option.value = newOption.value;
  }

  const setValues = (
    fontFamilyOption: OptionType,
    fontSizeOption: OptionType,
    fontColorOption: OptionType,
    containerWidthOption: OptionType,
    bgColorOption: OptionType
  ) => {
    setValue(fontFamily, fontFamilyOption);
    setValue(fontSize, fontSizeOption);
    setValue(fontColor, fontColorOption);
    setValue(containerWidth, containerWidthOption);
    setValue(bgColor, bgColorOption);
  }

  const resetValues = () => {
    setValue(fontFamily, fontFamilyOptions[0]);
    setValue(fontSize, fontSizeOptions[0]);
    setValue(fontColor, fontColors[0]);
    setValue(containerWidth, contentWidthArr[0]);
    setValue(bgColor, backgroundColors[0]);
  }

  return {
    fontFamily,
    fontSize,
    fontColor,
    containerWidth,
    bgColor,
    setValues,
    resetValues
  }
})
