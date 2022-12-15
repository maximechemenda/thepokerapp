// General
import React, { ButtonHTMLAttributes } from 'react';

// Props for button
export interface ActionButtonProps extends ButtonHTMLAttributes<any> {
    variant?: string;
    className?: string;
    children: React.ReactNode;
}

// Button calling for action (such as "Create Event" button)
export const ActionButton : React.FC<ActionButtonProps> = ({
    variant,
    className,
    children, 
    ...props}) => (
    <button 
        className={`px-6 py-3 ${(variant == "primary") ? "bg-action_strong" : "bg-secondary-grey"} rounded-lg ${className ?? ''}`}
        {...props}
    >
        <p className={`font-bold ${(variant == "primary") ? "text-black" : "text-white"}`}>
            {children}
        </p>
    </button>
)
   