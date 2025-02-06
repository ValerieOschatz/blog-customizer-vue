<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useStylesStore } from '../../store/stylesStore';
import ArrowButton from '../ui/arrow-button/ArrowButton.vue';
import Text from '../ui/text/Text.vue';
import Select from '../ui/select/Select.vue';
import RadioGroup from '../ui/radio-group/RadioGroup.vue';
import Separator from '../ui/separator/Separator.vue';
import Button from '../ui/button/Button.vue';

import { 
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  type OptionType
} from '../../utils/data/articleProps';

const store = useStylesStore();
const isOpen = ref(false);

const selectedFontFamily = reactive({...store.fontFamily});
const selectedFontSize = reactive({...store.fontSize});
const selectedFontColor = reactive({...store.fontColor});
const selectedBgColor = reactive({...store.bgColor});
const selectedContainerWidth = reactive({...store.containerWidth});

const handleClickArrow = () => {
  isOpen.value = !isOpen.value;
}

const setSelectedOption = (selectedOption: OptionType, option: OptionType) => {
	selectedOption.title = option.title;
	selectedOption.className = option.className;
	selectedOption.optionClassName = option.optionClassName;
	selectedOption.value = option.value;
}

const resetOptions = () => {
  setSelectedOption(selectedFontFamily, store.fontFamily);
  setSelectedOption(selectedFontSize, store.fontSize);
  setSelectedOption(selectedFontColor, store.fontColor);
  setSelectedOption(selectedBgColor, store.bgColor);
  setSelectedOption(selectedContainerWidth, store.containerWidth);
}

const handleSetFont = (option: OptionType) => {
  setSelectedOption(selectedFontFamily, option);
}

const handleSetFontSize = (option: OptionType) => {
  setSelectedOption(selectedFontSize, option);
}

const handleSetFontColor = (option: OptionType) => {
  setSelectedOption(selectedFontColor, option);
}

const handleSetBgColor = (option: OptionType) => {
  setSelectedOption(selectedBgColor, option);
}

const handleSetContainerWidth = (option: OptionType) => {
  setSelectedOption(selectedContainerWidth, option);
}

const handleFormSubmit = () => {
  store.setValues(
    selectedFontFamily,
    selectedFontSize,
    selectedFontColor,
    selectedContainerWidth,
    selectedBgColor
  )
}

const handleFormReset = () => {
  store.resetValues();
  resetOptions();
}
</script>

<template>
  <ArrowButton :isOpen="isOpen" @onClick="handleClickArrow" />
  
  <aside
    :class="`container ${isOpen && 'container_open'}`"
  >
    <form class="form">
      <Text :weight="800" :size="31" uppercase align='left'>
        задайте параметры
      </Text>

      <Select
        title="шрифт"
        :options="fontFamilyOptions"
        :selected="selectedFontFamily"
        @onChange="handleSetFont"
      />

      <RadioGroup
        name="FontSize"
        title="размер шрифта"
        :options="fontSizeOptions"
        :selected="selectedFontSize"
        @onChange="handleSetFontSize"
      />

      <Select
        title="цвет шрифта"
        :options="fontColors"
        :selected="selectedFontColor"
        @onChange="handleSetFontColor"
      />

      <Separator />

      <Select
        title="цвет фона"
        :options="backgroundColors"
        :selected="selectedBgColor"
        @onChange="handleSetBgColor"
      />

      <Select
        title="ширина контента"
        :options="contentWidthArr"
        :selected="selectedContainerWidth"
        @onChange="handleSetContainerWidth"
      />

      <div class="bottomContainer">
        <Button title='Сбросить' type='button' @onClick="handleFormReset" />
        <Button title='Применить' type='submit' @onClick="handleFormSubmit" />
      </div>
    </form>
  </aside>
</template>

<style scoped lang="scss">
.container {
	position: fixed;
	left: 0;
	width: 616px;
	height: 100%;
	overflow: auto;
	transform: translate(-616px);
	transition: transform 0.5s ease;
}

.container_open {
	transform: translate(0);
}

.form {
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	height: auto;
	min-height: 100%;
	padding: 50px 31px;
	background-color: #ffffff;
	border-right: 1px solid #000000;
}

.bottomContainer {
	display: flex;
	justify-content: space-between;
	margin-top: 15vh;
}
</style>
