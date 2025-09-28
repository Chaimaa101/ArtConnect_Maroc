import { useContext, useState } from "react";
import { Context } from "../Context/ContextGenerale";
import { FaCloudArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Publier() {
  const { categories, ajouter } = useContext(Context);
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [ville, setville] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate()
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titre || !categorie || !ville || !image) {
      alert("Merci de remplir tous les champs !");
      return;
    }
 const newOeuvre = {
    titre,
    categorieId: parseInt(categorie), 
    ville,
    image,
  };

    await ajouter("oeuvres", newOeuvre)
    navigate("/")
  };

  return (
  
      <div className="flex justify-center items-center my-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
        >
          <h2 className="text-center text-2xl font-bold text-[#763613] mb-6">
            Publier une œuvre
          </h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Titre de l'œuvre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#763613]"
            />
          </div>

          <div className="mb-4">
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#763613]"
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nom}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Région/Ville"
              value={ville}
              onChange={(e) => setville(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#763613]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="imageUpload"
              className="block w-full cursor-pointer border-2 border-dashed border-[#763613] rounded-lg p-4 text-center hover:bg-red-50 transition"
            >
              {image ? (
                <div className="flex flex-col items-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                  />
                  <span className="text-[#763613]">Image sélectionnée</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                 <FaCloudArrowDown />
                  <span className="text-[#763613] font-medium">Cliquez pour choisir une image</span>
                  <span className="text-gray-500 text-sm mt-1">Formats supportés: JPG, PNG, GIF</span>
                </div>
              )}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#763613] text-white py-3 rounded-lg hover:bg-[#763613] transition font-medium text-lg"
          >
            Publier
          </button>
        </form>
        </div>
  );
}

export default Publier;