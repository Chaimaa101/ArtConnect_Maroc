import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
     <div className="flex flex-col items-center ">
    
      <div className="w-full flex justify-center mt-6">
        <div className="flex items-center bg-[#ead0ad] rounded-full px-4 py-2 w-[350px] ">
          <input
            type="text"
            placeholder="Cherche ..."
            className="bg-transparent outline-none font-semibold w-full text-[#763613] placeholder-[#763613]"
          />
           <FaSearch className='text-[#763613] ' size={18}/>
        </div>
      </div>
    </div>

  )
}
