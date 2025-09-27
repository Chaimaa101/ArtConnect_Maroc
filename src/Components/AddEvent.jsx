import { useState, useEffect, useContext } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Context } from "../Context/ContextGenerale";

function AddEvent({ isOpen, onClose }) {
  const { selectedData, ajouter, modifier,  closeModal} = useContext(Context);
  const [formData, setFormData] = useState({
     titre: "",
    ville: "",
    date: "",
    description: "",
    image: null
  });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (selectedData) {
        setFormData({
           titre: selectedData. titre || "",
          ville: selectedData.ville || "",
          date: selectedData.date || "",
          description: selectedData.description || "",
          image: null
        });
        setImagePreview(selectedData.image || "");
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
    submitData.append(" titre", formData. titre);
    submitData.append("ville", formData.ville);
    submitData.append("date", formData.date);
    submitData.append("description", formData.description);
    if (formData.image) {
      submitData.append("image", formData.image);
    }
    if (selectedData?.id) {
      submitData.append("id", selectedData.id);
    }

  if(selectedData == null){
    await ajouter('evenements',submitData)
  }else{
    await modifier('evenements',submitData, selectedData.id)
  }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] p-6 relative overflow-y-auto">
        <button
           onClick={closeModal}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#764613] mb-4">
          {selectedData.id ? "Modifier l'événement" : "Ajouter un événement"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Titre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=" titre"
              placeholder="Ajouter un titre"
              value={formData. titre}
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
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
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
              Image {!selectedData && <span className="text-red-500">*</span>}
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
            {selectedData ? "Mettre à jour" : "Publier"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;