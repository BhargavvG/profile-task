import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotificationsNone} from "react-icons/md";
import {GoMail} from "react-icons/go";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full border-b border-b-slate-400">
      <div className="w-full flex items-center justify-between">
        <div className="border border-slate-400 w-[18%] flex items-center justify-center py-4">
          {/* Image */}
          Spehre Logo
        </div>

        <div className="w-auto flex h-auto flex-nowrap justify-end items-center gap-3">
          {/* search bar */}
            <div className="mr-[40px] w-[300px] flex justify-center items-center">
              <input className='w-full rounded-md' type="text" id="search-bar" placeholder="Search" />
              <AiOutlineSearch className='search-icon' />
            </div>
            <div className='p-2 border border-slate-400 rounded-md relative'>
              <MdNotificationsNone className='text-[#6964ff] text-[20px]'/>
              <span className='absolute rounded-full w-2 h-2 bg-red-500 top-1.5 right-2'></span>
            </div>
            <div className='p-2 border border-slate-400 rounded-md'>
              <GoMail className='text-[#6964ff] text-[20px]'/>
            </div>
            <div className='p-2 border border-slate-400 rounded-full'>
              {/* replace span with user profile */}
              <span className=''>....</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
