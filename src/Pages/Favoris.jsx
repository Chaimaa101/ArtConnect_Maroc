import { useState } from "react";

function Favoris() {
  const [favoris, setFavoris] = useState([
    {
      id: 1,
      titre: "",
      categorie: "Poterie",
      image:
        "https://images.unsplash.com/photo-1617196037327-5d83f1e85b2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      titre: "",
      categorie: "Tapis",
      image:
        "https://images.unsplash.com/photo-1598966733535-91cce458b098?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      titre: "Ensemble",
      categorie: "Bijoux",
      image:
         "src/assets/Bijoux.jpg"
    },
  ]);

  const retirerFavori = (id) => {
    setFavoris(favoris.filter((item) => item.id !== id));
  };

  return (
    <div className="py-12 px-6  min-h-screen">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Vos favoris</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favoris.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.titre}
              className="w-full h-48 object-cover"
            />

            {/* Contenu */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700">
                {item.titre}
              </h3>
              <p className="text-gray-600 mb-3">{item.categorie} -</p>

              <button
                onClick={() => retirerFavori(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Retirer des favoris
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
