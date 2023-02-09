<template>
    <button type="submit" :class="disabled ? [rounded, colors, padding, border, shadow, textSize , justify, 'cursor-not-allowed opacity-30'] : [rounded, colors, padding, border, shadow, textSize, hover, focus, cursor, opacity , justify]"
    class="font-medium text-base w-[130px] " >
        <icon :name="iconName"  :textColor="iconColor"  />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from "@/components/core/icon/Icon.vue";

export default defineComponent({
        name: "ButtonIcon",
        components : {
            Icon
        },
        props: {
            iconName: {
                type: String,
                default: '',
            },
            iconColor: {
                type: String,
                default: 'black',
            },
            rounded : {
                type: String,
                default: 'rounded'
            },
            colors : {
                type: String,
                default: 'bg-primary-30 dark:bg-blue-100 text-white dark:text-black'
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
            focus : {
                type: String,
                default: 'focus:outline-none focus:ring focus:ring-blue-300'
            },
            disabled: {
                type: Boolean,
                default: false
            },
        }
})
</script>
