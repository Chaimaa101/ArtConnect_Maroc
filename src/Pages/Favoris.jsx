import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../Context/ContextGenerale";

function Favoris() {
  const {favoris,supprimerFavoris } = useContext(Context)
  return (
    <div className="py-12 px-6  min-h-screen">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Vos favoris</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favoris.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.titre}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700">
                {item.titre}
              </h3>
              <p className="text-gray-600 mb-3">{item.categorie} -</p>

              <button
                onClick={() => supprimerFavoris(item.id)}
                className="bg-[#763613] text-white px-4 py-2 rounded-lg hover:bg-[#9A5B2D] transition float-right mb-2"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {favoris.length === 0 && (
          <p className="text-gray-600 italic col-span-3">
            Aucun favori enregistré.
          </p>
        )}
      </div>
    </div>
  );
}

export default Favoris;
