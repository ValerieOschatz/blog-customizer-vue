<script setup lang="ts">
import Text from '../text/Text.vue';
import Option from './OptionRadio.vue';
import type { OptionType } from '../../../utils/data/articleProps';

interface IRadioGroupProps {
	name: string,
	options: OptionType[],
	selected: OptionType,
	title: string
}

defineProps<IRadioGroupProps>();
const emit = defineEmits(['onChange']);
const handleChange = (option: OptionType) => emit('onChange', option);
</script>

<template>
  <div class="containerRadioGroup">
    <Text v-if="title" :size="12" :weight="800" uppercase>
      {{ title }}
    </Text>

    <div class="group">
      <Option
        v-for="option in options"
        :key="option.value"
        :groupName="name"
        :value="option.value"
        :title="option.title"
        :selected="selected"
        @onChange="() => handleChange(option)"
        :option="option"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.group {
	display: inline-flex;
	box-sizing: border-box;
	max-width: fit-content;
	border: 1px solid #000000;
}

.containerRadioGroup {
	display: flex;
	flex-direction: column;
	row-gap: 4px;
}
</style>
