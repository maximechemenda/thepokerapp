// General
import React from 'react'

export const FormBase : React.FC<{
    children: React.ReactNode
}> = props  =>
    <div className="bg-sub_background rounded-lg px-7 py-7">
        {props.children}
    </div>