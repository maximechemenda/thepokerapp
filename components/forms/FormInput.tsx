import React from 'react'

interface FormInputProps {
    title: string;
    placeholder: string;
    type: string;
    value: string | number | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput: React.FC<FormInputProps> = props => {
    return (
        <div className="grid">
            <p className="text-sm text-grey">
                {props.title}
            </p>    

            <input 
                type={props.type}
                placeholder={props.placeholder} 
                value={props.value}
                onChange={(e) => props.handleChange(e)}
                className="text-white px-4 py-2 rounded-md bg-sub_background border-solid border-[1px] border-grey"
                />
        </div>  
    )
}