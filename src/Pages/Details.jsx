import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Context } from "../Context/ContextGenerale";

function Details() {
  const { type, id } = useParams();
  const { categories, evenements, artisans, oeuvres,addToFavoris } = useContext(Context);

  let collection = [];
  if (type === "categories") collection = categories;
  if (type === "evenements") collection = evenements;
  if (type === "artisans") collection = artisans;
  if (type === "oeuvres") collection = oeuvres;

  const item = collection.find((obj) => obj.id === parseInt(id));

  if (collection.length === 0) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  if (!item) {
    return <p className="text-center mt-10">Élément introuvable</p>;
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-10">
      <img
        src={item.image}
        alt={item. titre || item.nom}
        className="w-full md:w-64 h-64 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {item.nom || item. titre || item.titre}
          </h2>
          {item.ville && <p className="text-[#9A5B2D] font-semibold ">{item.ville}</p>}
          {item.date && <p className="mt-2">📅 {item.date}</p>}

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            {item.description}
          </p>
        </div>

        <button onClick={() => addToFavoris(item)} className="mt-6 inline-flex items-center gap-2 border border-[#9A5B2D] text-[#9A5B2D] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#9A5B2D] hover:text-white transition">
          <span><FaPlus /></span> Ajoute au favoris
        </button>
      </div>
    </div>
  );
}

export default Details;
