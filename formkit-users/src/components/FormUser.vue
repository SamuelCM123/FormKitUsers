<script setup>
    import { onMounted } from 'vue';
    import {usePasswordUnsee} from '../composables/usePasswordUnsee'
    import {useModuleApi} from '../Services/use.module.api'

    const { passwordUnsee, submitForm, Form } = usePasswordUnsee();
    const {moduleApi} = useModuleApi();

        const dataSubmit = (value) => {
            const valores = {
                firstName: value.name,
                password: value.password,
                maidenName: value.email,
                age: value.password_confirm
            }

            console.log(valores);
            postUsers(valores)
        }

        const postUsers = async (value) =>{
                const user = await moduleApi.post('/users/add',value)
                console.log('user:',user);   
        }

        onMounted(async()=>{
                const user = await moduleApi.get('/users')
                console.log('getUser',user);
        })
            
</script>

<template>
    <div class="form-container">
        <label class="title-form">
            REGISTRO DE USUARIO(Vue component)
        </label>
        <FormKit
            ref="Form" 
            type="form"
            @submit="dataSubmit"
            incomplete-message="Necesitan llenarse todos los campos de manera correcta"
            #default="{ value, state:{ valid } }"
            :value="{ email: 'Samuel@hotmail.com' , name: 'Samuel Calderon' ,password: 'asd123', password_confirm: 'asd123'}"
        >

            <FormKit 
                type="inputPlaceHolder"
                typeInput="email"
                id="email"
                name="email"
                topLabel="Correo Eléctronico"
                help="Escribe tu correo eléctronico"
                validation="required|email"
                prefix-icon="email"
                :validation-messages="{
                    required: 'Es necesario llenar el campo de correo',
                    email: 'Tiene que cumplir con las caracteristicas de un correo'
                }"
            />

            <FormKit 
                type="inputPlaceHolder"
                typeInput="text"
                id="name"
                name="name"
                topLabel="Nombre Completo"
                help="Escribe tu nombre completo"
                validation="required"
                prefix-icon="avatarMan"
                :validation-messages="{
                    required: 'Es necesario llenar el campo de correo',
                    email: 'Tiene que cumplir con las caracteristicas de un correo'
                }"
            />

            <FormKit 
                type="inputPlaceHolder"
                typeInput="password"
                id="password"
                name="password"
                topLabel="Contraseña"
                help="Escribe tu correo eléctronico"
                prefix-icon="password"
                validation="required|?length:6|matches:/[^a-zA-Z]/"
                :validation-messages="{
                    required: 'Es necesario llenar el campo de correo',
                    min: 'Tiene que cumplir con minimo 6 caracteres'
                }"
                validation-label="Confirmación de contraseña"
                suffix-icon="eyeClosed"
                @suffix-icon-click="passwordUnsee"
            />
            <FormKit 
                type="inputPlaceHolder"
                typeInput="password"
                id="password_confirm"
                name="password_confirm"
                topLabel="Confirmar Contraseña"
                help="Escribe tu confirmación de contraseña"
                prefix-icon="password"
                validation="required|confirm|length:6|matches:/[^a-zA-Z]/"
                :validation-messages="{
                    required: 'Es necesario llenar el campo de correo',
                    min: 'Tiene que cumplir con minimo 6 caracteres',
                    confirm: 'La contraseña de confirmación no coincide'
                }"
                validation-label="Confirmación de contraseña"
                suffix-icon="eyeClosed"
                @suffix-icon-click="passwordUnsee"
            />
            <pre>{{ value }}</pre>

            <FormKit type="submit" :disabled="!valid" />
        </FormKit>

        <button @click="submitForm">Submit</button>
    </div>
</template>

<style scoped>
    .form-container{
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