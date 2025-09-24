import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

function Bartitre({title}) {
  return (
    <>
      <div className="bg-[#ead0ad] text-[#763613] text-lg  px-6 py-3 mt-10 rounded-full flex items-center gap-4">
              <h1>{title}</h1>
              <div className="ml-auto flex gap-2">
                <button className="bg-white/30 px-2 py-1 rounded-full"><FaArrowLeft /></button>
                <button className="bg-white/30 px-2 py-1 rounded-full"><FaArrowRight /></button>
              </div>
            </div>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
            <Outlet />
              
        </div>
    </>
  )
}

export default Bartitre
