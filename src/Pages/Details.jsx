import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Details() {
     const { type, id } = useParams();
  const { categories, evenements, artisans, oeuvres } = useContext(DataContext);

  let item;
  if (type === "category") {
    item = categories.find((c) => c.id === parseInt(id));
  } else if (type === "evenement") {
    item = evenements.find((e) => e.id === parseInt(id));
  } else if (type === "artisan") {
    item = artisans.find((a) => a.id === parseInt(id));
  } else if (type === "oeuvre") {
    item = oeuvres.find((o) => o.id === parseInt(id));
  }
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-10">
    
      <img
        src="/tapis.jpg" 
        alt="Tapis Marocain"
        className="w-full md:w-64 h-64 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{item.nom || item.title}</h2>
          <p className="text-[#9A5B2D] font-medium mt-1">categorie</p>
          { item.ville && <p className="text-gray-500 italic mt-1">{item.ville}</p>}
   {item.date && <p className="mt-2">📅 {item.date}</p>}

          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {item.description}
          </p>
        </div>

        <button className="mt-6 inline-flex items-center gap-2 border border-[#9A5B2D] text-[#9A5B2D] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#9A5B2D] hover:text-white transition">
          <span><FaPlus /></span> Ajoute au favoris
        </button>
      </div>
    </div>
  );
}

export default Details;
