import { useNavigate } from "react-router-dom"

function CategoryCard({image,title,id}) {
   const navigate = useNavigate();
  return (
    <>
       <div className="flex flex-col items-center" onClick={() =>navigate(`/details/category/${id}`)}>
      <img
        src={image}
        alt={title}
        className="w-32 h-32 rounded-full object-cover border-2 border-[#764613]"
      />
      <p className="mt-2 text-lg font-semibold text-[#764613]">{title}</p>
    </div>

    </>
  )
}

export default CategoryCard
