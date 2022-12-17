// General
import React, { ButtonHTMLAttributes } from 'react'

interface MenuSectionProps extends ButtonHTMLAttributes<any> {
    children: React.ReactNode,
    active?: boolean,
    paddingL?: string,
    className?: string;
}

export const MenuSection : React.FC<MenuSectionProps> = ({
    active,
    paddingL="pl-10",
    children,
    className,
    ...props
}) =>
    <div className={`${className ?? ''} ${active ? "bg-action_strong" : "bg-sub_background"} py-4 lg:py-6 ${paddingL}`} {...props}>
        <p className={`font-bold ${active ? "text-black" : "text-white"}`}>
            {children}
        </p>
    </div>