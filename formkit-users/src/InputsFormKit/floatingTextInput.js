import {
    outer,
    inner,
    wrapper,
    help,
    label,
    message,
    messages,
    icon,
    suffix,
    prefix,
    textInput,
    $attrs,
    $if,
    $for,
    $extend,
    $root,
} from '@formkit/inputs'

/**
 * Input definition for a text
 * @public
 */
export const floatingTextInput = {
    schema: outer(
        wrapper(
            inner(
                icon('prefix','label'),
                prefix(),
                $attrs(
                    {
                        class: '$classes.inputFloating',
                        type: '$typeInput'
                    },
                    textInput(),
                ),
                $attrs(
                    {
                        class: {
                            
                            'formkit-label-floating': true,
                            'up-label': '$_value !== "" && $_value !== undefined'
                        },
                        for: '$id'
                    },
                    label('$label')
                ),
                suffix(),
                icon('suffix')
            )
        ),
        help('$help'),
        messages(
            message('$message.value')
        )
    ),
    type: '$typeInput',
    props: ['typeInput', 'topLabel'],
    features: [],
}