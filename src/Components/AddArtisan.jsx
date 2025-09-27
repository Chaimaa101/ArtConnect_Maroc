import React, { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Context } from "../Context/ContextGenerale";

function AddArtisan({ isOpen }) {
  const { closeModal, ajouter,modifier ,selectedData} = useContext(Context);
  const [formData, setFormData] = useState({
    nom: "",
    ville: "",
    description: "",
    image: null
  });
  const [imagePreview, setImagePreview] = useState("");

  // Reset form when modal opens/closes or selectedData changes
  useEffect(() => {
    if (isOpen) {
      if (selectedData.id) {
        setFormData({
          nom: selectedData.nom || selectedData.titre || "",
          ville: selectedData.ville || "",
          description: selectedData.description || "",
          image: null
        });
        setImagePreview(selectedData.image || "");
      } else {
        setFormData({
          nom: "",
          ville: "",
          description: "",
          image: null
        });
        setImagePreview("");
      }
    }
  }, [isOpen, selectedData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    submitData.append("nom", formData.nom);
    submitData.append("ville", formData.ville);
    submitData.append("description", formData.description);
    if (formData.image) {
      submitData.append("image", formData.image);
    }
    if (selectedData.id) {
      submitData.append("id", selectedData.id);
    }

    
  if(selectedData == null){
    await ajouter('artisans',submitData)
  }else{
    await modifier('artisans',submitData, selectedData.id)
  }
  
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>

      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] p-6 relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#764613] scrollbar-track-[#f5e7d0]">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#764613] mb-4">
          {selectedData.id ? "Modifier l'artisan" : "Ajouter un artisan"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Ajouter un nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ville"
              placeholder="Ajouter une ville"
              value={formData.ville}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Ajouter une description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            ></textarea>
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Image {!selectedData.id && <span className="text-red-500">*</span>}
            </label>
            <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-[#764613] bg-gray-50 rounded-md py-4 cursor-pointer hover:bg-gray-100">
              <FaCloudUploadAlt size={30} className="text-[#764613]" />
              <p className="mt-2 text-sm text-[#764613]">
                {imagePreview ? "Image sélectionnée" : "Choisir une image"}
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required={!selectedData.id}
              />
            </label>
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Preview" className="h-20 object-cover rounded" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#764613] text-white font-semibold hover:bg-[#895525] transition-colors"
          >
            {selectedData.id ? "Mettre à jour" : "Publier"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddArtisan;