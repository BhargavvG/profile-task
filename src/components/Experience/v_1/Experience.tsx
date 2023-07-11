import React from 'react'
import { RxBackpack } from 'react-icons/rx'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineModeEditOutline } from 'react-icons/md'

const Experience = () => {
  return (
    <div className="px-4 py-6 border-b">
              <h3 className="mb-8">Experience</h3>
              <div className="flex items-start">
                <div className="rounded-full p-2 text-lg text-[#7d78f9] bg-[#eceef7a5]">
                  <RxBackpack />
                </div>
                <div className="ml-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4>Crisis Intervation Sepcialist</h4>
                      <p>January 2023 - Present</p>
                      <p className="text-gray-400 mb-4">Icoders - Ahmedabad-india</p>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore amet vero laborum dignissimos
                    sint, eius quia perferendis cum doloremque! Praesentium accusantium qui explicabo, dolorum fugiat
                    officia. Officia, modi ea.
                  </p>
                </div>
              </div>
            </div>
  )
}

export default Experience