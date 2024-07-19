import { useState } from 'react';

//recibe un estado inicial
export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    //basado en el estado inicial 
    //regresa todos los campos y las
    //funciones para controlar el formulario
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}