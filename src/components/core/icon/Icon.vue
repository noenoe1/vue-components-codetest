<template>

    <div class="flex space-x-2">
        <svg :width="width" :height="height" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :d="path" :stroke="textColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" :fill="fillColor"/>
        </svg>
    </div>
    
</template>

<script lang='js'>
import { defineComponent } from 'vue';
import icons from './Icons.json';

export default defineComponent({
    name : 'TodoIcon',
    props: {
        name: String,
        width : {
            type: String,               
            default: '22',
        },
        height : {
            type: String,               
            default: '17',
        },
        viewBox : {
            type: String,               
            default: '0 0 22 17',
        },
        textColor : {
            type: String,               
            default: 'black',            
        },
        fillColor : {
            type: String,               
            default: '',            
        }        
    },
    computed: {
        path() {
            return icons[this.name];
        },
    },
});
</script>
