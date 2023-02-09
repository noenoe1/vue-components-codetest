<template>
    <button type="submit" :class="disabled ? [rounded, colors, padding, border, shadow, textSize , justify, 'cursor-not-allowed opacity-30'] : [rounded, colors, padding, border, shadow, textSize, hover, justify]"
    class="font-semibold text-base w-[130px] " >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ButtonText",
    props: {
        rounded : {
            type: String,
            default: 'rounded'
        },
        colors : {
            type: String,
            default: 'bg-primary-30'
        },
        padding : {
            type: String,
            default: 'py-1.5 px-3'
        },
        border : {
            type: String,
            default: 'border-none'
        },
        shadow : {
            type: String,
            default: 'shadow-none'
        },
        textSize : {
            type: String,
            default: 'text-sm '
        },
        justify : {
            type: String,
            default: 'flex justify-center items-center '
        },
        hover : {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
    }
})
</script>