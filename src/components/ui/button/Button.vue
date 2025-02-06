<script setup lang="ts">
import Text from '../text/Text.vue';

interface IButtonProps {
	title: string,
	htmlType?: "button" | "submit" | "reset" | undefined,
	type: 'button' | 'submit';
}

defineProps<IButtonProps>();
const emit = defineEmits(['onClick']);

const handleClick = (evt: MouseEvent) => {
  evt.preventDefault();
  emit('onClick');
}
</script>

<template>
  <button
    :class="`
      button
      ${type === 'submit' && 'button_apply'}
      ${type === 'button' && 'button_clear'}
    `"
    :type="htmlType"
    @click="handleClick"
  >
    <Text :weight="800" uppercase>
      {{ title }}
    </Text>
  </button>
</template>

<style scoped lang="scss">
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 210px;
	height: 50px;
	text-align: center;
	border: 1px solid #000000;
	cursor: pointer;
}

.button_apply {
	background-color: #ffc802;
}

.button_clear {
	background-color: white;
}

.button_apply:hover {
	background-color: #ffedab;
}

.button_clear:hover {
	background-color: #000000;
}

.button_clear:hover div {
	color: white;
}
</style>
