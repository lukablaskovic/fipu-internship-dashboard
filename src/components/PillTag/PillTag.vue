<script setup>
import PillTagPlain from "@/components/PillTag/PillTagPlain.vue";
import { colorsBgLight, colorsOutline } from "@/colors.js";
import { computed } from "vue";

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: null,
	},
	small: Boolean,
	outline: Boolean,
});

const componentClass = computed(() => [props.small ? "py-1 px-3" : "py-0.5 px-5 m-1", props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]]);
</script>

<template>
	<PillTagPlain class="rounded-full border" :class="componentClass" :icon="icon" :label="label" :small="small" />
</template>
