// General
import React, { ButtonHTMLAttributes } from 'react'

// Assets 
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';

interface MenuSectionProps extends ButtonHTMLAttributes<any> {
    active?: boolean,
    paddingL?: string,
    title: string;
}

const getIcon = (title: string, active: boolean | undefined) => {
    switch(title) {
        // Activities Icons
        case "Poker":
            return (
                <AttachMoneyOutlinedIcon className={`${active ? "text-black" : "text-white"}`}/>
            )
        case "Football":
            return (
                <SportsSoccerIcon className={`${active ? "text-black" : "text-white"}`}/>
            )
        case "Tennis":
            return (
                <SportsTennisIcon className={`${active ? "text-black" : "text-white"}`}/>
            )
        case "Table Tennis":
            return (
                <TableRestaurantIcon className={`${active ? "text-black" : "text-white"}`}/>
            )
        case "Techno":
            return (
                <MusicNoteIcon className={`${active ? "text-black" : "text-white"}`}/>
            )

        // Actions Icons
        case "Explore Events":
            return (
                <SearchOutlinedIcon className={`${active ? "text-black" : "text-white"}`}/>
            )

        case "Create Event":
            return (
                <AddOutlinedIcon className={`${active ? "text-black" : "text-white"}`}/>
            )

        case "Past Events":
            return (
                <UndoOutlinedIcon className={`${active ? "text-black" : "text-white"}`}/>
            )
        default:
          console.log("ERROR: no icon was returned")
      }
    
}

export const MenuSection : React.FC<MenuSectionProps> = ({
    active,
    paddingL="pl-10",
    className,
    title,
    ...props
}) =>
    <div className={`${className ?? ''} ${active ? "bg-action_strong" : "bg-sub_background"} py-4 lg:py-6 ${paddingL}`} {...props}>
        <div className="flex">
            <div>
                {getIcon(title, active)}
            </div>

            <div className="ml-2 flex items-end">
                <p className={`font-bold ${active ? "text-black" : "text-white"}`}>
                    {title}
                </p>
            </div>
        </div>
    </div>