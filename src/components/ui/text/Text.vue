<script setup lang="ts">
import type { FontFamiliesClasses } from '../../../utils/data/articleProps'

interface ITextProps {
  tagName?: string,
	dynamic?: boolean,
	size?: 12 | 18 | 22 | 25 | 31 | 38 | 45,
	weight?: 400 | 800,
	fontStyle?: 'italic' | 'normal',
	uppercase?: boolean,
	align?: 'center' | 'left',
	family?: FontFamiliesClasses,
	dynamicLite?: boolean
}

const props = withDefaults(defineProps<ITextProps>(), {
	tagName: 'div',
	size: 18,
	dynamic: false,
	weight: 400,
	fontStyle: 'normal',
	uppercase: false,
	align: 'left',
	family: 'open-sans',
	dynamicLite: false
})
</script>

<template>
<component
	:is="tagName"
	:class="`
		text
		size${props.size}
		${props.dynamic ? 'dynamic' : ''}
		weight${props.weight}
		${props.fontStyle}
		${props.uppercase ? 'uppercase' : ''}
		${props.align}
		${props.family}
		${props.dynamicLite ? 'dynamicLite' : ''}
	`"
>
  <slot></slot>
</component>
</template>

<style scoped lang="scss">
@mixin typography($size: 18, $weight: 400, $family: 'Open Sans') {
	color: #000000;
	font-weight: $weight;
	font-size: $size;
	font-family: $family;
	line-height: normal;
	letter-spacing: 0;
}

.text {
	@include typography(18, 400, 'Open Sans');
}

.open-sans {
	font-family: 'Open Sans', sans-serif;
}

.ubuntu {
	font-family: 'Ubuntu', sans-serif;
}

.cormorant-garamond {
	font-family: 'Cormorant Garamond', sans-serif;
}

.days-one {
	font-family: 'Days One', sans-serif;
}

.merriweather {
	font-family: 'Merriweather', sans-serif;
}

.left {
	text-align: left;
}

.center {
	text-align: center;
}

.uppercase {
	text-transform: uppercase;
}

.size12 {
	font-size: 12px;
}

.size18 {
	font-size: 18px;
}

.size22 {
	font-size: 22px;
}

.size25 {
	font-size: 25px;
}

.size31 {
	font-size: 31px;
}

.size38 {
	font-size: 38px;
}

.size45 {
	font-size: 45px;
}

.weight400 {
	font-weight: 400;
}

.weight800 {
	font-weight: 800;
}

.normal {
	font-style: normal;
}

.italic {
	font-style: italic;
}

// для динамических типографий, используем константы, которые будут меняться

.dynamic {
	color: var(--font-color, #000000);
	font-size: var(--font-size, 18px);
	font-family: var(--font-family, 'Open Sans');
}

// для заголовка и подзаголовка рамер шрифта одинаковый, меняется только цвет и семейство шрифтов

.dynamicLite {
	color: var(--font-color, #000000);
	font-family: var(--font-family, 'Open Sans');
}

</style>
