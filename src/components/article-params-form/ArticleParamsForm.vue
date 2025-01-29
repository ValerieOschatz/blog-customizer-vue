<script setup lang="ts">
import { ref } from 'vue';
import { useStylesStore } from '../../store/stylesStore';
import ArrowButton from '../ui/arrow-button/ArrowButton.vue';
import Text from '../ui/text/Text.vue';
import Select from '../ui/select/Select.vue';
import RadioGroup from '../ui/radio-group/RadioGroup.vue';
import Separator from '../ui/separator/Separator.vue';

import { 
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr
} from '../../utils/data/articleProps';

const isOpen = ref(false);
const selectedOptions = useStylesStore();

const handleClickArrow = () => {
  isOpen.value = !isOpen.value;
}

const handleFormSubmit = () => {}
const handleSetFont = () => {}
const handleSetFontSize = () => {}
const handleSetFontColor = () => {}
const handleSetBgColor = () => {}
const handleSetContainerWidth = () => {}
const handleFormReset = () => {}
</script>

<template>
  <ArrowButton :isOpen="isOpen" @onClick="handleClickArrow" />
  
  <aside
    :class="`container ${isOpen && 'container_open'}`"
  >
    <form class="form" @onSubmit="handleFormSubmit">
      <Text :weight="800" :size="31" uppercase align='left'>
        задайте параметры
      </Text>

      <Select
        title="шрифт"
        :options="fontFamilyOptions"
        :selected="selectedOptions.fontFamily"
        @onChange="handleSetFont"
      />

      <RadioGroup
        name="FontSize"
        title="размер шрифта"
        :options="fontSizeOptions"
        :selected="selectedOptions.fontSize"
        @onChange="handleSetFontSize"
      />

      <Select
        title="цвет шрифта"
        :options="fontColors"
        :selected="selectedOptions.fontColor"
        @onChange="handleSetFontColor"
      />

      <Separator />

      <Select
        title="цвет фона"
        :options="backgroundColors"
        :selected="selectedOptions.bgColor"
        @onChange="handleSetBgColor"
      />

      <Select
        title="ширина контента"
        :options="contentWidthArr"
        :selected="selectedOptions.containerWidth"
        @onChange="handleSetContainerWidth"
      />

      <div class="bottomContainer">
        <Button title='Сбросить' type='apply' @onClick={handleFormReset} />
        <Button title='Применить' type='clear' />
      </div>
    </form>
  </aside>
</template>

<style scoped>
.container {
	position: fixed;
	left: 0;
	width: 616px;
	height: 100%;
	overflow: scroll;
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
	width: 616px;
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
