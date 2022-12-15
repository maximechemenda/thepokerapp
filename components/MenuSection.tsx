// General
import React, { ButtonHTMLAttributes } from 'react'

interface MenuSectionProps extends ButtonHTMLAttributes<any> {
    children: React.ReactNode,
    active?: boolean,
    paddingL?: string,
}

export const MenuSection : React.FC<MenuSectionProps> = ({
    active,
    paddingL="pl-10",
    children,
}) =>
    <div className={`cursor-pointer ${active ? "bg-action_strong" : "bg-sub_background"} py-6 ${paddingL}`}>
        <p className={`font-bold ${active ? "text-black" : "text-white"}`}>
            {children}
        </p>
    </div>