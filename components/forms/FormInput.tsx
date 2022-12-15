import React from 'react'

interface FormInputProps {
    title: string;
    placeholder: string;
    type: string;
    value: string;
    // handleChange: (props: string) => (e: React.ChangeEvent<HTMLInputElement>)
}

export const FormInput: React.FC<FormInputProps> = props => {
    const [value, setValue] = React.useState('')

    const handleChange = (props: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <p className="text-sm text-grey">
                {props.title}
            </p>    

            <input 
                type={props.type}
                placeholder={props.placeholder} 
                value={value}
                onChange={handleChange(value)} />
        </div>  
    )
}