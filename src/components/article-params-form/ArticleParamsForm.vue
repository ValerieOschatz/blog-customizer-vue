<script setup lang="ts">
import { ref } from 'vue';
import ArrowButton from '../ui/arrow-button/ArrowButton.vue';
import Text from '../ui/text/Text.vue';

const isOpen = ref(false);

const handleClickArrow = () => {
  isOpen.value = !isOpen.value;
}

const handleFormSubmit = () => {}
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

      <!-- <Select
        title={'шрифт'}
        options={fontFamilyOptions}
        selected={selectedOptions.fontFamilyOption}
        onChange={(font) => {
          setSelectedOptions({
            ...selectedOptions,
            fontFamilyOption: font,
          });
        }}
      /> -->

      <!-- <RadioGroup
        name={'FontSize'}
        title={'размер шрифта'}
        options={fontSizeOptions}
        selected={selectedOptions.fontSizeOption}
        onChange={(fontSizeOption) => {
          setSelectedOptions({
            ...selectedOptions,
            fontSizeOption: fontSizeOption,
          });
        }}
      /> -->

      <!-- <Select
        title={'цвет шрифта'}
        options={fontColors}
        selected={selectedOptions.fontColor}
        onChange={(fontColor) => {
          setSelectedOptions({
            ...selectedOptions,
            fontColor: fontColor,
          });
        }}
      /> -->

      <!-- <Separator /> -->

      <!-- <Select
        title={'цвет фона'}
        options={backgroundColors}
        selected={selectedOptions.backgroundColor}
        onChange={(backgroundColor) => {
          setSelectedOptions({
            ...selectedOptions,
            backgroundColor: backgroundColor,
          });
        }}
      /> -->

      <!-- <Select
        title={'ширина контента'}
        options={contentWidthArr}
        selected={selectedOptions.contentWidth}
        onChange={(contentWidth) => {
          setSelectedOptions({
            ...selectedOptions,
            contentWidth: contentWidth,
          });
        }}
      /> -->

      <div class="bottomContainer">
        <!-- <Button title='Сбросить' type='apply' onClick={handleFormReset} />
        <Button title='Применить' type='clear' /> -->
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
