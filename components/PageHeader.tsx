// General
import React from 'react'

interface PageHeaderProps {
    title: string;
}

// Page header, such as "poker tournaments looking for you"
export const PageHeader : React.FC<PageHeaderProps> = ({
    title
}) =>
    <div>
        <p className="text-xl lg:text-4xl text-white font-bold mb-10">
            {title}
        </p>
    </div>