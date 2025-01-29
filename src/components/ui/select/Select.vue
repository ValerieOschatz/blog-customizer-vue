<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import arrowDown from '../../../assets/images/arrow-down.svg';
import Text from '../text/Text.vue';
import Option from './Option.vue';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import type { OptionType } from '../../../utils/data/articleProps';

interface ISelectProps {
	selected: OptionType | null,
	options: OptionType[],
	placeholder?: string,
	title?: string
}

const props = defineProps<ISelectProps>();
const emit = defineEmits(['onChange']);
const isOpen = ref(false);
const optionClassName = props.selected?.optionClassName ?? '';

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
				:class="`placeholder ${optionClassName}`"
        data-status="status"
        :data-selected="!!selected?.value"
        @click="handlePlaceHolderClick"
        role='button'
        :tabIndex="0"
			>
        <Text
          :family="isFontFamilyClass(selected?.className) ? selected?.className : undefined"
				>
          {{ selected?.title || placeholder }}
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
</style>
