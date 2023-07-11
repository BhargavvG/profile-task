import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <div className="px-4 py-6">
      <h3 className="mb-8">Education</h3>
      <div className="flex items-start">
        <div className="rounded-full p-2 text-lg text-[#7d78f9] bg-[#eceef7a5]">
          <FaGraduationCap />
        </div>
        <div className="ml-3">
          <div className="flex justify-between items-start">
            <div>
              <h4>BE - Elecrtronics & Telecommunication</h4>
              <p>Aug 2015 - June 2019</p>
              <p className="text-gray-400 mb-4">SBJTMR - Nagpur-india</p>
            </div>
            <div className="flex gap-3">
              <span className="transtion-all hover:opacity-60 cursor-pointer">
                <div className="rounded-full p-1 text-white bg-[#7d78f9]">
                  <AiOutlinePlus />
                </div>
              </span>
              <span className="transtion-all hover:opacity-60 cursor-pointer">
                <div className="rounded-full p-1 text-white text-base bg-[#7d78f9]">
                  <MdOutlineModeEditOutline />
                </div>
              </span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore amet vero laborum dignissimos sint,
            eius quia perferendis cum doloremque! Praesentium accusantium qui explicabo, dolorum fugiat officia.
            Officia, modi ea.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
