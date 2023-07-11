import React, { useState } from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { DiGoogleAnalytics } from 'react-icons/di'
import { IoPersonSharp } from 'react-icons/io5'
import { MdTravelExplore } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'

const Sidebar = () => {
  const [pages, setPages] = useState([
    { title: 'Home', page: 'home' },
    { title: 'Job Invites', page: 'jobinvites' },
    { title: 'Analytics', page: 'analytics' },
    { title: 'My Profile', page: 'profile' },
    { title: 'Explore', page: 'explore' },
  ])
  const [communities, setCommunities] = useState([
    { title: 'Indonesia UI Designer', members: '740' },
    { title: 'Indonesia UX Researcher', members: '251' },
    { title: 'Prototyping Club', members: '165' },
    { title: 'Indonesia UI Designer', members: '759' },
    { title: 'Indonesia UI Designer', members: '280' },
    { title: 'Indonesia UI Designer', members: '635' },
    { title: 'Indonesia UI Designer', members: '135' },
  ])
  const [showAll, setShowAll] = useState(false)
  const [currPage, setCurrPage] = useState('home')
  return (
    <div className="w-[18%] py-2 relative">
      {/* pages */}
      <div className="flex flex-col gap-2 justify-center items-start py-3 font-normal pb-5 mx-3 border-b border-b-slate-400">
        {pages.map((page, i) => {
          return (
            <div
              key={i}
              className={`flex items-center gap-x-3 p-2 rounded-md ml-2 w-[90%] ${
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
      <div className='p-3 mt-5'>
        <h2 className='font-semibold text-lg mx-3'> Community Feeds</h2>
        <div className='flex flex-col justify-center items-start gap-3.5 p-2'>
          {communities.map((community, i ) =>{
            if(showAll || !showAll && i <4) return <div className='flex items-center justify-start gap-2' key={i}>
            <div className={`w-9 h-9 ${i%2===0 ? 'bg-red-100' : 'bg-blue-100'}  rounded-full`}></div>
            <div className='flex flex-col'>
              <span>{community.title}</span>
              <span className='text-sm text-slate-400'>
                {community.members} {" "} members
              </span>
            </div>
          </div>
          })}
          <span className='mx-auto flex items-center text-slate-500 text-sm cursor-pointer' onClick={()=>{setShowAll(e=>(!e))}}>
            {!showAll ?<span>Show {communities.length - 4 } more</span> : <span>Show less</span>}
          <IoIosArrowForward />
          </span>
        </div>
      </div>
      {/* Footer */}
      <div className='absolute bottom-10'>
      <div className='flex flex-wrap justify-center items-center gap-3'>
        <span className='text-sm text-slate-400 cursor-pointer'>About</span>
        <span className='text-sm text-slate-400 cursor-pointer'>Accessibility</span>
        <span className='text-sm text-slate-400 cursor-pointer'>Help</span>
        <span className='text-sm text-slate-400 cursor-pointer'>Privacy & Terms</span>
        <span className='text-sm text-slate-400 cursor-pointer'>Advertise</span>
        <span className='text-sm text-slate-400 cursor-pointer'>more</span>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <a href="https://spehre.io/" className='text-[#8984c4]'>Spehre.io</a> @ 2023
      </div>
      </div>
    </div>
  )
}

export default Sidebar
