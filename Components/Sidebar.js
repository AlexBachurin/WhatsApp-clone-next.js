import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { SearchOutlined } from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className='flex-[0.35] flex-col bg-testColor px-3 py-2  md:px-5 md:py-3 lg:px-10 lg:py-5'>
            {/* Sidebar Header */}
            <header className='flex justify-between text-mainBg border-b-2 pb-2 border-mainBg'>
                <Avatar className='text-[30px]' src='https://www.kindpng.com/picc/m/118-1189122_anime-stupid-happy-face-png-download-kagura-gintama.png' />
                <div className="flex items-center gap-0 md:gap-2 lg:gap-3 justify-center cursor-pointer">

                    <IconButton className='text-mainBg p-0'>
                        <ChatIcon />
                    </IconButton>
                    <IconButton className='text-mainBg p-0'>
                        <DonutLargeIcon />
                    </IconButton>
                </div>
            </header>
            {/* Search Box */}
            <div className='bg-searchBg mt-2'>
                <div className='flex items-center bg-white w-full h-full '>
                    <SearchOutlined className='pl-1' />
                    <input className='w-full pl-2 p-2 rounded outline-none' type="text" placeholder='search or start a new chat' />
                </div>
            </div>

            {/* Chat Section */}
            <div>

            </div>
        </div>
    )
}

export default Sidebar