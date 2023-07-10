import React, { useState } from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { DiGoogleAnalytics } from 'react-icons/di'
import { IoPersonSharp } from 'react-icons/io5'
import { MdTravelExplore } from 'react-icons/md'

const Sidebar = () => {
  const [pages, setPages] = useState([
    { title: 'Home', page: 'home' },
    { title: 'Job Invites', page: 'jobinvites' },
    { title: 'Analytics', page: 'analytics' },
    { title: 'My Profile', page: 'profile' },
    { title: 'Explore', page: 'explore' },
  ])
  const [currPage, setCurrPage] = useState('home')
  return (
    <div className="w-[18%]">
      {/* pages */}
      <div className="flex flex-col gap-2 justify-center items-start py-3 font-normal pb-5 border-b border-b-slate-400">
        {pages.map((page, i) => {
          return (
            <div
              key={i}
              className={`flex items-center gap-x-3 p-2 rounded-md mx-2 w-[90%] ${
                currPage === page.page ? 'border border-slate-400 bg-[#eceef7a5]' : 'opacity-60'
              }`}
            >
              <span>
                {page.page === 'home' ? (
                  <BsFillGridFill className='text-[#6964ff] text-base' />
                ) : page.page === 'jobinvites' ? (
                  <HiMail className='text-[#6964ff] text-base' />
                ) : page.page === 'analytics' ? (
                  <DiGoogleAnalytics className='text-[#6964ff] text-base' />
                ) : page.page === 'profile' ? (
                  <IoPersonSharp className='text-[#6964ff] text-base' />
                ) : page.page === 'explore' ? (
                  <MdTravelExplore className='text-[#6964ff] text-base' />
                ) : (
                  <></>
                )}
              </span>
              <span>{page.title}</span>
            </div>
          )
        })}
      </div>
      {/* community feeds */}
      <div>
        <h2> Community Feeds</h2>
      </div>
    </div>
  )
}

export default Sidebar
