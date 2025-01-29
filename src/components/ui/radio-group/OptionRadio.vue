<script setup lang="ts">
import Text from '../text/Text.vue';
import type { OptionType } from '../../../utils/data/articleProps';

interface IOptionProps {
	value: OptionType['value'],
	title: OptionType['title'],
	selected: OptionType,
	groupName: string,
	option: OptionType
}

const props = defineProps<IOptionProps>();
const emit = defineEmits(['onChange']);
const isChecked = props.value === props.selected.title;
const inputId = `${props.groupName}_radio_item_with_value__${props.value}`;
const handleChange = () => emit('onChange', props.option);
</script>

<template>
  <div
    class="item"
    :key="value"
    :data-checked="isChecked"
    :tabIndex="0"
  >
    <input
      class="input"
      type='radio'
      :name="groupName"
      :id="inputId"
      :value="value"
      @change="handleChange"
      :tabIndex="-1"
    />
    <label class="label" :htmlFor="inputId">
      <Text :size="18" uppercase>
        {{ title }}
      </Text>
    </label>
  </div>
</template>

<style scoped lang="scss">
.item {
	position: relative;
	display: block;
}

.input {
	position: absolute;
	width: 0;
	height: 0;
	margin: 0;
	padding: 0;
	opacity: 0;
}

.label {
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 124px;
	height: 35px;
	text-align: center;
	border-right: 1px solid #000000;
	cursor: pointer;
}

.label:hover {
	background-color: #ffedab;
}

.item[data-checked='true'] .label {
	background: var(--gold, #ffc802);
}

.item:last-child .label {
	border: none;
}

.item[data-checked='true'] .label:hover {
	background: var(--gold, #ffc802);
}
</style>
