<template>
    <p class="text-sm font-semibold" :class="textColor === '' ? 'text-secondary-800 dark:text-secondaryDark-white' : textColor">
        <slot />
    </p>
</template>

<script lang="ts">
export default {
    name : 'TextLabel',
    props: {
        textColor : {
            type: String,               
            default: 'text-secondary-800 dark:text-secondaryDark-white',            
        },        
    }
}
</script>