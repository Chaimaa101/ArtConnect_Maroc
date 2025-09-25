import Search from "../Components/search";
import Bartitre from "../Components/Bartitre";
import EventCard from "../Components/EventCard";
import CategoryCard from "../Components/CategoryCard";
import ContextGenerale, { Context } from "../Context/ContextGenerale";
import { useContext } from "react";

export default function Home() {
  const { categories, evenements, oeuvres, artisans } = useContext(Context);

  return (
    <>
      <Search />
      <div className="w-full flex justify-center">
        <img
          src="src/assets/morocco.jpg"
          alt="Morocco Skyline"
          className="max-w-4xl"
        />
      </div>
      <Bartitre title="Categories" role={false} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-10">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            image={category.image}
            title={category.nom}
          />
        ))}
        </div>
    
      <Bartitre title="Evénements" role={false}>
        {evenements.map((event) => (
        <EventCard
          image={event.image}
          title={event.title}
          location={event.ville}
          date={event.date}
        />
        ))}
      </Bartitre>
    </>
  );
}
