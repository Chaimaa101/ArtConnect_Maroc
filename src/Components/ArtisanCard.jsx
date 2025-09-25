import { useNavigate } from "react-router-dom"

function ArtisanCard({image,title,id}) {
   const navigate = useNavigate();

  return (
    <>
       <div className="flex flex-col items-center cursor-pointer" onClick={() =>navigate(`/details/artisan/${id}`)}>
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-full object-cover border-2 border-[#764613]"
      />
      <p className="mt-2 text-sm font-semibold text-[#764613]">{title}</p>
    </div>
    </>
  )
}

export default ArtisanCard
