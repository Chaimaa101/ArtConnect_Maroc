import { useState } from "react";
import axios from "axios";

function Publier() {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titre || !categorie || !region || !image) {
      alert("Merci de remplir tous les champs !");
      return;
    }

    try {
      await axios.post("http://localhost:3000/oeuvres", {
        titre,
        categorie,
        region,
        image: URL.createObjectURL(image), // preview en base
      });

      alert("Œuvre publiée avec succès !");
      setTitre("");
      setCategorie("");
      setRegion("");
      setImage(null);
    } catch (error) {
      console.error("Erreur lors de la publication :", error);
      alert("Erreur de publication");
    }
  };

  return (
    <div className="flex justify-center items-center py-16  from-yellow-50 to-red-100 min-h-[calc(100vh-200px)]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-[400px] border"
      >
        <h2 className="text-center text-2xl font-bold text-red-700 mb-4">
          Publier une œuvre 
        </h2>

  
        <input
          type="text"
          placeholder="Titre de l'œuvre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="">Sélectionnez une catégorie</option>
          <option value="Poterie">Poterie</option>
          <option value="Tapis">Tapis</option>
          <option value="Bois">Travail du bois</option>
          <option value="Bijoux">Bijoux</option>
        </select>

        <input
          type="text"
          placeholder="Région/Ville"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-lg mb-3"
        />
        {image && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Publier
        </button>
      </form>
    </div>
  );
}

export default Publier
