import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/ContextGenerale";

export default function Card({ data, isAdmin = false, section }) {
  const navigate = useNavigate();
  const { openModalWithData, supprimer, addToFavoris } = useContext(Context);

  const handleEdit = (e) => {
    e.stopPropagation();
    openModalWithData({ data });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement?")) {
      supprimer(section, data.id);
    }
  };

  return (
    <div className="rounded-lg shadow-amber-700 shadow-sm overflow-hidden w-64 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div
        onClick={
          !isAdmin
            ? () => navigate(`/details/${section}/${data.id}`)
            : undefined
        }
      >
        <img
          src={data.image}
          alt={data.titre || data.nom}
          className="w-full h-40 object-cover"
        />

        <div className="p-3">
          <h3 className="font-semibold text-[#764613]">
            {data.titre || data.nom}
          </h3>
          {data.categorieNom && (
            <h3 className=" text-[#764613]">{data.categorieNom}</h3>
          )}
          <p className="text-lg text-gray-600">{data.ville}</p>
          {data.date && (
            <p className="text-sm font-bold text-gray-500">
              {new Date(data.date).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-2 p-2">
        {isAdmin ? (
          <>
            <button
              onClick={handleEdit}
              className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center"
            >
              <FaEdit size={16} />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
            >
              <FaTrash size={16} />
            </button>
          </>
        ) : (
          <button
                         onClick={() => addToFavoris(data)}
                         className="bg-[#763613] text-white px-4 py-2 rounded-lg hover:bg-[#9A5B2D] transition float-right mb-2"
                       >
                         <FaHeart />
                       </button>
        )}
      </div>
    </div>
  );
}
