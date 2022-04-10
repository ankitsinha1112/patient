import React from 'react'
import Person from '@mui/icons-material/PersonOutline';
import Calendar from '@mui/icons-material/CalendarMonth';
import Comment from '@mui/icons-material/Comment';
import HomeIcon from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';

export const Sidebardata = [
    {
        title:"Overview",
        icon:<HomeIcon/>,
        link:"/"
    },
    {
        title:"Patient List",
        icon:<Person/>,
        link:"/person"
    },
    {
        title:"Calender",
        icon:<Calendar/>,
        link:"/"
    },
    {
        title:"Messages",
        icon:<Comment/>,
        link:"/"
    },
    {
        title:"Payment Information",
        icon:<Comment/>,
        link:"/"
    },
    {
        title:"Settings",
        icon:<Settings/>,
        link:"/"
    }
]
