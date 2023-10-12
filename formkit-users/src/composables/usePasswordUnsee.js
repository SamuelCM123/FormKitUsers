import { ref } from 'vue';

export const usePasswordUnsee = () => {
    
    /**
     * Toma referencia del Form para determinar el submit
     * @type {Object}
     */
    const Form = ref();

    /**
     * Determina si los props cuentan con un suffixIcon y lo cambia por otro y viceversa.
     * @param {Object} node 
     */
    const passwordUnsee = (node) => {
        node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
        node.props.typeInput = node.props.typeInput === 'password' ? 'text' : 'password'
    }

    /**
     * Función para mandar submit de forma programada
     */
    const submitForm = ()=>{
        const node = Form.value.node
        console.log('node:',node.value);
        node.submit()
    }

    return {
        //* Properties
        Form,

        //* Methods
        passwordUnsee,submitForm
    }

}