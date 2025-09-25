import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ContextGenerale";
import { useContext } from "react";

export default function EventCard({ 
  image, 
  title, 
  location, 
  date, 
  id, 
  isAdmin = false, 
  onEdit, 
  onDelete 
}) {
  const navigate = useNavigate();
    const {handleOpenModal} = useContext(Context)
  

  return (
    <div 
      className="rounded-lg shadow-amber-700 shadow-sm overflow-hidden w-64"
      onClick={!isAdmin ? () => navigate(`/details/evenement/${id}`) : undefined}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />


      <div className="p-3">
        <h3 className="font-semibold text-[#764613]">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        {date && <p className="text-xs text-gray-500">{date}</p>}
      </div>

      <div className="flex justify-end gap-2 p-2">
        {isAdmin ? (
          <>
          <button
   onClick={handleOpenModal}
  className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center"
>
  <FaEdit size={16} />
</button>

<button
  onClick={(e) => {
    e.stopPropagation();
    onDelete?.(id);
  }}
  className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
>
  <FaTrash size={16} />
</button>
          </>
        ) : (
          <FaHeart className="text-[#764613] cursor-pointer hover:text-[#895525]" />
        )}
      </div>
    </div>
  );
}
