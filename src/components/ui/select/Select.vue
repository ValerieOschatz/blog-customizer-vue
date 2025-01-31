<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import arrowDown from '../../../assets/images/arrow-down.svg';
import Text from '../text/Text.vue';
import Option from './Option.vue';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import type { OptionType } from '../../../utils/data/articleProps';

interface ISelectProps {
	selected: OptionType,
	options: OptionType[],
	placeholder?: string,
	title?: string
}

defineProps<ISelectProps>();
const emit = defineEmits(['onChange']);
const isOpen = ref(false);

const handlePlaceHolderClick = () => {
	isOpen.value = !isOpen.value;
}

const handleOptionClick = (option: OptionType) => {
	isOpen.value = false;
	emit('onChange', option);
}

const handleOutsideClick = (evt: MouseEvent) => {
	if (!isOpen.value) return;
	const target = evt.target as Element;

	if (!target.closest('.selectWrapper')) {
		isOpen.value = false;
	}
}

onMounted(() => {
  window.addEventListener('mousedown', handleOutsideClick);
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', handleOutsideClick);
})
</script>

<template>
  <div class="containerSelect">
    <Text v-if="title" :size="12" :weight="800" uppercase>
      {{ title }}
    </Text>

    <div
      class="selectWrapper"
      :data-is-active="isOpen"
      data-testid='selectWrapper'
    >
      <img :src="arrowDown" alt='иконка стрелочки' class="arrowSelect" />

      <div
				:class="`placeholder ${selected.optionClassName}`"
        :data-selected="!!selected.value"
        @click="handlePlaceHolderClick"
        role='button'
        :tabIndex="0"
			>
        <Text
          :family="isFontFamilyClass(selected.className) ? selected.className : undefined"
				>
          {{ selected.title }}
        </Text>
      </div>

			<ul v-if="isOpen" class="select" data-testid='selectDropdown'>
				<Option
					v-for="option in options.filter((option) => selected?.value !== option.value)"
					:key="option.value"
					:option="option"
					@onClick="() => handleOptionClick(option)"
				/>
			</ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selectWrapper {
	position: relative;
}

.containerSelect {
	display: flex;
	flex-direction: column;
	row-gap: 4px;
}

.arrowSelect {
	position: absolute;
	top: 50%;
	right: 6px;
	width: 24px;
	margin-top: -12px;
	transition: transform 0.2s ease-in-out, margin-top 0.2s ease-in-out;
}

.placeholder {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	padding: 15px 17px;
	background: rgb(255 255 255);
	outline: 1px solid #000000;
	cursor: pointer;
}

.placeholder[data-selected='true'] {
	color: rgb(0 0 0);
}

.selectWrapper[data-is-active='true'] .arrowSelect {
	margin-top: -14px;
	transform: rotate(180deg);
}

.selectWrapper[data-is-active='true'] .placeholder {
	outline: 3px solid #000000;
}

.selectWrapper:not([data-is-active='true'])
	.placeholder:not([data-status='invalid']):hover {
	outline: 1px solid #ffc802;
}

.select {
	position: absolute;
	z-index: 10;
	display: grid;
	box-sizing: border-box;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	background-color: rgb(255 255 255 / 100%);
	border-top: none;
	outline: 3px solid #000000;
}

.option {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 30px;
	padding: 15px 17px;
	background-color: rgb(255 255 255 / 100%);
	border: 1px;
	cursor: pointer;
}

.option[aria-selected='true'] {
	background-color: rgb(0 0 0 / 5%);
}

.option:hover {
	background: var(--grey, #c4c4c4);
}

@mixin option-color-before {
	content: '';
	width: 35px;
	height: 35px;
	margin-right: 10px;
}

.option-black::before {
  @include option-color-before;
	background-color: #000000;
}

@mixin option-color-after {
	content: '';
	position: absolute;
	left: 26px;
	width: 17px;
	height: 17px;
	border-radius: 100%;
}

.option-black[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-white::before {
	@include option-color-before;
	box-sizing: border-box;
	background-color: #ffffff;
	border: 1px solid #000000;
}

.option-white[data-selected='true']::after {
	@include option-color-after;
	background-color: #000000;
}

.option-gray::before {
	@include option-color-before;
	background-color: #c4c4c4;
}

.option-gray[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-pink::before {
	@include option-color-before;
	background-color: #feafe8;
}

.option-pink[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-fuchsia::before {
	@include option-color-before;
	background-color: #fd24af;
}

.option-fuchsia[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-yellow::before {
	@include option-color-before;
	background-color: #ffc802;
}

.option-yellow[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-green::before {
	@include option-color-before;
	background-color: #80d994;
}

.option-green[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-blue::before {
	@include option-color-before;
	background-color: #6fc1fd;
}

.option-blue[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

.option-purple::before {
	@include option-color-before;
	background-color: #5f0dee;
}

.option-purple[data-selected='true']::after {
	@include option-color-after;
	background-color: #ffffff;
}

@mixin option-width-before {
	content: '';
	width: 25px;
	height: 25px;
	margin-right: 10px;
}

.option-wide::before {
	@include option-width-before;
	background-image: url('../../../assets/images/wide.svg');
}

.option-narrow::before {
	@include option-width-before;
	background-image: url('../../../assets/images/narrow.svg');
}
</style>
