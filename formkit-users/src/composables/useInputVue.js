import { ref } from 'vue';
import { computed } from "vue"

export const useInputVue = (props) => {

    /**
     * Funcion que agrega o quita clase al label dependiendo del valor del input
     */
    const checkIndex = computed(()=>{
        if(props.context.value === "" || props.context.value === undefined || props.context.value === "null"){
            return ''
        }
        else{
            return 'up-label'
        }
    })

    /**
     * Asigna el valor al input que lo vincula con el objeto "context".
     * @param {Object} e -Evento handler para darle asignarle valor al input
     */
    function handleInput(e) {
        props.context.node.input(e.target.value)
    }

    return {
        //* Properties
        
        //* Methods
        checkIndex, handleInput
    }

}