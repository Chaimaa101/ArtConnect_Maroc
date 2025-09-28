import { useContext, useState } from "react" 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa" 
import { Context } from "../Context/ContextGenerale" 

function Bartitre({ title, items, renderItem, isAdmin,children }) {
  const { openModalWithData } = useContext(Context) 

  //  Gestion du carousel
  const [startIndex, setStartIndex] = useState(0) 
  const itemsPerPage = 3 
  const visibleItems = items?.slice(startIndex, startIndex + itemsPerPage) 

  const handleNext = () => {
    if (startIndex + itemsPerPage < items.length) {
      setStartIndex(startIndex + itemsPerPage) 
    }
  } 

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage) 
    }
  } 

  return (
    <>
      <div className="bg-[#ead0ad] text-[#763613] text-base sm:text-lg md:text-xl px-4 sm:px-6 py-3 mt-6 sm:mt-10 rounded-full flex flex-wrap items-center gap-3 sm:gap-4">
        <h1 className="font-semibold">{title}</h1>

        {isAdmin ? (
          <div className="ml-auto flex gap-2">
            <button
              className="px-4 sm:px-5 py-2 bg-[#763613] text-white rounded-full text-sm sm:text-base"
              onClick={openModalWithData}
            >
              Ajouter
            </button>
          </div>
        ) : (
          <div className="ml-auto flex gap-2">
            <button
              className="bg-white/30 p-2 rounded-full disabled:opacity-40"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-white/30 p-2 rounded-full disabled:opacity-40"
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= items.length}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      {isAdmin ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
          {children}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
          {visibleItems?.map((item) => renderItem(item))}
        </div>
      )}
    </>
  ) 
}

export default Bartitre 
