import { useState } from "react"  
import { IoClose } from "react-icons/io5"  
import { FaCloudUploadAlt } from "react-icons/fa"  

function AddCategory({ isOpen, onClose, initialData = {} }) {
  const [nom, setNom] = useState(initialData.nom || "")  
  const [description, setDescription] = useState(initialData.description || "")  
  const [image, setImage] = useState(initialData.image || null)  

  if (!isOpen) return null  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg h-[80vh] p-6 relative overflow-y-auto">
        
  
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#764613] mb-4">
          {initialData.id ? "Modifier une catégorie" : "Ajouter une catégorie"}
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nom de la catégorie"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613] bg-[#e7c79e]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Ajouter une description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613] bg-[#e7c79e]"
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Image <span className="text-red-500">*</span>
            </label>
            <div className="w-full flex flex-col items-center justify-center border-2 border-dashed border-[#764613] bg-[#e7c79e] rounded-md py-8 cursor-pointer">
              <FaCloudUploadAlt size={40} className="text-[#764613]" />
              <p className="mt-2 text-sm text-[#764613]">Choisir une image</p>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#764613] text-white font-semibold hover:bg-[#895525]"
          >
            {initialData.id ? "Modifier" : "Publier"}
          </button>
        </form>
      </div>
    </div>
  )  
}

export default AddCategory  
