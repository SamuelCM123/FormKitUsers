import { ref } from 'vue';
import { createInput } from "@formkit/vue"

export const useInputsSchema = () => {

    // CREAR UN INPUT DESDE 0, SIN INCLUIR OUTER,INNER,HELP,LABEL
    const inputFloatingLabel = {
        type: 'input',
        props: ['tipe'],
        schema: [
            {
                $el: 'div',
                attrs: {
                    class: '$classes.inputWrapper',
                },
                children: [
                    {
                        $el:'input',
                        attrs:{
                            type: '$tipe',
                            class: '$classes.input'
                        },
                    },
                    {
                        $el: 'label',
                        attrs: {
                            class:'$classes.label',
                        },
                        children: '$label'
                    }
                ]
            },
        ],
    }

    // CREAR UN INPUT QUE INCLUYE OUTER,INNER,HELP,LABEL(NOMAS SIRVE PARA CREAR ELEMENTOS Y DEFINIR QUE SE QUIERE TENER ADENTRO DEL INNER)
    const myInput = createInput(
        {
            $el: 'div',
            attrs: {
                class: '$classes.inputWrapper',
            },
            children: [
                {
                    $el:'input',
                    attrs:{
                        type: '$tipe',
                        class: '$classes.input',
                        placeholder: '$placeholder'
                    },
                },
            ]
        },
        {
            props: ['tipe']
        }
    )

    return {
        //* Properties
        
        //* Methods
        inputFloatingLabel, myInput
    }

}