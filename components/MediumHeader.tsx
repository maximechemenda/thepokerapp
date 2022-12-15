// General
import React from 'react'

export const MediumHeader : React.FC<{
    title: string;
    paddingL?: string;
}> = ({
    title,
    paddingL="pl-0"
}) => (
    <p className={`text-header_color uppercase ${paddingL}`}>{title}</p>
)