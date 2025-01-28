<script setup lang="ts">
import Text from '../text/Text.vue';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import type { OptionType } from '../../../utils/data/articleProps';

interface IOptionProps {
	option: OptionType
}

defineProps<IOptionProps>();
const emit = defineEmits(['onClick']);
</script>

<template>
  <li
    :class="`option ${option.optionClassName || ''}`"
    :value="option.value"
		@click="$emit('onClick', option.value)"
    :tabIndex="0"
  >
    <Text :family="isFontFamilyClass(option.className) ? option.className : undefined">
      {{ option.title }}
    </Text>
  </li>
</template>

<style scoped lang="scss">
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
	background-image: url('../../images/wide.svg');
}

.option-narrow::before {
	@include option-width-before;
	background-image: url('../../images/narrow.svg');
}
</style>
