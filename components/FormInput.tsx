import React from 'react'

// TODO(MC): Fix these props: fix the types (not use "any") and maybe remove the "type" and "value" arguments as 
// I don't think they're useful: they're handled by Formik
interface FormInputProps {
    title: string;
    type: string;
    value: string | number | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    field: any;
    form: any;
    error: any;
    touched: any;
    [key: string]: any;
}

export const FormInput: React.FC<FormInputProps> = ({
    title,
    type, 
    value,
    field,
    form,
    error,
    touched,
    ...props
}) => {
    return (
        <div className="grid">
            <p className="text-sm text-grey">
                {title}
            </p>    

            <input 
                {...field}
                {...props}
                type={props.type}
                className="text-white text-sm px-4 py-2 rounded-md bg-sub_background border-solid border-[1px] border-grey"
                />
                {error && touched && (
                <p className="text-xs text-red">{error}</p>
                )}
        </div>  
    )
}