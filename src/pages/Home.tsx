import React, { FC } from 'react'
import { IoIosPeople } from 'react-icons/io'
import Experience from '../components/Experience/v_1'
import Education from '../components/Education/v_1/Education'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home: FC<{}> = ({}) => {
  return (
    <div className="w-[82%]">
      <div className="w-full h-44 z-10">
        <img src="./profilebackground.avif" className="w-full h-full object-cover object-center" alt="img" />
      </div>
      <div className="flex items-start">
        {/* Profile */}
        <div className="bg-white w-6/12 relative h-full" style={{ boxShadow: '0 0 11px rgba(33,33,33,.2)' }}>
          <div className="w-36 h-36 rounded-full mx-auto absolute left-1/2 translate-x-[-50%] -top-16 z-20 bg-slate-400"></div>
          <div className="flex flex-col justify-center items-center gap-1 top-20 relative pb-20">
            <h2 className="text-lg pt-3">Bhargav Gangadharani</h2>
            <span className="text-slate-400 text-sm">MERN Stack Developer</span>
            <div className="flex text-sm gap-1">
              <IoIosPeople className="text-xl"></IoIosPeople> 200 Followers 200 Following
            </div>
          </div>
          <div className="mx-3 mt-5">
            <div className="flex items-center justify-center w-full">
            <div className="font-medium text-base pr-2">Make my profile visible to employers</div>
              <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="sr-only" />
                  <div className="w-9 h-3.5 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-5 h-5 bg-slate-100 rounded-full shadow -left-1 -top-1 transition border border-slate-600"></div>
                </div>
              </label>
            </div>
            <span className="text-slate-400 text-sm">
              Your profile and career goals will appear when employers search our database for candidates.{' '}
            </span>
          </div>
          <div className="mx-3 mt-5">
            <div className="font-medium text-base">Online Links</div>
            <span className="text-slate-400 text-sm">
              Add your online portfolio links to increase your profile strength.{' '}
            </span>
          </div>
          <div className="m-4 mt-5 mx-4 px-3 p-2 bg-slate-200 rounded-md flex gap-3 items-center justify-center">
            <img src="./bitbucket.png" className="w-8 cursor-pointer" alt="" />
            <img src="./gitlab.png" className="w-8 cursor-pointer" alt="" />
            <img src="./slacklogo.png" className="w-8 cursor-pointer" alt="" />
          </div>

          <div className="mt-5 px-3 p-2 pb-2">
            <div className="text-lg font-medium pb-3">Your Ranking</div>
            <ProgressBar now={70} variant="info" label={`70%`} animated />
            <span className="mt-3 text-sm text-slate-400">
              Hurry! You are in top <span className="text-blue-500 text-base">10%</span>
            </span>
          </div>
          <div className="bg-slate-100 rounded-md px-2 mt-5 mx-3 h-[100px]">
            <div className="text-center mx-auto flex justify-center items-center pt-3">
              <span>Wheel of Opportunities</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-sm shadow-md m-4" style={{ boxShadow: '0 0 11px rgba(33,33,33,.2)' }}>
          <ul className="flex border-b border-gray-400 overflow-x-auto font-medium text-base">
            <li className="py-4 border-b-4 border-primary px-6">About</li>
            <li className="py-4 border-b-4 border-transparent px-6">Skills & Certificates</li>
            <li className="py-4 border-b-4 border-transparent px-6">Posts</li>
            <li className="py-4 border-b-4 border-transparent px-6">Spaces</li>
          </ul>
          {/* About */}
          <div className="px-1 py-4">
            <div className="px-4 py-6 border-b text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga nemo iure, in maiores rerum debitis
              odit sapiente aperiam. Asperiores corporis accusamus quaerat obcaecati fuga dignissimos eaque consequuntur
              vitae nobis?
            </div>
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
