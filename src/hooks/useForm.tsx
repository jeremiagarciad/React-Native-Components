
import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [formValue, setFormValue] = useState( initState );

    const onChange = <K extends Object>( value: K, field: keyof T ) => {
        setFormValue({
            ...formValue,
            [field]: value,
        });
    }

    return {
        ...formValue,
        formValue,
        onChange,
    }

}