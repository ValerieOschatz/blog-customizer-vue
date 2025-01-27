<script setup lang="ts">
import arrow from '../../../assets/images/arrow.svg';

export type OnClick = () => void;

interface IArrowButtonProps {
	isOpen: boolean
}

const props = defineProps<IArrowButtonProps>();
const emit = defineEmits(['onClick']);
</script>

<template>
  <div
    role='button'
    aria-label='Открыть/Закрыть форму параметров статьи'
    tabIndex="0"
    :class="`containerBtn ${props.isOpen && 'containerBtn_open'}`"
    @click="$emit('onClick')"
  >
    <img
      :src="arrow"
      alt='иконка стрелочки'
      :class="`arrow ${props.isOpen && 'arrow_open'}`"
    />
  </div>
</template>

<style scoped>
.containerBtn {
	position: fixed;
	top: 31px;
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 100px;
	height: 100px;
	background-color: #000000;
	border-right: 1px;
	transition: transform 0.5s ease;
}

.containerBtn:hover {
	background-color: #ffc802;
}

.containerBtn:active {
	background-color: #787878;
}

.containerBtn_open {
	transform: translate(616px);
}

.arrow {
	flex-shrink: 0;
	width: 48px;
	height: 48px;
	transform: rotate(180deg);
	transition: transform 0.5s ease;
}

.arrow_open {
	transform: rotate(0deg);
}
</style>
