import { useState } from "react"  
import { FaCloudUploadAlt } from "react-icons/fa"  
import { IoClose } from "react-icons/io5"  

export default function AddOeuvre({ isOpen, onClose, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "")  
  const [ville, setVille] = useState(initialData.ville || "")  
  const [description, setDescription] = useState(initialData.description || "")  
  const [category, setCategory] = useState(initialData.category || "")  
  const [image, setImage] = useState(initialData.image || null)  

  if (!isOpen) return null  

  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log({ title, ville, category, description, image })  
    onClose()  
  }  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg h-[80vh] p-6 relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#764613] scrollbar-track-[#f5e7d0]">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#764613] mb-4">
          {initialData.id ? "Modifier l’œuvre" : "Ajouter une œuvre"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Titre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ajouter un titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613] bg-[#e7c79e]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ajouter une ville"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613] bg-[#e7c79e]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Catégorie <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613] bg-[#e7c79e]"
            >
              <option value="">Sélectionner catégorie</option>
              <option value="peinture">Peinture</option>
              <option value="sculpture">Sculpture</option>
              <option value="artisanat">Artisanat</option>
            </select>
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
            {initialData.id ? "Mettre à jour" : "Publier"}
          </button>
        </form>
      </div>
    </div>
  )  
}
