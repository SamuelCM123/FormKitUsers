import { createInput, defaultConfig } from '@formkit/vue'
import { es } from '@formkit/i18n'

// Importar input para Formkit schema
import { floatingTextInput } from './InputsFormKit/floatingTextInput'

// Importar input para Formkit vue component
import floatingTextInputVue from './InputsFormKit/floatingTextInputVue.vue'

const config = defaultConfig({
    locales: { es },
    locale: 'es',
    theme:'genesis',// Manera #1 de aplicar estilos genesis
    inputs:{
        floatingTextInput,
        inputPlaceHolder: createInput(floatingTextInputVue,{
            props: ['typeInput','topLabel','placeholder']
        })
    }
})

export default config