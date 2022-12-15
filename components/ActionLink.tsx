import React, { ButtonHTMLAttributes } from 'react';

export interface ActionLinkProps extends ButtonHTMLAttributes<any> {}

// Link without background color. Can be used for example for the "sign out" action
export const ActionLink : React.FC<ActionLinkProps> = ({children, 
    className,
    ...props}) => (
    <a {...props}>
        <p className={`text-action_strong underline ${className ?? ''}`}>
            {children}
        </p>
    </a>
)
   