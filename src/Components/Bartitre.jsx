import { useContext } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Context } from '../Context/ContextGenerale'

function Bartitre({title ,children,role}) {
  const {handleOpenModal} = useContext(Context)
  return (
    <>
      <div className="bg-[#ead0ad] text-[#763613] text-lg  px-6 py-3 mt-10 rounded-full flex items-center gap-4">
              <h1>{title}</h1>
              {role ? <div className="ml-auto flex gap-2">
                <button className='p-2 px-5 bg-[#763613] text-white rounded-full'  onClick={handleOpenModal}>Ajouter</button>
              </div>
              :
              <div className="ml-auto flex gap-2">
                <button className="bg-white/30 px-2 py-1 rounded-full"><FaArrowLeft /></button>
                <button className="bg-white/30 px-2 py-1 rounded-full"><FaArrowRight /></button>
              </div>
              }
            </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
            {children}
        </div>
    </>
  )
}

export default Bartitre
