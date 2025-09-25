import { useNavigate } from "react-router-dom"

function OeuvreCard({image,title,category,id}) {
     const navigate = useNavigate();

  return (
    <>
      <div className="border rounded-md  shadow-amber-700 shadow-sm overflow-hidden w-64" onClick={() =>navigate(`/details/oeuvre/${id}`)}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-[#764613]">{title}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
      <div className="flex justify-end p-2">
        <FaHeart className="text-[#764613] cursor-pointer hover:text-[#895525]" />
      </div>
    </div>
    </>
  )
}

export default OeuvreCard
