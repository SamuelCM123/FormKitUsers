<script setup>
import {useInputVue} from '../composables/useInputVue'

    const {checkIndex,handleInput} = useInputVue(props); 
    /**
     * Definicion de props para tomar el objeto "context" que se recibe 
     * automaticamente por el uso de librerias o paqueterias de "formkit"
     */
    const props = defineProps({
        context: Object
    })
</script>

<template>
    <div class="container-wrapper">
        <input 
            :id="props.context.id"
            :type="props.context.typeInput"
            class="input-text"
            @input="handleInput" 
            :placeholder="props.context.placeholder"
            :value="props.context._value"
        />
        <label 
            :for="props.context.id" 
            class="label-input"
            :class="checkIndex"
        >{{ props.context.topLabel }}</label>
    </div>
</template>

<style scoped>
    .container-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 40px;
        padding: .5px .5px;
        margin: 0;
        z-index: 0;
    }

    .input-text{
        padding: 5px 5px;
        outline: none;
        border: none;
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }

    .label-input{
        background-color: #fff;
        color: #bababa;
        cursor:text;
        outline: none;
        padding: 0px 5px;
        position: absolute;
        left: 10px;
        transition: all .3s ease;
        user-select: none;
    }

    .up-label{
        transition: all .3s ease;
        color: black;
        transform: translateY(-120%);
    }

    .input-text:focus + .label-input{
        color: black;
        transform: translateY(-120%);
        transition: all .3s ease;
        transform: translateY(-120%);
    }
    
</style>