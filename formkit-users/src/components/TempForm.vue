<script setup>
import { computed } from "vue"
import {useInputsSchema} from '../composables/useInputsSchema'

    const {inputFloatingLabel,myInput} = useInputsSchema();

</script>

<template>
    <div class="FormTemp-container">
        <label for="" class="title-form">
            Registro de usuario(Schema, restructure inputs)
        </label>
        <!-- DESARROLLO DE FORMULARIO PARA USUARIOS PRUEBA -->
        <FormKit
            type="form"
        >
            <!--* CREAR INPUT DESDE 0 -->
            <!-- <FormKit 
                :type="inputFloatingLabel" 
                tipe="email"
                :class="checkInput"
                label="Correo Electronico"
                placeholder="Contraseña"
                validation="required|email"
                help="Escribe tu correo electronico"
                v-model="correo"
            /> -->
            <!-- <FormKit 
                :type="inputFloatingLabel"
                tipe="password" 
                :class="checkInput"
                label="Contraseña" 
                placeholder="Contraseña"
                validation="required|min:6"
                help="Escribe tu contraseña"
            /> -->

            <!--* CREAR UN INPUT CON "createInput()" (Schema) -->
            <FormKit 
                :type="myInput"
                id="passwordSchema"
                name="passwordSchema"
                tipe="password" 
                label="Contraseña"
                help="Ingrese su contraseña"
                validation="required"
                validation-label="Datos de contraseña"
                prefix-icon="password"
            />

            <!--* INPUT IMPORTADO QUE SE CREO CON REESTRUCTURACION DEL INPUT(Schema)  -->
            <FormKit
                type="floatingTextInput"
                id="email-schema"
                name="email-schema"
                typeInput="email"
                label="Correo Electronico"
                help="Ingrese su correo electronico"
                validation="required"
                prefix-icon="email"
            />
            <FormKit
                type="floatingTextInput"
                id="password-schema"
                name="password-schema"
                typeInput="password"
                label="Contraseña"
                help="Ingrese su contraseña"
                validation="required"
                prefix-icon="password"
            />
        </FormKit>
    </div>
</template>

<style scoped>
    .FormTemp-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 2px  rgba(99, 99, 99, .2);
        width: 400px;
        height: 700px;
    }

    .formkit-form{
        width: 80%;
    }
</style>