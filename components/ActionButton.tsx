// General
import React, { ButtonHTMLAttributes } from 'react';

// Props for button
export interface ActionButtonProps extends ButtonHTMLAttributes<any> {}

// Button calling for action (such as "Create Event" button)
export const ActionButton : React.FC<ActionButtonProps> = ({
    children, 
    className, 
    ...props}) => (
    <button 
        className={`px-6 py-3 bg-action_strong rounded-lg ${className ?? ''}`}
        {...props}
    >
        <p className="font-bold">
            {children}
        </p>
    </button>
)
   